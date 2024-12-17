const { Keypair } = require("@solana/web3.js");

/**
 * Creates a new Solana wallet for a given customer.
 *
 * This function generates a new wallet using Solana's Keypair class and returns
 * the wallet details including the customer ID, public key, and private key.
 *
 * @param {string} customerId - The unique identifier for the customer.
 * @returns {object} - An object containing the wallet details: customerId, publicKey, and privateKey.
 * @throws {Error} - Throws an error if the customerId is not provided.
 */
const createWalletForCustomer = (customerId) => {
  if (!customerId) {
    throw new Error("Customer ID is required.");
  }

  const wallet = Keypair.generate();
  return {
    customerId,
    publicKey: wallet.publicKey.toString(),
    privateKey: Buffer.from(wallet.secretKey).toString("base64"),
  };
};

// Export the createWalletForCustomer function for use in other modules.
module.exports = { createWalletForCustomer };
