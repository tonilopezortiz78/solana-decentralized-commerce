import { useState } from "react";
import { Keypair } from "@solana/web3.js";
import {
  Box,
  Button,
  Paper,
  Typography,
  TextField,
  Stack,
  useTheme,
  useMediaQuery,
  Tooltip,
} from "@mui/material";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import InfoIcon from "@mui/icons-material/Info";

const WalletCreator = () => {
  const [wallet, setWallet] = useState(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const createWallet = () => {
    const newWallet = Keypair.generate();
    setWallet({
      publicKey: newWallet.publicKey.toString(),
      secretKey: Buffer.from(newWallet.secretKey).toString("base64"),
    });
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <Paper sx={{ p: { xs: 2, sm: 3 } }}>
      <Stack spacing={2} alignItems="center">
        <Typography variant="h5" gutterBottom align="center">
          Create New Wallet
        </Typography>

        <Button
          variant="contained"
          color="primary"
          onClick={createWallet}
          fullWidth={isMobile}
          sx={{ minWidth: 200 }}
        >
          Generate New Wallet
        </Button>

        {wallet && (
          <Stack spacing={2} sx={{ width: "100%" }}>
            <Box>
              <Typography
                variant="subtitle1"
                gutterBottom
                sx={{ display: "flex", alignItems: "center", gap: 1 }}
              >
                Public Key
                <Tooltip title="This is your wallet's public address that others can send SOL to">
                  <InfoIcon fontSize="small" sx={{ opacity: 0.7 }} />
                </Tooltip>
              </Typography>
              <TextField
                fullWidth
                value={wallet.publicKey}
                size={isMobile ? "small" : "medium"}
                InputProps={{
                  readOnly: true,
                  endAdornment: (
                    <Button
                      onClick={() => copyToClipboard(wallet.publicKey)}
                      startIcon={<ContentCopyIcon />}
                      size={isMobile ? "small" : "medium"}
                    >
                      {isMobile ? "" : "Copy"}
                    </Button>
                  ),
                }}
              />
            </Box>

            <Box>
              <Typography
                variant="subtitle1"
                gutterBottom
                sx={{ display: "flex", alignItems: "center", gap: 1 }}
              >
                Secret Key
                <Tooltip title="This key is encoded in base64 format and gives full control of your wallet. Never share it with anyone!">
                  <InfoIcon fontSize="small" sx={{ opacity: 0.7 }} />
                </Tooltip>
              </Typography>
              <TextField
                fullWidth
                multiline
                rows={isMobile ? 3 : 2}
                value={wallet.secretKey}
                size={isMobile ? "small" : "medium"}
                InputProps={{
                  readOnly: true,
                  endAdornment: (
                    <Button
                      onClick={() => copyToClipboard(wallet.secretKey)}
                      startIcon={<ContentCopyIcon />}
                      size={isMobile ? "small" : "medium"}
                    >
                      {isMobile ? "" : "Copy"}
                    </Button>
                  ),
                }}
              />
            </Box>
          </Stack>
        )}
      </Stack>
    </Paper>
  );
};

export default WalletCreator;
