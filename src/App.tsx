import { useEffect, useMemo, useState, type FormEvent } from 'react'
import { useAppKit, useAppKitAccount, useAppKitProvider, useDisconnect } from '@reown/appkit/react'
import type { Provider } from '@reown/appkit-adapter-ethers'
import {
  ArrowRight,
  CalendarClock,
  Check,
  ChevronRight,
  CircleAlert,
  Copy,
  ExternalLink,
  FileKey2,
  Fingerprint,
  History,
  Import,
  KeyRound,
  LockKeyhole,
  LogOut,
  Plus,
  Search,
  ShieldCheck,
  Sparkles,
  Wallet,
  X,
} from 'lucide-react'
import { parseEventLogs, zeroHash, type EIP1193Provider } from 'viem'
import './App.css'
import { ensureMonadNetwork, importTransaction, explorerTx, monadTestnet, publicClient, shortAddress, walletClient } from './lib/chain'
import { WHYTX_ABI, WHYTX_ADDRESS } from './lib/contract'
import { buildTree, getProof, randomSalt, verifyProof } from './lib/merkle'
import { decodeReveal, encodeReveal } from './lib/reveal'
import { decryptRecords, encryptRecords, keyFromSignature, unlockMessage, vaultKey } from './lib/vault'
import {
  RECORD_FIELDS,
  type ImportedTransaction,
  type RecordField,
  type RecordVersion,
  type RecordValues,
  type RevealPayload,
  type WhyRecord,
} from './types'

const emptyValues: RecordValues = {
  purpose: '', category: 'Deposit', counterparty: '', followUp: '', status: 'Waiting', privateDetails: '',
}

const fieldLabels: Record<RecordField, string> = {
  purpose: 'Purpose', category: 'Category', counterparty: 'Person or organization',
  followUp: 'Follow-up date', status: 'Status', privateDetails: 'Private details',
}

const categories = ['Deposit', 'Loan', 'Purchase', 'Freelance payment', 'Investment', 'Refund', 'Gift', 'Shared expense', 'Personal wallet transfer', 'Subscription', 'Other']
const statuses = ['Open', 'Waiting', 'Completed', 'Repaid', 'Refunded', 'Disputed', 'Cancelled']

const displayDate = (timestamp: number) => new Intl.DateTimeFormat('en', { month: 'short', day: 'numeric', year: 'numeric' }).format(timestamp)

function Logo() {
  return <div className="brand"><span className="brand-mark"><Fingerprint size={19} /></span><span>WhyTx</span></div>
}

function Toast({ message, onDone }: { message: string; onDone: () => void }) {
  useEffect(() => { const timer = setTimeout(onDone, 3200); return () => clearTimeout(timer) }, [onDone])
  return <div className="toast"><Check size={16} />{message}</div>
}

