import { createTheme } from "@mui/material";

export const customTheme = createTheme({
  components: {
    MuiCard: { styleOverrides: { root: { borderRadius: 16 } } },
    MuiButton: {
      styleOverrides: { root: { borderRadius: 16, textTransform: "none" } },
    },
    MuiFormLabel: {
      styleOverrides: {
        asterisk: { color: "red" },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: 16,
        },
      },
    },
  },
});
