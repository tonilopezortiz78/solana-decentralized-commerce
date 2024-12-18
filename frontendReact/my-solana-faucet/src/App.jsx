import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Box, Container, Typography, Grid, Toolbar } from "@mui/material";
import Navbar from "./components/Navbar";
import WalletCreator from "./components/WalletCreator";
import TransactionForm from "./components/TransactionForm";
import FaucetForm from "./components/FaucetForm";
import { THEME_SETTINGS } from "./utils/constants";

function App() {
  return (
    <ThemeProvider theme={createTheme(THEME_SETTINGS)}>
      <CssBaseline />
      <Box
        sx={{
          minHeight: "100vh",
          background: "linear-gradient(180deg, #0F1624 0%, #1A1F2F 100%)",
          position: "relative",
          "&::before, &::after": {
            content: '""',
            position: "absolute",
            width: "600px",
            height: "600px",
            borderRadius: "50%",
            filter: "blur(100px)",
            zIndex: 0,
          },
          "&::before": {
            top: "0",
            left: "0",
            background:
              "radial-gradient(circle, rgba(20, 241, 149, 0.1) 0%, transparent 70%)",
          },
          "&::after": {
            bottom: "0",
            right: "0",
            background:
              "radial-gradient(circle, rgba(153, 69, 255, 0.1) 0%, transparent 70%)",
          },
        }}
      >
        <Navbar />
        <Toolbar />

        <Container
          maxWidth="lg"
          sx={{
            position: "relative",
            zIndex: 1,
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            py: 4,
          }}
        >
          <Typography variant="h1" align="center" gutterBottom>
            Solana DevNet Playground
          </Typography>

          <Grid
            container
            spacing={3}
            sx={{
              maxWidth: 800,
              mx: "auto",
              "& .MuiPaper-root": {
                backdropFilter: "blur(10px)",
                "&:hover": {
                  transform: "translateY(-2px)",
                },
              },
            }}
          >
            <Grid item xs={12}>
              <WalletCreator />
            </Grid>
            <Grid item xs={12}>
              <FaucetForm />
            </Grid>
            <Grid item xs={12}>
              <TransactionForm />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </ThemeProvider>
  );
}

export default App;
