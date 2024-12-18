import { useState } from "react";
import { Connection, PublicKey } from "@solana/web3.js";
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
  LinearProgress,
} from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import LocalAtmIcon from "@mui/icons-material/LocalAtm";

const FaucetForm = () => {
  const [address, setAddress] = useState("");
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus(null);
    setLoading(true);

    try {
      const connection = new Connection(
        "https://api.devnet.solana.com",
        "confirmed"
      );
      const publicKey = new PublicKey(address);

      const airdropSignature = await connection.requestAirdrop(
        publicKey,
        2 * 1000000000 // 2 SOL in lamports
      );

      // Wait for confirmation
      await connection.confirmTransaction(airdropSignature);

      setStatus({
        type: "success",
        message: `Successfully airdropped 2 SOL to ${address.slice(0, 8)}...`,
      });
    } catch (error) {
      setStatus({
        type: "error",
        message: `Error: ${error.message}`,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Paper
      sx={{
        p: { xs: 2, sm: 3 },
        background: "rgba(17, 24, 39, 0.7)",
        backdropFilter: "blur(10px)",
        border: "1px solid rgba(255, 255, 255, 0.1)",
        position: "relative",
        overflow: "hidden",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "2px",
          background: "linear-gradient(90deg, #14F195, #9945FF)",
          opacity: 0.7,
        },
      }}
    >
      <Stack spacing={3}>
        <Box sx={{ textAlign: "center" }}>
          <LocalAtmIcon
            sx={{
              fontSize: 40,
              color: "#14F195",
              mb: 1,
              filter: "drop-shadow(0 0 10px rgba(20, 241, 149, 0.5))",
            }}
          />
          <Typography
            variant="h5"
            gutterBottom
            sx={{
              background: "linear-gradient(45deg, #14F195 30%, #9945FF 90%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              fontWeight: "bold",
            }}
          >
            DevNet Faucet
          </Typography>
        </Box>

        <Box component="form" onSubmit={handleSubmit}>
          <Stack spacing={3}>
            <Box>
              <Typography
                variant="subtitle1"
                gutterBottom
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                  color: "rgba(255, 255, 255, 0.7)",
                }}
              >
                Wallet Address
                <Tooltip title="Enter the public key of the wallet to receive 2 SOL">
                  <InfoIcon fontSize="small" sx={{ opacity: 0.7 }} />
                </Tooltip>
              </Typography>
              <TextField
                fullWidth
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder="Enter your wallet address"
                required
                size={isMobile ? "small" : "medium"}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    backgroundColor: "rgba(255, 255, 255, 0.03)",
                  },
                }}
              />
            </Box>

            <Button
              type="submit"
              variant="contained"
              disabled={loading}
              sx={{
                py: 1.5,
                background: "linear-gradient(45deg, #14F195 30%, #9945FF 90%)",
                boxShadow: "0 4px 20px rgba(20, 241, 149, 0.25)",
                color: "#FFFFFF",
                fontWeight: "600",
                "&:hover": {
                  background:
                    "linear-gradient(45deg, #13E085 30%, #8935EF 90%)",
                  transform: "translateY(-2px)",
                  boxShadow: "0 8px 25px rgba(20, 241, 149, 0.3)",
                },
                "&:disabled": {
                  color: "rgba(255, 255, 255, 0.7)",
                },
              }}
            >
              {loading ? "Airdropping..." : "Request 2 SOL"}
            </Button>

            {loading && (
              <LinearProgress
                sx={{
                  background: "rgba(255, 255, 255, 0.1)",
                  "& .MuiLinearProgress-bar": {
                    background:
                      "linear-gradient(45deg, #14F195 30%, #9945FF 90%)",
                  },
                }}
              />
            )}

            {status && (
              <Alert
                severity={status.type}
                variant="outlined"
                sx={{
                  borderRadius: 2,
                  backgroundColor:
                    status.type === "success"
                      ? "rgba(20, 241, 149, 0.1)"
                      : "rgba(255, 99, 71, 0.1)",
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

export default FaucetForm;
