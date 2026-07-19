import fs from 'node:fs'
import { execFileSync } from 'node:child_process'
import { createPublicClient, createWalletClient, defineChain, formatEther, http } from 'viem'
import { privateKeyToAccount } from 'viem/accounts'

const networks = {
  mainnet: {
    slug: 'monad-mainnet',
    chain: defineChain({
      id: 143,
      name: 'Monad Mainnet',
      nativeCurrency: { name: 'Monad', symbol: 'MON', decimals: 18 },
      rpcUrls: { default: { http: ['https://rpc.monad.xyz'] } },
      blockExplorers: { default: { name: 'Monadscan', url: 'https://monadscan.com' } },
    }),
  },
  testnet: {
    slug: 'monad-testnet',
    chain: defineChain({
      id: 10143,
      name: 'Monad Testnet',
      nativeCurrency: { name: 'Testnet MON', symbol: 'MON', decimals: 18 },
      rpcUrls: { default: { http: ['https://testnet-rpc.monad.xyz'] } },
      blockExplorers: { default: { name: 'Monad Testnet Explorer', url: 'https://testnet.monadexplorer.com' } },
      testnet: true,
    }),
  },
}

const networkName = process.env.MONAD_NETWORK || 'testnet'
const network = networks[networkName]
if (!network) throw new Error('MONAD_NETWORK must be "mainnet" or "testnet"')

const privateKey = process.env.DEPLOYER_PRIVATE_KEY
if (!privateKey?.match(/^0x[0-9a-fA-F]{64}$/)) {
  throw new Error(`Set DEPLOYER_PRIVATE_KEY to the funded ${network.chain.name} deployer key`)
}

const artifact = JSON.parse(fs.readFileSync('artifacts/WhyTxRegistry.json', 'utf8'))
const account = privateKeyToAccount(privateKey)
const transport = http(network.chain.rpcUrls.default.http[0])
const wallet = createWalletClient({ account, chain: network.chain, transport })
const client = createPublicClient({ chain: network.chain, transport })

const balance = await client.getBalance({ address: account.address })
if (balance === 0n) throw new Error(`Deployer ${account.address} has no MON on ${network.chain.name}`)

console.log(`Deploying WhyTxRegistry from ${account.address} on ${network.chain.name} (${formatEther(balance)} MON)...`)
const hash = await wallet.deployContract({
  abi: artifact.abi,
  bytecode: `0x${artifact.evm.bytecode.object}`,
})
const receipt = await client.waitForTransactionReceipt({ hash })
if (!receipt.contractAddress) throw new Error('Deployment receipt contained no contract address')

const deployment = {
  network: network.chain.name,
  chainId: network.chain.id,
  contract: 'WhyTxRegistry',
  address: receipt.contractAddress,
  deployer: account.address,
  transactionHash: hash,
  blockNumber: Number(receipt.blockNumber),
  gasUsed: Number(receipt.gasUsed),
  solcVersion: JSON.parse(artifact.metadata).compiler.version,
  sourceCommit: execFileSync('git', ['rev-parse', 'HEAD'], { encoding: 'utf8' }).trim(),
  explorer: `${network.chain.blockExplorers.default.url}/address/${receipt.contractAddress}`,
}

const deploymentPath = `deployments/${network.slug}.json`
fs.writeFileSync(deploymentPath, `${JSON.stringify(deployment, null, 2)}\n`)
console.log(`Contract: ${receipt.contractAddress}`)
console.log(`Transaction: ${hash}`)
console.log(`Metadata: ${deploymentPath}`)
