import fs from 'node:fs'
import { createPublicClient, createWalletClient, defineChain, http } from 'viem'
import { privateKeyToAccount } from 'viem/accounts'

const monadTestnet = defineChain({
  id: 10143,
  name: 'Monad Testnet',
  nativeCurrency: { name: 'MON', symbol: 'MON', decimals: 18 },
  rpcUrls: { default: { http: ['https://testnet-rpc.monad.xyz'] } },
  blockExplorers: { default: { name: 'Monadscan', url: 'https://testnet.monadscan.com' } },
  testnet: true,
})

const privateKey = process.env.DEPLOYER_PRIVATE_KEY
if (!privateKey?.match(/^0x[0-9a-fA-F]{64}$/)) {
  throw new Error('Set DEPLOYER_PRIVATE_KEY to a funded Monad Testnet deployer key')
}

const artifact = JSON.parse(fs.readFileSync('artifacts/WhyTxRegistry.json', 'utf8'))
const account = privateKeyToAccount(privateKey)
const transport = http(monadTestnet.rpcUrls.default.http[0])
const wallet = createWalletClient({ account, chain: monadTestnet, transport })
const client = createPublicClient({ chain: monadTestnet, transport })

const balance = await client.getBalance({ address: account.address })
if (balance === 0n) throw new Error(`Deployer ${account.address} has no Testnet MON`)

console.log(`Deploying from ${account.address}...`)
const hash = await wallet.deployContract({
  abi: artifact.abi,
  bytecode: `0x${artifact.evm.bytecode.object}`,
})
const receipt = await client.waitForTransactionReceipt({ hash })
if (!receipt.contractAddress) throw new Error('Deployment receipt contained no contract address')

console.log(`Contract: ${receipt.contractAddress}`)
console.log(`Transaction: ${hash}`)
