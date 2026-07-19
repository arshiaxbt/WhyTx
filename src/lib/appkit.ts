import { createAppKit } from '@reown/appkit/react'
import { monad as appKitMonad, monadTestnet as appKitMonadTestnet } from '@reown/appkit/networks'
import { EthersAdapter } from '@reown/appkit-adapter-ethers'

export const REOWN_PROJECT_ID = import.meta.env.VITE_REOWN_PROJECT_ID || '3a27995d34addeb0cbfcac40751a6eef'

const appUrl = window.location.origin
const iconUrl = new URL(`${import.meta.env.BASE_URL}favicon.svg`, window.location.href).href

export const appKit = createAppKit({
  adapters: [new EthersAdapter()],
  networks: [appKitMonad, appKitMonadTestnet],
  defaultNetwork: appKitMonad,
  allowUnsupportedChain: false,
  projectId: REOWN_PROJECT_ID,
  metadata: {
    name: 'WhyTx',
    description: 'Private, verifiable context for crypto transactions on Monad.',
    url: appUrl,
    icons: [iconUrl],
  },
  features: {
    analytics: false,
    email: false,
    socials: [],
  },
})

export { appKitMonad, appKitMonadTestnet }
