import { describe, expect, it } from 'vitest'
import type { RevealPayload, WhyRecord } from '../types'
import { decodeReveal, encodeReveal } from './reveal'
import { decryptRecords, encryptRecords, keyFromSignature } from './vault'

const records: WhyRecord[] = [{
  transaction: {
    hash: `0x${'11'.repeat(32)}`,
    from: `0x${'22'.repeat(20)}`,
    to: `0x${'33'.repeat(20)}`,
    value: '500',
    tokenSymbol: 'USDC',
    timestamp: 1_768_435_200_000,
    blockNumber: '42',
    success: true,
  },
  versions: [],
}]

describe('encrypted local vault', () => {
  it('round-trips records without storing plaintext', async () => {
    const key = await keyFromSignature('0xwallet-signature')
    const encrypted = await encryptRecords(key, records)
    expect(encrypted).not.toContain('USDC')
    await expect(decryptRecords(key, encrypted)).resolves.toEqual(records)
  })

  it('cannot be opened with another wallet key', async () => {
    const first = await keyFromSignature('0xfirst-wallet')
    const second = await keyFromSignature('0xsecond-wallet')
    const encrypted = await encryptRecords(first, records)
    await expect(decryptRecords(second, encrypted)).rejects.toThrow()
  })
})

describe('verification links', () => {
  it('encodes disclosure data as URL-safe text', () => {
    const payload: RevealPayload = {
      schema: 'whytx.reveal.v1',
      chainId: 10143,
      creator: records[0].transaction.from,
      transactionHash: records[0].transaction.hash,
      root: `0x${'44'.repeat(32)}`,
      version: 1,
      createdAt: records[0].transaction.timestamp,
      fields: [],
    }
    const encoded = encodeReveal(payload)
    expect(encoded).not.toMatch(/[+/=]/)
    expect(decodeReveal(encoded)).toEqual(payload)
  })
})
