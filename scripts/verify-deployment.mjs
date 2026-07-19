import fs from 'node:fs'
import { createPublicClient, defineChain, http, keccak256 } from 'viem'

const deployment = JSON.parse(fs.readFileSync('deployments/monad-testnet.json', 'utf8'))
const artifact = JSON.parse(fs.readFileSync('artifacts/WhyTxRegistry.json', 'utf8'))
const chain = defineChain({
  id: 10143,
  name: 'Monad Testnet',
  nativeCurrency: { name: 'MON', symbol: 'MON', decimals: 18 },
  rpcUrls: { default: { http: ['https://testnet-rpc.monad.xyz'] } },
})
const client = createPublicClient({ chain, transport: http() })
const [code, receipt] = await Promise.all([
  client.getCode({ address: deployment.address }),
  client.getTransactionReceipt({ hash: deployment.transactionHash }),
])
const compiled = `0x${artifact.evm.deployedBytecode.object}`

if (!code || code === '0x') throw new Error('No deployed bytecode found')
if (code.toLowerCase() !== compiled.toLowerCase()) throw new Error('Deployed bytecode differs from the compiled artifact')
if (receipt.status !== 'success' || receipt.contractAddress?.toLowerCase() !== deployment.address.toLowerCase()) {
  throw new Error('Deployment receipt does not match recorded metadata')
}

console.log(`Deployment verified: ${deployment.address}`)
console.log(`Runtime bytecode hash: ${keccak256(code)}`)
