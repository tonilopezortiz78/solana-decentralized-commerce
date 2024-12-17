// Import the checkBalance function from the balance library
const { checkBalance } = require("../lib/balance");
// Import the readline module for reading input from the command line
const readline = require("readline");

// Asynchronous function to check the balance of a wallet
async function checkWalletBalance() {
  // Create an interface for reading input from the command line
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  try {
    // Display a header for the balance check process
    console.log("\n==========================");
    console.log("  CHECK WALLET BALANCE  ");
    console.log("==========================\n");

    // Prompt the user to enter a public key and wait for input
    const publicKey = await new Promise((resolve) => {
      rl.question("Please enter the public key: ", (key) => {
        resolve(key);
      });
    });

    // Call the checkBalance function with the provided public key
    const balance = await checkBalance(publicKey);

    // Display the wallet balance in lamports and SOL
    console.log("\nWallet Balance:");
    console.log(`${balance} lamports`);
    console.log(`${(balance / 1e9).toFixed(9)} SOL`);
    console.log("\n==========================");
  } catch (error) {
    // Log any errors that occur during the balance check
    console.error("Error:", error.message);
  } finally {
    // Close the readline interface
    rl.close();
  }
}

// Execute the checkWalletBalance function if this file is run directly
if (require.main === module) {
  checkWalletBalance();
}

// Export the checkWalletBalance function for use in other modules
module.exports = { checkWalletBalance };
