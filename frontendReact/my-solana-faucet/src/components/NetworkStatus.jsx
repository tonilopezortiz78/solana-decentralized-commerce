import { useState, useEffect, useCallback } from "react";
import { Connection } from "@solana/web3.js";
import { Chip } from "@mui/material";
import SignalCellularAltIcon from "@mui/icons-material/SignalCellularAlt";
import SignalCellularConnectedNoInternet0BarIcon from "@mui/icons-material/SignalCellularConnectedNoInternet0Bar";

const DEVNET_URL = "https://api.devnet.solana.com";

const NetworkStatus = () => {
  const [isConnected, setIsConnected] = useState(false);

  const checkConnection = useCallback(async () => {
    try {
      const connection = new Connection(DEVNET_URL);
      await connection.getBlockHeight();
      setIsConnected(true);
    } catch {
      setIsConnected(false);
    }
  }, []);

  useEffect(() => {
    checkConnection();
    const interval = setInterval(checkConnection, 10000);
    return () => clearInterval(interval);
  }, [checkConnection]);

  return (
    <Chip
      icon={
        isConnected ? (
          <SignalCellularAltIcon />
        ) : (
          <SignalCellularConnectedNoInternet0BarIcon />
        )
      }
      label={isConnected ? "Devnet Connected" : "Devnet Disconnected"}
      color={isConnected ? "success" : "error"}
      variant="outlined"
      size="medium"
      sx={{
        borderColor: isConnected ? "primary.main" : "error.main",
        "& .MuiChip-icon": {
          color: isConnected ? "primary.main" : "error.main",
        },
      }}
    />
  );
};

export default NetworkStatus;
