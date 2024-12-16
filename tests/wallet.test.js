// Import the createWalletForCustomer function from the wallet module
const { createWalletForCustomer } = require("../src/wallet");

// Group related tests for wallet creation
describe("Wallet Creation Tests", () => {
  // Test case for creating a wallet with a valid customer ID
  test("should create a wallet for a valid customer ID", async () => {
    const customerId = "customer123"; // Example customer ID

    // Call the function to create a wallet
    const wallet = await createWalletForCustomer(customerId);

    // Check if the wallet object contains the expected properties
    expect(wallet).toHaveProperty("customerId", customerId);
    expect(wallet).toHaveProperty("publicKey");
    expect(wallet).toHaveProperty("privateKey");

    // Validate the format of the public key (length and alphanumeric)
    expect(wallet.publicKey).toMatch(/^[A-Za-z0-9]{43,44}$/);

    // Validate that the private key is a base64 encoded string
    expect(wallet.privateKey).toMatch(/^[A-Za-z0-9+/=]+$/);
  });

  // Test case to ensure an error is thrown if customerId is missing
  test("should throw an error if customerId is missing", async () => {
    // Expect the function to throw an error when customerId is null
    await expect(() => createWalletForCustomer(null)).toThrow(
      "Customer ID is required."
    );
  });
});
