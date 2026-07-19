# Spark submission kit

Deadline: July 19, 2026 at 23:59 UTC. The final submission must be made while signed in at [BuildAnything](https://buildanything.so/hackathons/spark).

## Submission fields

### Name

WhyTx

### Description

Private, verifiable context for every crypto transaction.

### Problem

Wallets preserve what happened—the amount, address, and time—but lose the human reason. Months later, a transfer can be impossible to understand: was it a loan, deposit, purchase, or payment that still needs follow-up? Screenshots, chats, and spreadsheets scatter that context and cannot prove when a note was created or whether it was later changed.

### Solution

WhyTx lets a wallet owner import a real Monad transaction, attach encrypted context and a follow-up, and secure only a salted Merkle root onchain. The readable record stays private in the browser. Later, the owner can reveal selected fields through a verification link; anyone can verify those fields against the original timestamped root without learning the hidden details. Edits create linked versions instead of silently replacing history.

### Project URL

https://arshiaxbt.github.io/WhyTx/

### GitHub repository

https://github.com/arshiaxbt/WhyTx

### Category

Monad Testnet

### Contract address

`0x3ccacaa6fa6ca64e1f8f8f8f448f0a5a97581129`

### Demo video

https://arshiaxbt.github.io/WhyTx/demo.html

This 29-second public fallback demo uses a real Monad transaction and real contract writes. A narrated recording can replace it before submission if desired.

### Social post

Pending publication. Required only for the Most Viral Solution prize.

## Demo video script (target: 2:30)

### 0:00–0:20 — Problem

“Every crypto wallet remembers what happened, but not why. Six months after sending 500 USDC, the address and amount are still there—but the agreement, deadline, and receipt are gone. WhyTx gives a transaction its human memory.”

### 0:20–0:40 — Connect and import real data

Open the live site, connect the demo wallet, and sign the gas-free unlock message. Import a confirmed Monad Testnet transaction hash. Point out that the transaction is fetched directly from Monad and must involve the connected wallet.

### 0:40–1:15 — Attach and secure

Add “Refundable apartment deposit,” category “Deposit,” recipient “Apartment owner,” status “Waiting,” and a follow-up date. Explain: “The readable record and random salts are encrypted in this browser. Only a Merkle root—a salted fingerprint—goes to Monad.” Click “Secure this record” and approve the transaction. Open its Monadscan link.

### 1:15–1:45 — Return and follow up

Refresh the app, reconnect, and show that the encrypted record is restored. Point out the follow-up count and the trust label “Secured personal record.” Make clear that it records the user's claim; it does not make the claim objectively true.

### 1:45–2:10 — Selective reveal and verify

Click Reveal. Select Purpose, Category, and Status, leaving Private details unchecked. Copy the verification link and open it in a private window. Show that each visible field verifies and the onchain anchor is confirmed while hidden fields remain absent.

### 2:10–2:30 — Version history and close

Edit the follow-up date and save version 2. Show “Version 2” and explain that it links to version 1 rather than overwriting it. Close with: “Your wallet remembers what. WhyTx remembers why.”

## Recording checklist

- Use a fresh browser profile with the demo wallet already added.
- Have Testnet MON and one confirmed transfer ready before recording.
- Set browser zoom to 90–100% and record at 1080p.
- Hide bookmarks, unrelated tabs, wallet balances, and personal notifications.
- Show one real contract approval and one real explorer page.
- Keep the final cut below 2:50 to stay safely under the 3-minute limit.
- Upload publicly and test the URL while logged out.

## Suggested social post

Every crypto wallet remembers **what** happened.

But six months later, do you remember **why** you sent that payment—or whether it was supposed to come back?

I built **WhyTx** for the @BuildAnything hackathon on Monad: private, encrypted context for real transactions, with onchain timestamps, version history, and selective verification when needed.

Your notes stay private. Only the proof goes onchain.

🔗 https://arshiaxbt.github.io/WhyTx/
💻 https://github.com/arshiaxbt/WhyTx

#Monad #BuildAnything #Web3

## Final pre-submit checklist

- [ ] Register for Spark while signed in.
- [ ] Confirm participant is 18+ and not in an excluded jurisdiction.
- [ ] Confirm this is the participant's only submission and a solo project.
- [x] Deploy and test `WhyTxRegistry` on Monad Testnet.
- [x] Add the contract address to the app and this document.
- [ ] Re-deploy the web app and test it in a logged-out browser.
- [ ] Create a real demo transfer and secured WhyTx record.
- [x] Record, upload, and test the public video URL.
- [ ] Publish the social post if entering the viral prize.
- [ ] Paste all fields into the submission form before 23:59 UTC.
- [ ] Save screenshots or a confirmation URL after submission.
