// Import the sendTransactionDevnet function from the transaction module
const { sendTransactionDevnet } = require("../lib/transaction");

// Create a readline interface for user input
const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Asynchronous IIFE to handle the transaction process
(async () => {
  try {
    // Prompt the user for the sender's wallet private key
    const senderPrivateKey = await new Promise((resolve) => {
      readline.question(
        "==================================================\n" +
          "Please enter the sender's wallet private key: \n" +
          "==================================================\n",
        (key) => {
          resolve(key);
        }
      );
    });

    // Prompt the user for the recipient's wallet public key
    const recipientWallet = await new Promise((resolve) => {
      readline.question(
        "==================================================\n" +
          "Please enter the recipient's wallet public key: \n" +
          "==================================================\n",
        (wallet) => {
          resolve(wallet);
        }
      );
    });

    // Prompt the user for the transaction amount in lamports
    const transactionAmount = await new Promise((resolve) => {
      readline.question(
        "==================================================\n" +
          "Please enter the amount of SOL to send (in lamports, 1 sol = 1000000000 lamports): \n" +
          "==================================================\n",
        (amount) => {
          resolve(parseInt(amount, 10));
        }
      );
    });

    // Call the sendTransactionDevnet function to perform the transaction
    const transactionSignature = await sendTransactionDevnet(
      senderPrivateKey,
      recipientWallet,
      transactionAmount
    );

    // Log the success message with the transaction signature
    console.log("Transaction sent. Signature:", transactionSignature);

    // Close the readline interface
    readline.close();
  } catch (error) {
    // Log any errors that occur during the transaction process
    console.error("Error:", error.message);

    // Ensure the readline interface is closed in case of an error
    readline.close();
  }
})();
