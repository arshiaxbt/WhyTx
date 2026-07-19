import fs from 'node:fs'
import { createPublicClient, defineChain, http, keccak256 } from 'viem'

const networkName = process.env.MONAD_NETWORK || 'testnet'
const configs = {
  mainnet: { path: 'deployments/monad-mainnet.json', id: 143, name: 'Monad Mainnet', rpc: 'https://rpc.monad.xyz' },
  testnet: { path: 'deployments/monad-testnet.json', id: 10143, name: 'Monad Testnet', rpc: 'https://testnet-rpc.monad.xyz' },
}
const config = configs[networkName]
if (!config) throw new Error('MONAD_NETWORK must be "mainnet" or "testnet"')

const deployment = JSON.parse(fs.readFileSync(config.path, 'utf8'))
const artifact = JSON.parse(fs.readFileSync('artifacts/WhyTxRegistry.json', 'utf8'))
const chain = defineChain({
  id: config.id,
  name: config.name,
  nativeCurrency: { name: 'Monad', symbol: 'MON', decimals: 18 },
  rpcUrls: { default: { http: [config.rpc] } },
})
const client = createPublicClient({ chain, transport: http(config.rpc) })
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

console.log(`Deployment verified: ${deployment.address} on ${config.name}`)
console.log(`Runtime bytecode hash: ${keccak256(code)}`)
