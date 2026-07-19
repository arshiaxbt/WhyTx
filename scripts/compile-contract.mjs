import fs from 'node:fs'
import path from 'node:path'
import solc from 'solc'

const sourcePath = path.resolve('contracts/WhyTxRegistry.sol')
const source = fs.readFileSync(sourcePath, 'utf8')
const input = {
  language: 'Solidity',
  sources: { 'WhyTxRegistry.sol': { content: source } },
  settings: {
    optimizer: { enabled: true, runs: 200 },
    outputSelection: { '*': { '*': ['abi', 'metadata', 'evm.bytecode.object', 'evm.deployedBytecode.object'] } },
  },
}
const output = JSON.parse(solc.compile(JSON.stringify(input)))
const errors = (output.errors ?? []).filter((error) => error.severity === 'error')
if (errors.length) {
  console.error(errors.map((error) => error.formattedMessage).join('\n'))
  process.exit(1)
}
const artifact = output.contracts['WhyTxRegistry.sol'].WhyTxRegistry
fs.mkdirSync('artifacts', { recursive: true })
fs.writeFileSync('artifacts/WhyTxRegistry.json', JSON.stringify(artifact, null, 2))
console.log('Compiled WhyTxRegistry')
