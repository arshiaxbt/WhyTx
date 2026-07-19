export const WHYTX_ADDRESS = import.meta.env.VITE_WHYTX_CONTRACT as `0x${string}` | undefined

export const WHYTX_ABI = [
  {
    type: 'function',
    name: 'secureRecord',
    stateMutability: 'nonpayable',
    inputs: [
      { name: 'transactionHash', type: 'bytes32' },
      { name: 'root', type: 'bytes32' },
      { name: 'previousId', type: 'bytes32' },
    ],
    outputs: [{ name: 'id', type: 'bytes32' }],
  },
  {
    type: 'function',
    name: 'records',
    stateMutability: 'view',
    inputs: [{ name: '', type: 'bytes32' }],
    outputs: [
      { name: 'creator', type: 'address' },
      { name: 'transactionHash', type: 'bytes32' },
      { name: 'root', type: 'bytes32' },
      { name: 'previousId', type: 'bytes32' },
      { name: 'createdAt', type: 'uint64' },
    ],
  },
  {
    type: 'event',
    name: 'RecordSecured',
    inputs: [
      { name: 'id', type: 'bytes32', indexed: true },
      { name: 'creator', type: 'address', indexed: true },
      { name: 'transactionHash', type: 'bytes32', indexed: true },
      { name: 'root', type: 'bytes32', indexed: false },
      { name: 'previousId', type: 'bytes32', indexed: false },
      { name: 'createdAt', type: 'uint64', indexed: false },
    ],
  },
] as const
