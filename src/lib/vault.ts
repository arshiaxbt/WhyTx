import type { WhyRecord } from '../types'

const encoder = new TextEncoder()
const decoder = new TextDecoder()

export const unlockMessage = (address: string) =>
  `Unlock WhyTx private records\n\nWallet: ${address.toLowerCase()}\n\nThis signature only decrypts data in this browser. It does not create a transaction or cost gas.`

const encodeKey = (bytes: ArrayBuffer) => btoa(String.fromCharCode(...new Uint8Array(bytes)))

export async function importSessionKey(encoded: string) {
  const bytes = Uint8Array.from(atob(encoded), (char) => char.charCodeAt(0))
  if (bytes.length !== 32) throw new Error('Invalid cached vault key')
  return crypto.subtle.importKey('raw', bytes, 'AES-GCM', false, ['encrypt', 'decrypt'])
}

export async function keyAndSessionFromSignature(signature: string) {
  const digest = await crypto.subtle.digest('SHA-256', encoder.encode(signature))
  const encoded = encodeKey(digest)
  return { key: await importSessionKey(encoded), encoded }
}

export async function keyFromSignature(signature: string) {
  return (await keyAndSessionFromSignature(signature)).key
}

export async function encryptRecords(key: CryptoKey, records: WhyRecord[]) {
  const iv = crypto.getRandomValues(new Uint8Array(12))
  const ciphertext = await crypto.subtle.encrypt(
    { name: 'AES-GCM', iv },
    key,
    encoder.encode(JSON.stringify(records)),
  )
  return JSON.stringify({
    iv: btoa(String.fromCharCode(...iv)),
    data: btoa(String.fromCharCode(...new Uint8Array(ciphertext))),
  })
}

export async function decryptRecords(key: CryptoKey, stored: string): Promise<WhyRecord[]> {
  const parsed = JSON.parse(stored) as { iv: string; data: string }
  const iv = Uint8Array.from(atob(parsed.iv), (char) => char.charCodeAt(0))
  const data = Uint8Array.from(atob(parsed.data), (char) => char.charCodeAt(0))
  const plaintext = await crypto.subtle.decrypt({ name: 'AES-GCM', iv }, key, data)
  return JSON.parse(decoder.decode(plaintext)) as WhyRecord[]
}

export const vaultKey = (address: string) => `whytx:vault:${address.toLowerCase()}`
export const sessionVaultKey = (address: string) => `whytx:session-key:${address.toLowerCase()}`
