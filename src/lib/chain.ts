import {
  createPublicClient,
  createWalletClient,
  custom,
  decodeEventLog,
  defineChain,
  erc20Abi,
  formatEther,
  formatUnits,
  http,
  type EIP1193Provider,
} from 'viem'
import type { ImportedTransaction } from '../types'

export const monadMainnet = defineChain({
  id: 143,
  name: 'Monad Mainnet',
  nativeCurrency: { name: 'Monad', symbol: 'MON', decimals: 18 },
  rpcUrls: { default: { http: ['https://rpc.monad.xyz', 'https://rpc1.monad.xyz'] } },
  blockExplorers: { default: { name: 'Monadscan', url: 'https://monadscan.com' } },
})

export const monadTestnet = defineChain({
  id: 10143,
  name: 'Monad Testnet',
  nativeCurrency: { name: 'Testnet MON', symbol: 'MON', decimals: 18 },
  rpcUrls: { default: { http: ['https://testnet-rpc.monad.xyz'] } },
  blockExplorers: { default: { name: 'Monad Testnet Explorer', url: 'https://testnet.monadexplorer.com' } },
  testnet: true,
})

export type MonadChainId = typeof monadMainnet.id | typeof monadTestnet.id
export const DEFAULT_CHAIN_ID: MonadChainId = monadMainnet.id
export const MONAD_CHAINS = [monadMainnet, monadTestnet] as const

export const isMonadChainId = (chainId: number): chainId is MonadChainId =>
  chainId === monadMainnet.id || chainId === monadTestnet.id

export const normalizeChainId = (chainId: number | string | undefined): MonadChainId => {
  const numeric = Number(chainId)
  return isMonadChainId(numeric) ? numeric : DEFAULT_CHAIN_ID
}

export const chainFor = (chainId: number | undefined) =>
  chainId === monadTestnet.id ? monadTestnet : monadMainnet

export const chainName = (chainId: number | undefined) => chainFor(chainId).name

export function publicClientFor(chainId: number | undefined) {
  const chain = chainFor(chainId)
  return createPublicClient({ chain, transport: http(chain.rpcUrls.default.http[0]) })
}

export function walletClient(provider: EIP1193Provider, chainId: number | undefined = DEFAULT_CHAIN_ID) {
  return createWalletClient({ chain: chainFor(chainId), transport: custom(provider) })
}

export async function importTransaction(hash: `0x${string}`, chainId: MonadChainId): Promise<ImportedTransaction> {
  const publicClient = publicClientFor(chainId)
  const [tx, receipt] = await Promise.all([
    publicClient.getTransaction({ hash }),
    publicClient.getTransactionReceipt({ hash }),
  ])
  const block = await publicClient.getBlock({ blockNumber: tx.blockNumber! })
  let value = formatEther(tx.value)
  let tokenSymbol = 'MON'
  let tokenAddress: `0x${string}` | undefined

  if (tx.value === 0n) {
    for (const log of receipt.logs) {
      try {
        const decoded = decodeEventLog({ abi: erc20Abi, eventName: 'Transfer', data: log.data, topics: log.topics })
        const [symbol, decimals] = await Promise.all([
          publicClient.readContract({ address: log.address, abi: erc20Abi, functionName: 'symbol' }),
          publicClient.readContract({ address: log.address, abi: erc20Abi, functionName: 'decimals' }),
        ])
        value = formatUnits(decoded.args.value, decimals)
        tokenSymbol = symbol
        tokenAddress = log.address
        break
      } catch { /* This log is not an ERC-20 transfer. */ }
    }
  }
  return {
    hash,
    chainId,
    from: tx.from,
    to: tx.to,
    value,
    tokenSymbol,
    tokenAddress,
    timestamp: Number(block.timestamp) * 1000,
    blockNumber: tx.blockNumber!.toString(),
    success: receipt.status === 'success',
  }
}

export async function ensureMonadNetwork(provider: EIP1193Provider, chainId: MonadChainId) {
  const chain = chainFor(chainId)
  try {
    await provider.request({ method: 'wallet_switchEthereumChain', params: [{ chainId: `0x${chain.id.toString(16)}` }] })
  } catch (cause) {
    const code = (cause as { code?: number }).code
    if (code !== 4902) throw cause
    await provider.request({
      method: 'wallet_addEthereumChain',
      params: [{
        chainId: `0x${chain.id.toString(16)}`,
        chainName: chain.name,
        nativeCurrency: chain.nativeCurrency,
        rpcUrls: [...chain.rpcUrls.default.http],
        blockExplorerUrls: [chain.blockExplorers.default.url],
      }],
    })
  }
}

export const shortAddress = (value: string) => `${value.slice(0, 6)}…${value.slice(-4)}`
export const explorerTx = (hash: string, chainId?: number) => `${chainFor(chainId).blockExplorers.default.url}/tx/${hash}`
