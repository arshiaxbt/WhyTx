import { describe, expect, it } from 'vitest'
import { RECORD_FIELDS, type RecordField, type RecordValues } from '../types'
import { buildTree, getProof, verifyProof } from './merkle'

const values: RecordValues = {
  purpose: 'Refundable apartment deposit',
  category: 'Deposit',
  counterparty: 'Apartment owner',
  followUp: '2026-09-01',
  status: 'Waiting',
  privateDetails: 'Door code is private',
}
const salts = Object.fromEntries(RECORD_FIELDS.map((field, index) => [
  field,
  `0x${(index + 1).toString(16).padStart(64, '0')}`,
])) as Record<RecordField, `0x${string}`>

describe('selective reveal Merkle proofs', () => {
  it('verifies every field against the same root', () => {
    const tree = buildTree(values, salts)
    for (const field of RECORD_FIELDS) {
      expect(verifyProof(field, values[field], salts[field], getProof(tree, field), tree.root)).toBe(true)
    }
  })

  it('rejects a changed revealed value', () => {
    const tree = buildTree(values, salts)
    expect(verifyProof('purpose', 'This was a gift', salts.purpose, getProof(tree, 'purpose'), tree.root)).toBe(false)
  })
})
