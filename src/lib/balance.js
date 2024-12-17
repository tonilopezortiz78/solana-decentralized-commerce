const { Connection, PublicKey } = require("@solana/web3.js");

/**
 * Check the balance of a given wallet on the Solana Devnet
 * @param {string} publicKey - The public key of the wallet to check the balance for
 * @returns {number} - The balance of the wallet in lamports
 */
const checkBalanceDevnet = async (publicKey) => {
  const connection = new Connection(
    "https://api.devnet.solana.com",
    "confirmed"
  );
  const walletPublicKey = new PublicKey(publicKey);

  const balance = await connection.getBalance(walletPublicKey);
  return balance;
};

module.exports = { checkBalanceDevnet };
