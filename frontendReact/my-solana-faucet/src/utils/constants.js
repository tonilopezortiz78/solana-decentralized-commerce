export const DEVNET_URL = "https://api.devnet.solana.com";
export const LAMPORTS_PER_SOL = 1000000000;

export const THEME_SETTINGS = {
  palette: {
    mode: "dark",
    primary: {
      main: "#14F195", // Solana green
      dark: "#0DD584",
      light: "#42F7B2",
    },
    secondary: {
      main: "#9945FF", // Solana purple
      dark: "#8935EF",
      light: "#AB65FF",
    },
    background: {
      default: "#0F1624",
      paper: "rgba(17, 24, 39, 0.7)",
    },
    text: {
      primary: "#FFFFFF",
      secondary: "rgba(255, 255, 255, 0.7)",
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Arial", sans-serif',
    h1: {
      fontSize: "2.5rem",
      fontWeight: 600,
      letterSpacing: "-0.02em",
      background: "linear-gradient(45deg, #14F195 30%, #9945FF 90%)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
    },
    h5: {
      fontWeight: 600,
      letterSpacing: "0.02em",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: "none",
          fontWeight: 600,
          padding: "10px 20px",
          background: "rgba(20, 241, 149, 0.1)",
          border: "1px solid rgba(20, 241, 149, 0.2)",
          color: "#14F195",
          transition: "all 0.3s ease",
          "&:hover": {
            background: "rgba(20, 241, 149, 0.2)",
            border: "1px solid rgba(20, 241, 149, 0.4)",
            transform: "translateY(-1px)",
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          background: "rgba(17, 24, 39, 0.7)",
          backdropFilter: "blur(10px)",
          borderRadius: 16,
          border: "1px solid rgba(255, 255, 255, 0.1)",
          boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
          transition: "all 0.3s ease",
          "&:hover": {
            border: "1px solid rgba(20, 241, 149, 0.2)",
            boxShadow: "0 4px 30px rgba(20, 241, 149, 0.1)",
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            borderRadius: 8,
            background: "rgba(255, 255, 255, 0.05)",
            "& fieldset": {
              borderColor: "rgba(255, 255, 255, 0.1)",
            },
            "&:hover fieldset": {
              borderColor: "rgba(20, 241, 149, 0.3)",
            },
            "&.Mui-focused fieldset": {
              borderColor: "#14F195",
            },
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          background: "rgba(20, 241, 149, 0.1)",
          backdropFilter: "blur(10px)",
          "& .MuiChip-label": {
            color: "#14F195",
          },
        },
        outlined: {
          border: "1px solid rgba(20, 241, 149, 0.3)",
          "&:hover": {
            background: "rgba(20, 241, 149, 0.2)",
          },
        },
      },
    },
  },
  shape: {
    borderRadius: 8,
  },
};
