import type { RevealPayload } from '../types'

export function encodeReveal(payload: RevealPayload) {
  const bytes = new TextEncoder().encode(JSON.stringify(payload))
  let binary = ''
  bytes.forEach((byte) => { binary += String.fromCharCode(byte) })
  return btoa(binary).replaceAll('+', '-').replaceAll('/', '_').replaceAll('=', '')
}

export function decodeReveal(encoded: string): RevealPayload {
  const base64 = encoded.replaceAll('-', '+').replaceAll('_', '/')
  const padded = base64 + '='.repeat((4 - (base64.length % 4)) % 4)
  const binary = atob(padded)
  const bytes = Uint8Array.from(binary, (char) => char.charCodeAt(0))
  const parsed = JSON.parse(new TextDecoder().decode(bytes)) as RevealPayload
  if (parsed.schema !== 'whytx.reveal.v1') throw new Error('Unsupported reveal format')
  return parsed
}
