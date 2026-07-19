# WhyTx

> Your wallet remembers what. WhyTx remembers why.

WhyTx is a private memory and proof layer for crypto transactions. It lets a wallet owner attach encrypted context to a confirmed Monad transaction, preserve version history, selectively reveal fields, and prove that the revealed context matches a timestamped onchain commitment.

Built from scratch for the [Spark hackathon](https://buildanything.so/hackathons/spark), July 13–19, 2026.

[Open the live app](https://arshiaxbt.github.io/WhyTx/) · [Watch the onchain demo](https://arshiaxbt.github.io/WhyTx/demo.html)

## The working loop

1. Connect a browser or mobile EVM wallet through Reown AppKit and sign a gas-free unlock message.
2. Import a real confirmed Monad Testnet transaction hash involving that wallet.
3. Add a purpose, category, counterparty label, status, follow-up date, and private details.
4. Encrypt the readable record locally with AES-GCM.
5. Secure a salted Merkle root on Monad Testnet; no readable note goes onchain.
6. Create a verification link containing only selected fields and their Merkle proofs.
7. Independently verify both the field proofs and the onchain anchor.
8. Edit the record as a new linked version; earlier anchors remain intact.

## What it proves—and what it does not

WhyTx proves that a wallet created a particular cryptographic record at an onchain time, that the record was linked to a transaction, and that revealed values match that record. It does **not** prove a personal statement is true, agreed by the counterparty, or legally enforceable.

## Privacy model

- A deterministic wallet signature derives a browser-local AES-256-GCM key.
- Full records and per-field random salts are stored only as ciphertext in `localStorage`.
- Each record field becomes a salted Merkle leaf. The contract receives only the root, original transaction hash, and previous-version ID.
- Reveal data is encoded in the URL fragment (`#...`), which browsers do not send to the hosting server.
- A verifier can check disclosed leaves without learning hidden values.

This hackathon implementation is local-first: clearing browser storage removes the encrypted records. A production release should add encrypted backup and a reviewed recovery design.

## Stack

- React 19, TypeScript, Vite
- Reown AppKit with its Ethers v6 adapter for non-custodial wallet connections
- viem for Monad RPC and contract interaction
- Web Crypto API for AES-GCM
- Solidity `WhyTxRegistry` contract
- Vitest for cryptographic proof tests

## Run locally

Requirements: Node.js 22+ and a Reown-compatible EVM wallet.

```bash
npm install
cp .env.example .env
npm run dev
```

Run every check:

```bash
npm run check
```

That command runs linting, unit tests, Solidity compilation, TypeScript, and the production build.

## Contract

The contract is intentionally small and append-only. Compile it with:

```bash
npm run contract:compile
```

The build artifact is written to `artifacts/WhyTxRegistry.json`.

- Contract: [`0x3ccacaa6fa6ca64e1f8f8f8f448f0a5a97581129`](https://testnet.monadscan.com/address/0x3ccacaa6fa6ca64e1f8f8f8f448f0a5a97581129)
- Deployment transaction: [`0x0e1994fdce64e130d3e00de263b675c4cdf711d25c0e8a82f1b72650b51e3bf9`](https://testnet.monadscan.com/tx/0x0e1994fdce64e130d3e00de263b675c4cdf711d25c0e8a82f1b72650b51e3bf9)
- Integration test: [`0xbe274c628f38925228e4437c31d5b8697f00aad4201966c4ac94f00ae0b271ed`](https://testnet.monadscan.com/tx/0xbe274c628f38925228e4437c31d5b8697f00aad4201966c4ac94f00ae0b271ed) (event and persisted fields verified)
- Source verification: [`perfect` match on MonadVision](https://testnet.monadvision.com/address/0x3ccacaa6fa6ca64e1f8f8f8f448f0a5a97581129)
- Deployment metadata: [`deployments/monad-testnet.json`](deployments/monad-testnet.json)

## Network

- Monad Testnet
- Chain ID: `10143`
- RPC: `https://testnet-rpc.monad.xyz`
- Explorer: `https://testnet.monadscan.com`

## Project structure

```text
contracts/             onchain commitment registry
scripts/               reproducible Solidity compiler
src/lib/chain.ts       live Monad reads and wallet client
src/lib/appkit.ts      Reown wallet connection and Monad network setup
src/lib/merkle.ts      field commitments and selective proofs
src/lib/vault.ts       browser encryption
src/lib/reveal.ts      privacy-preserving verification links
src/App.tsx            product UI and complete user flow
```

## License

MIT
