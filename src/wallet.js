const { Keypair } = require("@solana/web3.js");

/**
 * Create a Solana wallet for a customer
 * @param {string} customerId - The ID of the customer
 * @returns {object} - Wallet details (customerId, publicKey, privateKey)
 */
const createWalletForCustomer = (customerId) => {
  if (!customerId) {
    // Throw an error if the customerId is not provided
    throw new Error("Customer ID is required.");
  }

  // Generate a new wallet using Solana's Keypair class
  const wallet = Keypair.generate();
  return {
    customerId, // Return the provided customerId
    publicKey: wallet.publicKey.toString(), // Convert the public key to a string
    privateKey: Buffer.from(wallet.secretKey).toString("base64"), // Convert the secret key to a base64 string
  };
};

// Export the createWalletForCustomer function for use in other files
module.exports = { createWalletForCustomer };
