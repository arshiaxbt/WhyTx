export const RECORD_FIELDS = [
  'purpose',
  'category',
  'counterparty',
  'followUp',
  'status',
  'privateDetails',
] as const

export type RecordField = (typeof RECORD_FIELDS)[number]

export type RecordValues = Record<RecordField, string>

export interface ImportedTransaction {
  hash: `0x${string}`
  from: `0x${string}`
  to: `0x${string}` | null
  value: string
  tokenSymbol: string
  tokenAddress?: `0x${string}`
  timestamp: number
  blockNumber: string
  success: boolean
}

export interface ProofStep {
  hash: `0x${string}`
  left: boolean
}

export interface RecordVersion {
  id: string
  creator: `0x${string}`
  version: number
  createdAt: number
  values: RecordValues
  salts: Record<RecordField, `0x${string}`>
  root: `0x${string}`
  anchorId?: string
  anchorTx?: `0x${string}`
  previousAnchorId?: string
}

export interface WhyRecord {
  transaction: ImportedTransaction
  versions: RecordVersion[]
}

export interface RevealField {
  field: RecordField
  value: string
  salt: `0x${string}`
  proof: ProofStep[]
}

export interface RevealPayload {
  schema: 'whytx.reveal.v1'
  chainId: number
  contract?: `0x${string}`
  creator: `0x${string}`
  transactionHash: `0x${string}`
  root: `0x${string}`
  version: number
  createdAt: number
  anchorId?: string
  fields: RevealField[]
}
