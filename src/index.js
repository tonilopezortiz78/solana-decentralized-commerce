const fs = require("fs");

// Import the createWalletForCustomer function from wallet.js
const { createWalletForCustomer } = require("./wallet");

// Immediately Invoked Function Expression (IIFE) to handle asynchronous code
(async () => {
  try {
    // Ask in the terminal for customer name
    const readline = require("readline").createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    const customerId = await new Promise((resolve) => {
      console.log("\n==========================");
      console.log("  CREATE NEW WALLET  ");
      console.log("==========================\n");
      readline.question("Please enter the customer name: ", (name) => {
        readline.close();
        resolve(name);
      });
      console.log("\n");
      console.log("\n==========================");
    });

    // Call the createWalletForCustomer function with the customerId
    // This function returns a promise, so we use await to wait for the result
    const wallet = await createWalletForCustomer(customerId);

    // Log the created wallet details to the console
    console.log("Wallet Created:");
    console.log(wallet);
    appendToFile("customer_wallets.json", wallet);
  } catch (error) {
    // Catch and log any errors that occur during wallet creation
    console.error("Error:", error.message);
  }
})();

function appendToFile(filename, data) {
  const path = require("path");
  const filePath = path.join(__dirname, filename);
  fs.appendFileSync(filePath, JSON.stringify(data) + "\n");
  console.log("Wallet saved to file at path:", filePath);
}
