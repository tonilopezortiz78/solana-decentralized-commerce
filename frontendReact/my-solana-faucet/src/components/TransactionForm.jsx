import { useState } from "react";
import {
  Connection,
  PublicKey,
  Transaction,
  SystemProgram,
  Keypair,
} from "@solana/web3.js";
import {
  Box,
  Button,
  Paper,
  TextField,
  Typography,
  Alert,
  Stack,
  useTheme,
  useMediaQuery,
  Tooltip,
} from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";

const TransactionForm = () => {
  const [recipientAddress, setRecipientAddress] = useState("");
  const [amount, setAmount] = useState("");
  const [secretKey, setSecretKey] = useState("");
  const [status, setStatus] = useState(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus(null);

    try {
      // Connect to devnet
      const connection = new Connection(
        "https://api.devnet.solana.com",
        "confirmed"
      );

      // Decode base64 private key
      const privateKeyBuffer = Buffer.from(secretKey, "base64");
      const senderKeypair = Keypair.fromSecretKey(
        new Uint8Array(privateKeyBuffer)
      );

      // Create transaction
      const transaction = new Transaction().add(
        SystemProgram.transfer({
          fromPubkey: senderKeypair.publicKey,
          toPubkey: new PublicKey(recipientAddress),
          lamports: amount * 1000000000, // Convert SOL to lamports
        })
      );

      // Send transaction
      const signature = await connection.sendTransaction(transaction, [
        senderKeypair,
      ]);

      setStatus({
        type: "success",
        message: `Transaction successful! Signature: ${signature}`,
      });
    } catch (error) {
      setStatus({
        type: "error",
        message: `Error: ${error.message}`,
      });
    }
  };

  return (
    <Paper sx={{ p: { xs: 2, sm: 3 } }}>
      <Stack spacing={2}>
        <Typography variant="h5" gutterBottom align="center">
          Send SOL
        </Typography>

        <Box component="form" onSubmit={handleSubmit}>
          <Stack spacing={2}>
            <Box>
              <Typography
                variant="subtitle1"
                gutterBottom
                sx={{ display: "flex", alignItems: "center", gap: 1 }}
              >
                Sender Secret Key
                <Tooltip title="Paste the base64 secret key of the wallet you want to send SOL from">
                  <InfoIcon fontSize="small" sx={{ opacity: 0.7 }} />
                </Tooltip>
              </Typography>
              <TextField
                fullWidth
                value={secretKey}
                onChange={(e) => setSecretKey(e.target.value)}
                multiline
                rows={isMobile ? 3 : 2}
                required
                size={isMobile ? "small" : "medium"}
              />
            </Box>

            <Box>
              <Typography
                variant="subtitle1"
                gutterBottom
                sx={{ display: "flex", alignItems: "center", gap: 1 }}
              >
                Recipient Address
                <Tooltip title="The public key of the wallet that will receive the SOL">
                  <InfoIcon fontSize="small" sx={{ opacity: 0.7 }} />
                </Tooltip>
              </Typography>
              <TextField
                fullWidth
                value={recipientAddress}
                onChange={(e) => setRecipientAddress(e.target.value)}
                required
                size={isMobile ? "small" : "medium"}
              />
            </Box>

            <Box>
              <Typography
                variant="subtitle1"
                gutterBottom
                sx={{ display: "flex", alignItems: "center", gap: 1 }}
              >
                Amount
                <Tooltip title="Amount of SOL to send (1 SOL = 1,000,000,000 lamports)">
                  <InfoIcon fontSize="small" sx={{ opacity: 0.7 }} />
                </Tooltip>
              </Typography>
              <TextField
                fullWidth
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                required
                size={isMobile ? "small" : "medium"}
                inputProps={{ step: "0.1" }}
              />
            </Box>

            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              size={isMobile ? "small" : "medium"}
            >
              Send Transaction
            </Button>

            {status && (
              <Alert
                severity={status.type}
                sx={{
                  fontSize: { xs: "0.875rem", sm: "1rem" },
                }}
              >
                {status.message}
              </Alert>
            )}
          </Stack>
        </Box>
      </Stack>
    </Paper>
  );
};

export default TransactionForm;