function VerifyPage() {
  const [payload, setPayload] = useState<RevealPayload | null>(null)
  const [error, setError] = useState('')
  const [chainMatch, setChainMatch] = useState<boolean | null>(null)

  useEffect(() => {
    try {
      const encoded = window.location.hash.replace(/^#verify\//, '')
      if (!encoded) throw new Error('This verification link has no reveal data.')
      const next = decodeReveal(encoded)
      setPayload(next)
      if (next.contract && next.anchorId) {
        publicClient.readContract({ address: next.contract, abi: WHYTX_ABI, functionName: 'records', args: [next.anchorId as `0x${string}`] })
          .then((record) => setChainMatch(
            record[0].toLowerCase() === next.creator.toLowerCase()
            && record[2].toLowerCase() === next.root.toLowerCase()
            && record[1].toLowerCase() === next.transactionHash.toLowerCase(),
          ))
          .catch(() => setChainMatch(false))
      } else setChainMatch(null)
    } catch (cause) { setError(cause instanceof Error ? cause.message : 'Invalid verification link') }
  }, [])

  const proofMatch = payload?.fields.every((item) => verifyProof(item.field, item.value, item.salt, item.proof, payload.root)) ?? false

  return <main className="verify-shell">
    <header className="verify-nav"><Logo /><a href="/">Open WhyTx <ArrowRight size={15} /></a></header>
    <section className="verify-card">
      {error ? <><CircleAlert className="error-icon" size={36} /><h1>Link cannot be verified</h1><p>{error}</p></> : payload ? <>
        <div className={`seal ${proofMatch && chainMatch !== false ? 'valid' : 'invalid'}`}><ShieldCheck size={29} /></div>
        <p className="eyebrow">Independent verification</p>
        <h1>{!proofMatch || chainMatch === false ? 'Verification failed' : chainMatch === true ? 'This matches the secured record' : 'These revealed fields are intact'}</h1>
        <p className="verify-intro">Only the fields chosen by the record owner are visible. Hidden fields remain private.</p>
        <div className="revealed-fields">
          {payload.fields.map((item) => <div key={item.field}><span>{fieldLabels[item.field]}</span><strong>{item.value || 'Not specified'}</strong><Check size={15} /></div>)}
        </div>
        <div className="proof-facts">
          <div><span>Recorded by</span><strong>{shortAddress(payload.creator)}</strong></div>
          <div><span>Version</span><strong>{payload.version}</strong></div>
          <div><span>Recorded</span><strong>{displayDate(payload.createdAt)}</strong></div>
          <div><span>Onchain anchor</span><strong>{chainMatch === true ? 'Confirmed' : chainMatch === false ? 'Not found' : 'Not anchored'}</strong></div>
        </div>
        <div className="verify-links"><a className="tx-link" href={explorerTx(payload.transactionHash)} target="_blank" rel="noreferrer">Original transaction <ExternalLink size={14} /></a>{payload.anchorTx && <a className="tx-link" href={explorerTx(payload.anchorTx)} target="_blank" rel="noreferrer">Onchain proof <ExternalLink size={14} /></a>}</div>
        <details><summary>What does this prove?</summary><p>It proves these revealed values match the cryptographic record created at the shown time. It does not prove that the creator's statements are factually true or legally enforceable.</p></details>
      </> : <p>Checking proof…</p>}
    </section>
  </main>
}

function Landing({ connect, busy, error, connected }: { connect: () => void; busy: boolean; error: string; connected: boolean }) {
  return <div className="landing">
    <nav><Logo /><button className="nav-connect" onClick={connect} disabled={busy}><Wallet size={16} />{busy ? 'Unlocking…' : connected ? 'Unlock ledger' : 'Connect wallet'}</button></nav>
    <main className="hero">
      <div className="hero-copy">
        <div className="network-pill"><span /> Live on Monad Testnet</div>
        <h1>Your wallet remembers <em>what.</em><br />WhyTx remembers <em>why.</em></h1>
        <p>Attach private context to crypto transactions, follow up later, and prove what you recorded—without putting your notes onchain.</p>
        <div className="hero-actions"><button className="primary large" onClick={connect} disabled={busy}>{busy ? 'Unlocking…' : connected ? 'Unlock your private ledger' : 'Connect a wallet'} <ArrowRight size={17} /></button><a href="#how">See how it works</a></div>
        {error && <p className="error-message"><CircleAlert size={15} />{error}</p>}
        <div className="privacy-line"><LockKeyhole size={14} /> Notes are encrypted in your browser. Only fingerprints go onchain.</div>
      </div>
      <div className="story-card">
        <div className="story-top"><span>JUL 10</span><span className="secure-chip"><ShieldCheck size={13} /> Secured</span></div>
        <div className="amount">− 500.00 <small>USDC</small></div>
        <p className="address">To 0x83a1…9f21</p>
        <div className="story-note"><span>WHY</span><strong>Refundable apartment deposit</strong><p>Expected back by September 1.</p></div>
        <div className="story-footer"><div><CalendarClock size={16} /><span>Follow up<br /><strong>Sep 1</strong></span></div><div><History size={16} /><span>Record<br /><strong>Version 1</strong></span></div></div>
      </div>
    </main>
    <section id="how" className="how"><p className="eyebrow">One honest loop</p><h2>Attach. Remember. Reveal. Verify.</h2><div>{[
      [FileKey2, 'Attach context', 'Add a purpose, category, person, status, and follow-up to a real transaction.'],
      [LockKeyhole, 'Keep it private', 'Your readable record is encrypted locally. Monad receives only a salted fingerprint.'],
      [ShieldCheck, 'Prove when needed', 'Reveal selected fields and let anyone independently confirm they were not changed.'],
    ].map(([Icon, title, copy], index) => { const I = Icon as typeof FileKey2; return <article key={String(title)}><span>0{index + 1}</span><I size={22} /><h3>{String(title)}</h3><p>{String(copy)}</p></article> })}</div></section>
  </div>
}

function RecordEditor({ transaction, existing, onClose, onSave, busy }: {
  transaction: ImportedTransaction; existing?: WhyRecord; onClose: () => void;
  onSave: (values: RecordValues) => void; busy: boolean
}) {
  const latest = existing?.versions.at(-1)
  const [values, setValues] = useState<RecordValues>(latest?.values ?? emptyValues)
  const update = (field: RecordField, value: string) => setValues((current) => ({ ...current, [field]: value }))
  const submit = (event: FormEvent) => { event.preventDefault(); onSave(values) }
  return <div className="modal-backdrop"><form className="editor" onSubmit={submit}>
    <button type="button" className="close" onClick={onClose} aria-label="Close"><X /></button>
    <p className="eyebrow">{latest ? `Save version ${latest.version + 1}` : 'Add private context'}</p>
    <h2>What was this transaction for?</h2>
    <div className="tx-summary"><span>− {Number(transaction.value).toLocaleString(undefined, { maximumFractionDigits: 5 })} {transaction.tokenSymbol}</span><small>{shortAddress(transaction.to ?? transaction.from)} · {displayDate(transaction.timestamp)}</small></div>
    <label>Purpose<textarea autoFocus required value={values.purpose} onChange={(event) => update('purpose', event.target.value)} placeholder="e.g. Refundable apartment deposit" /></label>
    <div className="form-row"><label>Category<select value={values.category} onChange={(event) => update('category', event.target.value)}>{categories.map((item) => <option key={item}>{item}</option>)}</select></label><label>Status<select value={values.status} onChange={(event) => update('status', event.target.value)}>{statuses.map((item) => <option key={item}>{item}</option>)}</select></label></div>
    <div className="form-row"><label>Person or organization<input value={values.counterparty} onChange={(event) => update('counterparty', event.target.value)} placeholder="e.g. Apartment owner" /></label><label>Follow-up date<input type="date" value={values.followUp} onChange={(event) => update('followUp', event.target.value)} /></label></div>
    <label>Private details <span className="optional">optional · never revealed by default</span><textarea value={values.privateDetails} onChange={(event) => update('privateDetails', event.target.value)} placeholder="Anything for your eyes only" /></label>
    <div className="privacy-callout"><LockKeyhole size={17} /><p><strong>Private by design</strong><br />Readable details are encrypted in this browser. Only a cryptographic fingerprint is sent to Monad.</p></div>
    <button className="primary secure-button" disabled={busy}><ShieldCheck size={17} />{busy ? 'Securing on Monad…' : WHYTX_ADDRESS ? 'Secure this record' : 'Save private draft'}</button>
  </form></div>
}

function RevealDialog({ record, onClose, onToast }: { record: WhyRecord; onClose: () => void; onToast: (message: string) => void }) {
  const version = record.versions.at(-1)!
  const [chosen, setChosen] = useState<RecordField[]>(['purpose', 'category', 'status'])
  const toggle = (field: RecordField) => setChosen((current) => current.includes(field) ? current.filter((item) => item !== field) : [...current, field])
  const share = async () => {
    const tree = buildTree(version.values, version.salts)
    const payload: RevealPayload = {
      schema: 'whytx.reveal.v1', chainId: monadTestnet.id, contract: WHYTX_ADDRESS,
      creator: version.creator, transactionHash: record.transaction.hash, root: version.root,
      version: version.version, createdAt: version.createdAt, anchorId: version.anchorId, anchorTx: version.anchorTx,
      fields: chosen.map((field) => ({ field, value: version.values[field], salt: version.salts[field], proof: getProof(tree, field) })),
    }
    const appRoot = new URL(import.meta.env.BASE_URL, window.location.href).href.split('#')[0]
    const url = `${appRoot}#verify/${encodeReveal(payload)}`
    await navigator.clipboard.writeText(url)
    onToast('Private verification link copied')
    onClose()
  }
  return <div className="modal-backdrop"><section className="reveal-dialog"><button className="close" onClick={onClose}><X /></button><p className="eyebrow">Selective reveal</p><h2>Choose what to show</h2><p>The other details stay hidden. Every chosen field includes a proof that anyone can check.</p><div className="reveal-options">{RECORD_FIELDS.map((field) => <label key={field}><input type="checkbox" checked={chosen.includes(field)} onChange={() => toggle(field)} /><span><strong>{fieldLabels[field]}</strong><small>{version.values[field] || 'Not specified'}</small></span><Check size={15} /></label>)}</div>{record.versions.length > 1 && <div className="version-history"><strong><History size={14} /> Version history</strong>{record.versions.map((item) => <div key={item.id}><span>Version {item.version}</span><small>{displayDate(item.createdAt)}</small><span className={item.anchorId ? 'history-secured' : ''}>{item.anchorId ? 'Secured' : 'Draft'}</span></div>)}</div>}<button className="primary secure-button" disabled={!chosen.length} onClick={share}><Copy size={16} /> Copy verification link</button></section></div>
}

function Dashboard({ address, vault, setVault, vaultCrypto, provider, disconnect }: {
  address: `0x${string}`; vault: WhyRecord[]; setVault: (records: WhyRecord[]) => void; vaultCrypto: CryptoKey;
  provider: EIP1193Provider; disconnect: () => void
}) {
  const [importOpen, setImportOpen] = useState(false)
  const [txHash, setTxHash] = useState('')
  const [selected, setSelected] = useState<ImportedTransaction | null>(null)
  const [revealing, setRevealing] = useState<WhyRecord | null>(null)
  const [busy, setBusy] = useState(false)
  const [error, setError] = useState('')
  const [toast, setToast] = useState('')
  const [query, setQuery] = useState('')

  const persist = async (records: WhyRecord[]) => {
    localStorage.setItem(vaultKey(address), await encryptRecords(vaultCrypto, records))
    setVault(records)
  }

  const doImport = async (event: FormEvent) => {
    event.preventDefault(); setBusy(true); setError('')
    try {
      if (!/^0x[0-9a-fA-F]{64}$/.test(txHash)) throw new Error('Enter a valid 66-character transaction hash.')
      const tx = await importTransaction(txHash as `0x${string}`)
      if (!tx.success) throw new Error('Only confirmed successful transactions can be recorded.')
      if (tx.from.toLowerCase() !== address.toLowerCase() && tx.to?.toLowerCase() !== address.toLowerCase()) throw new Error('This transaction does not involve the connected wallet.')
      setImportOpen(false); setTxHash(''); setSelected(tx)
    } catch (cause) { setError(cause instanceof Error ? cause.message : 'Could not import transaction') }
    finally { setBusy(false) }
  }

  const saveRecord = async (values: RecordValues) => {
    if (!selected) return
    setBusy(true); setError('')
    try {
      const existing = vault.find((item) => item.transaction.hash === selected.hash)
      const salts = Object.fromEntries(RECORD_FIELDS.map((field) => [field, randomSalt()])) as Record<RecordField, `0x${string}`>
      const tree = buildTree(values, salts)
      const version: RecordVersion = {
        id: crypto.randomUUID(), creator: address, version: (existing?.versions.length ?? 0) + 1, createdAt: Date.now(),
        values, salts, root: tree.root, previousAnchorId: existing?.versions.at(-1)?.anchorId,
      }
      if (WHYTX_ADDRESS) {
        await ensureMonadNetwork(provider)
        const client = walletClient(provider)
        const anchorTx = await client.writeContract({
          address: WHYTX_ADDRESS, abi: WHYTX_ABI, functionName: 'secureRecord',
          args: [selected.hash, tree.root, (version.previousAnchorId as `0x${string}` | undefined) ?? zeroHash], account: address,
        })
        const receipt = await publicClient.waitForTransactionReceipt({ hash: anchorTx })
        const logs = parseEventLogs({ abi: WHYTX_ABI, logs: receipt.logs, eventName: 'RecordSecured' })
        version.anchorTx = anchorTx
        version.anchorId = logs[0]?.args.id
        version.createdAt = Number(logs[0]?.args.createdAt ?? BigInt(Math.floor(Date.now() / 1000))) * 1000
      }
      const next = existing
        ? vault.map((item) => item.transaction.hash === selected.hash ? { ...item, versions: [...item.versions, version] } : item)
        : [{ transaction: selected, versions: [version] }, ...vault]
      await persist(next)
      setSelected(null); setToast(WHYTX_ADDRESS ? 'Record secured on Monad' : 'Private draft saved')
    } catch (cause) { setError(cause instanceof Error ? cause.message : 'Could not secure record') }
    finally { setBusy(false) }
  }

  const filtered = vault.filter((record) => JSON.stringify(record.versions.at(-1)?.values).toLowerCase().includes(query.toLowerCase()) || record.transaction.hash.includes(query))
  const due = vault.filter((record) => { const date = record.versions.at(-1)?.values.followUp; return date && !['Completed', 'Repaid', 'Refunded', 'Cancelled'].includes(record.versions.at(-1)!.values.status) }).length

  return <div className="dashboard">
    <aside><Logo /><nav><button className="active"><Sparkles /> Overview</button><button><FileKey2 /> Transactions <span>{vault.length}</span></button><button><CalendarClock /> Follow-ups <span>{due}</span></button><button><ShieldCheck /> Shared proofs</button></nav><div className="aside-proof"><Fingerprint /><strong>Private by default</strong><p>Only salted fingerprints leave this device.</p></div><button className="wallet-row" onClick={disconnect}><span className="avatar">{address.slice(2, 4).toUpperCase()}</span><span>{shortAddress(address)}<small>Monad Testnet</small></span><LogOut size={15} /></button></aside>
    <main className="workspace">
      <header><div><p className="eyebrow">Private transaction memory</p><h1>Good {new Date().getUTCHours() < 12 ? 'morning' : 'afternoon'}.</h1><p>Give every transfer a reason you can trust later.</p></div><button className="primary" onClick={() => setImportOpen(true)}><Plus size={17} /> Add transaction</button></header>
      <section className="stats"><article><span>Secured records</span><strong>{vault.filter((r) => r.versions.at(-1)?.anchorId).length}</strong><small><ShieldCheck /> timestamped on Monad</small></article><article><span>Need follow-up</span><strong>{due}</strong><small><CalendarClock /> unresolved records</small></article><article><span>Private drafts</span><strong>{vault.filter((r) => !r.versions.at(-1)?.anchorId).length}</strong><small><LockKeyhole /> encrypted locally</small></article></section>
      <section className="records-panel"><div className="panel-heading"><div><h2>Your transaction stories</h2><p>Real transactions, with the missing context restored.</p></div><label className="search"><Search size={16} /><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search records" /></label></div>
        {filtered.length ? <div className="record-list">{filtered.map((record) => { const latest = record.versions.at(-1)!; return <article key={record.transaction.hash}>
          <div className="token-icon">{record.transaction.tokenSymbol.slice(0, 1)}</div><div className="record-main"><div><strong>{latest.values.purpose}</strong><span className={latest.anchorId ? 'badge secured' : 'badge'}>{latest.anchorId ? <ShieldCheck size={12} /> : <KeyRound size={12} />}{latest.anchorId ? 'Secured personal record' : 'Private draft'}</span></div><p>{latest.values.counterparty || shortAddress(record.transaction.to ?? record.transaction.from)} · {latest.values.category}</p><div className="meta"><span>{displayDate(record.transaction.timestamp)}</span><span>Version {latest.version}</span>{latest.values.followUp && <span><CalendarClock size={12} /> Follow up {latest.values.followUp}</span>}</div></div><div className="record-amount"><strong>{record.transaction.from.toLowerCase() === address.toLowerCase() ? '−' : '+'}{Number(record.transaction.value).toLocaleString(undefined, { maximumFractionDigits: 5 })} {record.transaction.tokenSymbol}</strong><small>{latest.values.status}</small></div><div className="record-actions"><button onClick={() => setRevealing(record)}>Reveal</button><button aria-label="Edit record" onClick={() => setSelected(record.transaction)}><ChevronRight /></button></div>
        </article> })}</div> : <div className="empty"><div><Import /></div><h3>Your transactions have a story.</h3><p>Import a confirmed Monad transaction to attach its first private, verifiable record.</p><button className="secondary" onClick={() => setImportOpen(true)}>Import transaction hash</button></div>}
      </section>
    </main>
    {importOpen && <div className="modal-backdrop"><form className="import-dialog" onSubmit={doImport}><button type="button" className="close" onClick={() => setImportOpen(false)}><X /></button><div className="dialog-icon"><Import /></div><p className="eyebrow">Live Monad data</p><h2>Import a transaction</h2><p>Paste a confirmed Monad Testnet transaction involving {shortAddress(address)}. WhyTx validates it directly with the network.</p><label>Transaction hash<input autoFocus value={txHash} onChange={(event) => setTxHash(event.target.value)} placeholder="0x…" /></label>{error && <p className="error-message"><CircleAlert size={15} />{error}</p>}<button className="primary secure-button" disabled={busy}>{busy ? 'Checking Monad…' : 'Find transaction'}</button></form></div>}
    {selected && <RecordEditor transaction={selected} existing={vault.find((item) => item.transaction.hash === selected.hash)} onClose={() => setSelected(null)} onSave={saveRecord} busy={busy} />}
    {revealing && <RevealDialog record={revealing} onClose={() => setRevealing(null)} onToast={setToast} />}
    {error && !importOpen && <div className="global-error"><CircleAlert size={16} />{error}<button onClick={() => setError('')}><X size={14} /></button></div>}
    {toast && <Toast message={toast} onDone={() => setToast('')} />}
  </div>
}

export default function App() {
  const { open } = useAppKit()
  const { address: appKitAddress, isConnected } = useAppKitAccount({ namespace: 'eip155' })
  const { walletProvider } = useAppKitProvider<Provider>('eip155')
  const { disconnect: disconnectWallet } = useDisconnect()
  const address = appKitAddress as `0x${string}` | undefined
  const [unlockedAddress, setUnlockedAddress] = useState<`0x${string}` | null>(null)
  const [vaultCrypto, setVaultCrypto] = useState<CryptoKey | null>(null)
  const [vault, setVault] = useState<WhyRecord[]>([])
  const [busy, setBusy] = useState(false)
  const [error, setError] = useState('')
  const isVerify = useMemo(() => window.location.hash.startsWith('#verify/'), [])

  useEffect(() => {
    if (!address || address.toLowerCase() !== unlockedAddress?.toLowerCase()) {
      setUnlockedAddress(null); setVaultCrypto(null); setVault([])
    }
  }, [address, unlockedAddress])

  const connect = async () => {
    if (!isConnected || !address || !walletProvider) {
      await open({ view: 'Connect', namespace: 'eip155' })
      return
    }
    setBusy(true); setError('')
    try {
      const provider = walletProvider as EIP1193Provider
      const signature = await walletClient(provider).signMessage({ account: address, message: unlockMessage(address) })
      const key = await keyFromSignature(signature)
      const stored = localStorage.getItem(vaultKey(address))
      setVault(stored ? await decryptRecords(key, stored) : [])
      setVaultCrypto(key); setUnlockedAddress(address)
    } catch (cause) { setError(cause instanceof Error ? cause.message : 'Could not unlock the private ledger') }
    finally { setBusy(false) }
  }

  const disconnect = async () => {
    setUnlockedAddress(null); setVaultCrypto(null); setVault([])
    await disconnectWallet({ namespace: 'eip155' })
  }

  if (isVerify) return <VerifyPage />
  if (!address || !walletProvider || !vaultCrypto || unlockedAddress?.toLowerCase() !== address.toLowerCase()) {
    return <Landing connect={connect} busy={busy} error={error} connected={Boolean(isConnected && address)} />
  }
  return <Dashboard address={address} vault={vault} setVault={setVault} vaultCrypto={vaultCrypto} provider={walletProvider as EIP1193Provider} disconnect={disconnect} />
}
