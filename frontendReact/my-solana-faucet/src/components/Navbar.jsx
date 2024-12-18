import { AppBar, Toolbar, Typography, Container, Box } from "@mui/material";
import solanaLogo from "../assets/solanaLogo.svg";
import NetworkStatus from "./NetworkStatus";

const Navbar = () => {
  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        backgroundColor: "rgba(15, 22, 36, 0.95)",
        borderBottom: 1,
        borderColor: "rgba(255, 255, 255, 0.1)",
        backdropFilter: "blur(8px)",
      }}
    >
      <Container maxWidth={false}>
        <Toolbar
          sx={{
            height: 64,
            px: { xs: 2, sm: 3, md: 4 },
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <img
                src={solanaLogo}
                alt="Solana Logo"
                style={{ height: "24px" }}
              />
              <Typography
                variant="h6"
                component="div"
                sx={{
                  fontWeight: 600,
                  letterSpacing: "0.02em",
                }}
              >
                Solana DevNet Playground
              </Typography>
            </Box>
            <NetworkStatus />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
