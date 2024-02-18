import { createTheme } from "@mui/material";

export const customTheme = createTheme({
  components: {
    MuiCard: { styleOverrides: { root: { borderRadius: 8 } } },
    MuiButton: {
      styleOverrides: { root: { borderRadius: 8, textTransform: "none" } },
    },
    MuiFormLabel: {
      styleOverrides: {
        asterisk: { color: "red" },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: 8,
        },
      },
    },
  },
});
