import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ThemeProvider } from "@mui/material";
import { customTheme } from "./customTheme.js";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={customTheme}>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  // </React.StrictMode>
);
