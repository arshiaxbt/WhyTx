import {
  createPublicClient,
  createWalletClient,
  custom,
  defineChain,
  formatEther,
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
  return {
    hash,
    from: tx.from,
    to: tx.to,
    value: formatEther(tx.value),
    timestamp: Number(block.timestamp) * 1000,
    blockNumber: tx.blockNumber!.toString(),
    success: receipt.status === 'success',
  }
}

export const shortAddress = (value: string) => `${value.slice(0, 6)}…${value.slice(-4)}`
export const explorerTx = (hash: string) => `${monadTestnet.blockExplorers.default.url}/tx/${hash}`
