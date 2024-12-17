const { Connection, clusterApiUrl } = require("@solana/web3.js");

/**
 * Check the status of a transaction signature
 * @param {string} signature - The transaction signature to check
 * @returns {Promise<string>} - The status of the transaction ("confirmed", "finalized", "failed", etc.)
 */
async function checkTransactionSignatureStatus(signature) {
  const connection = new Connection(clusterApiUrl("devnet"));

  try {
    const status = await connection.getSignatureStatuses([signature]);
    console.log("status raw:", status);
    console.log("status value:", status.value);
    if (
      status &&
      status.value &&
      status.value.length > 0 &&
      status.value[0] !== null
    ) {
      const confirmationStatus = status.value[0].confirmationStatus;
      const slot = status.value[0].slot;
      const confirmations = status.value[0].confirmations;
      const err = status.value[0].err;

      return {
        confirmationStatus,
        slot,
        confirmations,
        err,
      };
    } else {
      throw new Error("Unable to fetch transaction status");
    }
  } catch (error) {
    console.error(
      "Error checking transaction signature status:",
      error.message
    );
    throw error;
  }
}

module.exports = {
  checkTransactionSignatureStatus,
};
