# Installation and Testing

To get started with the Solana Decentralized Commerce library, follow these steps:

## Step 1: Install Dependencies

Navigate to the main folder of the project and run the following command to install all necessary dependencies:

```bash
npm install
```

## Step 2: Run Tests

To verify the installation and ensure everything is working correctly, run the following command:

```bash
npm test
```

---

commands are in src/commands folder:

1-create wallet
2-airdrop
3-check balance
4-send transaction  
5-check balance after transaction

example of create wallet command:

```bash
node src/commands/createWallet.js
```

on terminal you will see the prompt to enter the customerId, then you will see the result in the json file on src/data/customer_wallets.json:

example result in json file on src/data/customer_wallets.json:
{
customerId: 'customer123',
publicKey: '9PSUwqQnD9go2AMeFvBTGyCU87wNmgmaadyQ16bdCDKi',
privateKey: 'Bgo2qCB+Ki2jTliMit8UblbloMCUVRt9liHTSu+DzvN8nRXpdcxZJZoxf81RgkBtQNMK8IbU844aqHJGr3tFZQ=='
}

airdrop command:

```bash
node src/commands/airdrop.js
```

    .....
