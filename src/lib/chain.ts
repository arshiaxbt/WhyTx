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

export const monadTestnet = defineChain({
  id: 10143,
  name: 'Monad Testnet',
  nativeCurrency: { name: 'MON', symbol: 'MON', decimals: 18 },
  rpcUrls: { default: { http: ['https://testnet-rpc.monad.xyz'] } },
  blockExplorers: { default: { name: 'Monadscan', url: 'https://testnet.monadscan.com' } },
  testnet: true,
})

export const publicClient = createPublicClient({ chain: monadTestnet, transport: http() })

export function walletClient(provider: EIP1193Provider) {
  return createWalletClient({ chain: monadTestnet, transport: custom(provider) })
}

export async function importTransaction(hash: `0x${string}`): Promise<ImportedTransaction> {
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

export async function ensureMonadNetwork(provider: EIP1193Provider) {
  try {
    await provider.request({ method: 'wallet_switchEthereumChain', params: [{ chainId: `0x${monadTestnet.id.toString(16)}` }] })
  } catch (cause) {
    const code = (cause as { code?: number }).code
    if (code !== 4902) throw cause
    await provider.request({
      method: 'wallet_addEthereumChain',
      params: [{
        chainId: `0x${monadTestnet.id.toString(16)}`,
        chainName: monadTestnet.name,
        nativeCurrency: monadTestnet.nativeCurrency,
        rpcUrls: monadTestnet.rpcUrls.default.http,
        blockExplorerUrls: [monadTestnet.blockExplorers.default.url],
      }],
    })
  }
}

export const shortAddress = (value: string) => `${value.slice(0, 6)}…${value.slice(-4)}`
export const explorerTx = (hash: string) => `${monadTestnet.blockExplorers.default.url}/tx/${hash}`
