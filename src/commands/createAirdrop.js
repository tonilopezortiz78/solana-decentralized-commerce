const { airdropSolDevnet } = require("./transaction");
const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

(async () => {
  try {
    const recipientWallet = await new Promise((resolve) => {
      readline.question(
        "Please enter the recipient wallet public key: ",
        (wallet) => {
          resolve(wallet);
        }
      );
    });

    const airdropAmount = await new Promise((resolve) => {
      readline.question(
        "Please enter the amount of SOL to airdrop (in lamports): [recomended 1 SOL = 1000000000 lamports] ",
        (amount) => {
          resolve(parseInt(amount, 10));
        }
      );
    });

    const airdropSignature = await airdropSolDevnet(
      recipientWallet,
      airdropAmount
    );
    console.log("Airdrop successful. Transaction signature:", airdropSignature);

    readline.close();
  } catch (error) {
    console.error("Error:", error.message);
    readline.close();
  }
})();
