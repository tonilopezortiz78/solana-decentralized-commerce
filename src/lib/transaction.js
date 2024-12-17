const {
  Connection,
  PublicKey,
  Transaction,
  SystemProgram,
  sendAndConfirmTransaction,
  Keypair,
} = require("@solana/web3.js");

/**
 * Sends SOL from one wallet to another on the Solana Devnet.
 *
 * @param {string} fromPrivateKey - Base64 encoded private key of the sender's wallet.
 * @param {string} toPublicKey - Public key of the recipient's wallet.
 * @param {number} amount - Amount of SOL to send, specified in lamports.
 * @returns {string} - The transaction signature confirming the transfer.
 */
const sendTransactionDevnet = async (fromPrivateKey, toPublicKey, amount) => {
  const connection = new Connection(
    "https://api.devnet.solana.com",
    "confirmed"
  );

  const fromWallet = Keypair.fromSecretKey(
    Buffer.from(fromPrivateKey, "base64")
  );
  const toWallet = new PublicKey(toPublicKey);

  const transaction = new Transaction().add(
    SystemProgram.transfer({
      fromPubkey: fromWallet.publicKey,
      toPubkey: toWallet,
      lamports: amount,
    })
  );

  const signature = await sendAndConfirmTransaction(connection, transaction, [
    fromWallet,
  ]);
  return signature;
};

/**
 * Creates a transaction object for sending SOL on the Solana Devnet.
 *
 * @param {string} fromPublicKey - Public key of the sender's wallet.
 * @param {string} toPublicKey - Public key of the recipient's wallet.
 * @param {number} amount - Amount of SOL to send, specified in lamports.
 * @returns {Transaction} - The transaction object ready to be sent.
 */
const createTransactionDevnet = (fromPrivateKey, toPublicKey, amount) => {
  const fromWallet = Keypair.fromSecretKey(
    Buffer.from(fromPrivateKey, "base64")
  );
  const toWallet = new PublicKey(toPublicKey);

  const transaction = new Transaction().add(
    SystemProgram.transfer({
      fromPubkey: fromWallet.publicKey,
      toPubkey: toWallet,
      lamports: amount,
    })
  );

  return transaction;
};

/**
 * Airdrops SOL to a specified public key on the Solana Devnet.
 *
 * @param {string} publicKey - Public key to receive the airdrop.
 * @param {number} amount - Amount of SOL to airdrop, specified in lamports.
 * @returns {string} - The transaction signature confirming the airdrop.
 */
const airdropSolDevnet = async (publicKey, amount) => {
  const connection = new Connection(
    "https://api.devnet.solana.com",
    "confirmed"
  );
  const recipientPublicKey = new PublicKey(publicKey);

  const airdropSignature = await connection.requestAirdrop(
    recipientPublicKey,
    amount
  );
  await connection.confirmTransaction(airdropSignature);

  return airdropSignature;
};

module.exports = {
  sendTransactionDevnet,
  createTransactionDevnet,
  airdropSolDevnet,
};
