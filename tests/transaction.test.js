const { web3 } = require("@solana/web3.js");
const {
  createTransaction,
  validateTransaction,
} = require("../src/wallet/transactions");

describe("Transaction Tests", () => {
  // Test case for creating a basic transaction
  test("should create a valid transaction with correct parameters", async () => {
    const senderWallet = {
      publicKey: "sender_public_key",
      privateKey: "sender_private_key",
    };
    const recipientAddress = "recipient_address";
    const amount = 1.5; // SOL amount

    const transaction = await createTransaction({
      senderWallet,
      recipientAddress,
      amount,
    });

    expect(transaction).toHaveProperty("signature");
    expect(transaction).toHaveProperty("sender", senderWallet.publicKey);
    expect(transaction).toHaveProperty("recipient", recipientAddress);
    expect(transaction).toHaveProperty("amount", amount);
    expect(transaction).toHaveProperty("timestamp");
  });

  // Test case for transaction with invalid amount
  test("should throw error for invalid transaction amount", async () => {
    const senderWallet = {
      publicKey: "sender_public_key",
      privateKey: "sender_private_key",
    };
    const recipientAddress = "recipient_address";
    const invalidAmount = -1; // Negative amount should be invalid

    await expect(
      createTransaction({
        senderWallet,
        recipientAddress,
        amount: invalidAmount,
      })
    ).rejects.toThrow("Invalid transaction amount");
  });

  // Test case for transaction validation
  test("should validate a legitimate transaction", async () => {
    const mockTransaction = {
      signature: "valid_signature",
      sender: "sender_public_key",
      recipient: "recipient_address",
      amount: 1.5,
      timestamp: Date.now(),
    };

    const isValid = await validateTransaction(mockTransaction);
    expect(isValid).toBe(true);
  });

  // Test case for invalid transaction validation
  test("should reject an invalid transaction", async () => {
    const mockInvalidTransaction = {
      signature: "invalid_signature",
      sender: "sender_public_key",
      recipient: "recipient_address",
      amount: 1.5,
      timestamp: Date.now(),
    };

    const isValid = await validateTransaction(mockInvalidTransaction);
    expect(isValid).toBe(false);
  });

  // Test case for insufficient funds
  test("should throw error for insufficient funds", async () => {
    const senderWallet = {
      publicKey: "sender_public_key",
      privateKey: "sender_private_key",
    };
    const recipientAddress = "recipient_address";
    const largeAmount = 999999; // Amount larger than balance

    await expect(
      createTransaction({
        senderWallet,
        recipientAddress,
        amount: largeAmount,
      })
    ).rejects.toThrow("Insufficient funds");
  });

  // Test case for invalid recipient address
  test("should throw error for invalid recipient address", async () => {
    const senderWallet = {
      publicKey: "sender_public_key",
      privateKey: "sender_private_key",
    };
    const invalidRecipientAddress = "invalid_address";
    const amount = 1.5;

    await expect(
      createTransaction({
        senderWallet,
        recipientAddress: invalidRecipientAddress,
        amount,
      })
    ).rejects.toThrow("Invalid recipient address");
  });
});
