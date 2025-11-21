# SocialFi

This platform combines social and community-driven features, allowing users to trade, connect, share strategies, and grow together in the Web3 era.

## Getting Started

Create an .env file (be aware that this file is not tracked by git) and add the following:

```bash
ALCHEMY_API_KEY=SOME-STRING-OF-CHARS
INFURA_API_KEY=SOME-STRING-OF-CHARS
JSON_RPC_URL="https://rpc.builder0x69.io"
NETWORK="goerli"

```sh
Node version:  18 | 20

npm install

# Production
npm run dev
npm build
```
and visit http://localhost:3000

## Built with
 - [TypeScript](https://www.typescriptlang.org/)
 - [Next.js](https://nextjs.org/)
 - [Chakra UI](https://chakra-ui.com/)
 - [Ethers.js](https://docs.ethers.io/v5/)
 - [Wagmi](https://wagmi.sh/)
 - [RainbowKit](https://www.rainbowkit.com/)


### 1. Trade

In the Trade section, users can access advanced tools to manage positions:

* Current Token Price, Token Volume, and 24h High/Low.
* Trading History and Wallet Position overview.
* Exchange functionality for selecting tokens, setting leverage, and executing orders.

---

### 2. Dashboard

The Dashboard provides key insights, including:

* 24h Volume, Open Interest, Long/Short Positions.
* Liquidity Pool statistics.
* UTX and ULP governance token details.
* ULP/UTX Index Composition.

---

### 3. Earn

The Earn module enables staking UTX and ULP tokens to earn rewards (esUTX).

* Wallet overview with token balances and claimable rewards.
* Stake, unstake, and claim functions.
* Staking pool statistics (APR, total supply, reward rates).
* Vault Vesting for reward conversion and management.

---

### 4. Buy

The Buy section allows users to purchase UTX or ULP directly.

* **UTX**: Utility + governance token (earns 30% of platform fees).
* **ULP**: Liquidity provider token (earns 70% of platform fees).
* Options to buy via decentralized or centralized services.

---

### 5. Social (New)

The Social module connects trading with community interaction, introducing **SocialFi elements**:

* **Profiles & Reputation:** Wallet-linked profiles with trading history, achievements, and community badges.
* **Social Trading:** Follow top traders, copy strategies, and view public portfolios.
* **Community Governance:** Participate in voting and proposals directly in-app.
* **Leaderboards & Gamification:** Track top performers, join challenges, and earn rewards for activity.
* **On-chain Identity & Messaging:** Connect with other users via decentralized identity (DID) and wallet-based communication.

---

## Vision

This platform empowers users not just to trade, but to **engage in a social ecosystem** where finance meets community. It’s more than a DEX — it’s a hub for **decentralized trading, collaboration, and growth.**