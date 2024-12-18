# Solana Decentralized Commerce

**A C2B (Customer-to-Business) Payment Library for the Solana Blockchain**

This repository provides a library to facilitate secure, seamless, and decentralized customer-to-business (C2B) payments on the Solana blockchain. Designed with businesses in mind, this library ensures efficient payment handling while leveraging the high-performance capabilities of Solana.

---

## Webapp Playground

Explore our interactive webapp playground to see the library in action. The playground allows you to create wallets, make transactions, and verify payments in a simulated environment.

![Webapp Playground](docs/playground_screenshot.png)

## check docs folder to see how to use the library

---

## **Features**

### **Core Functionalities**

- **Unique Wallet Creation**:
  - Automatically generate a distinct Solana wallet for every customer.
  - Manage individual transaction histories securely.
- **Payment Acceptance**:
  - Receive payments in **USDT** or **custom SPL tokens** directly to customer-assigned wallets.
- **Transaction Verification**:
  - Monitor customer wallets for incoming payments.
  - Provide real-time updates to your system on verified transactions.
- **Fund Transfers**:
  - Move received payments securely to your business’s main wallet.
- **DEX Integration (Optional)**:
  - Swap received USDT for other tokens (e.g., TMT tokens) using decentralized exchanges.

---

### **Why Choose Solana Decentralized Commerce?**

1. **Decentralized**:
   - Built on the Solana blockchain for secure, transparent, and tamper-proof transactions.
2. **C2B-Focused**:
   - Tailored for customer-to-business payment scenarios, simplifying implementation for businesses.
3. **Efficient**:
   - Leverages Solana’s high-speed, low-cost transaction infrastructure.
4. **Extensible**:
   - Easily customizable to support additional tokens, features, and integrations.
5. **Secure**:
   - Incorporates best practices for wallet management and transaction safety.
6. **User-Friendly**:
   - Designed for straightforward integration with easy-to-use APIs.

---

## **How It Works**

### 1. **Wallet Creation**

- Each customer is assigned a unique Solana wallet, enabling:
  - Individual transaction history tracking.
  - Secure and private payment handling.
- Wallets support payments in **USDT** and **custom SPL tokens**.

### 2. **Payment Handling**

- Payments can originate from:
  - **Solana Wallets**: Direct transfers from wallets like Phantom or Solflare.
  - **Centralized Exchanges (CEXs)**: Payments sent as withdrawals from exchanges like Binance or Coinbase.

### 3. **Transaction Monitoring**

- Real-time monitoring of all assigned wallets for incoming payments.
- Automatic detection and validation of payments in USDT and custom tokens.

### 4. **Fund Transfer & Token Swap**

- Businesses can:
  - Transfer funds from customer wallets to the main business wallet.
  - (Optional) Swap USDT for other tokens via a DEX integration.

---

## **Getting Started**

### Prerequisites

- **Node.js** installed on your system.
- A Solana account setup and API access for interacting with the blockchain.

### Installation

Clone the repository and install the dependencies:

```bash
git clone git@github.com:tonilopezortiz78/solana-decentralized-commerce.git
cd solana-decentralized-commerce
npm install
```

### Example Usage

Refer to the [documentation](./docs) for examples on:

1. Creating customer wallets.
2. Monitoring payments in real-time.
3. Swapping tokens via a DEX.

---

## **License**

This project is licensed under the **MIT License**. See the [LICENSE](./LICENSE) file for details.

---

## **Disclaimer**

This library is provided **"as is"** without any warranties or guarantees of any kind, express or implied, including but not limited to warranties of merchantability, fitness for a particular purpose, or non-infringement. The authors and contributors shall not be liable for any damages arising from the use of this software, including but not limited to direct, indirect, incidental, special, or consequential damages (e.g., loss of data or profits), even if advised of the possibility of such damages.
