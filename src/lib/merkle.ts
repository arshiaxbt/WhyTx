import { concat, keccak256, stringToHex, toHex } from 'viem'
import { RECORD_FIELDS, type ProofStep, type RecordField, type RecordValues } from '../types'

export const randomSalt = (): `0x${string}` => {
  const bytes = crypto.getRandomValues(new Uint8Array(32))
  return toHex(bytes)
}

export const leafHash = (field: RecordField, value: string, salt: `0x${string}`) =>
  keccak256(concat([stringToHex(field), '0x00', stringToHex(value), '0x00', salt]))

const parentHash = (left: `0x${string}`, right: `0x${string}`) =>
  keccak256(concat([left, right]))

export interface MerkleBundle {
  root: `0x${string}`
  leaves: `0x${string}`[]
  layers: `0x${string}`[][]
}

export function buildTree(
  values: RecordValues,
  salts: Record<RecordField, `0x${string}`>,
): MerkleBundle {
  const leaves = RECORD_FIELDS.map((field) => leafHash(field, values[field], salts[field]))
  const layers: `0x${string}`[][] = [leaves]

  while (layers.at(-1)!.length > 1) {
    const current = layers.at(-1)!
    const next: `0x${string}`[] = []
    for (let i = 0; i < current.length; i += 2) {
      next.push(parentHash(current[i], current[i + 1] ?? current[i]))
    }
    layers.push(next)
  }

  return { root: layers.at(-1)![0], leaves, layers }
}

export function getProof(bundle: MerkleBundle, field: RecordField): ProofStep[] {
  let index = RECORD_FIELDS.indexOf(field)
  const proof: ProofStep[] = []
  for (let level = 0; level < bundle.layers.length - 1; level += 1) {
    const layer = bundle.layers[level]
    const siblingIndex = index % 2 === 0 ? index + 1 : index - 1
    proof.push({
      hash: layer[siblingIndex] ?? layer[index],
      left: siblingIndex < index,
    })
    index = Math.floor(index / 2)
  }
  return proof
}

export function verifyProof(
  field: RecordField,
  value: string,
  salt: `0x${string}`,
  proof: ProofStep[],
  expectedRoot: `0x${string}`,
) {
  let hash = leafHash(field, value, salt)
  for (const step of proof) {
    hash = step.left ? parentHash(step.hash, hash) : parentHash(hash, step.hash)
  }
  return hash.toLowerCase() === expectedRoot.toLowerCase()
}
