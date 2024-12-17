const readline = require("readline");

const { checkTransactionSignatureStatus } = require("../lib/signatureStatus");

(async () => {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  try {
    // Prompt the user for the transaction signature
    const transactionSignature = await new Promise((resolve, reject) => {
      rl.question(
        "==================================================\n" +
          "Please enter the transaction signature to check: \n" +
          "==================================================\n",
        (signature) => {
          if (signature) {
            resolve(signature);
          } else {
            reject(new Error("No transaction signature provided"));
          }
        }
      );
    });

    // Call the checkTransactionSignatureStatus function to get the status
    const status = await checkTransactionSignatureStatus(transactionSignature);

    // Log the status of the transaction
    console.log("Transaction status:", status);
  } catch (error) {
    // Log any errors that occur during the process
    console.error("Error:", error.message);
  } finally {
    // Ensure the readline interface is closed
    rl.close();
  }
})();
