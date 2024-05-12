import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "@fontsource-variable/inter";
import "@fontsource-variable/roboto-slab";
import { HelmetProvider } from "react-helmet-async";
import ThemeContextProvider from "./components/store/ThemeContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeContextProvider>
      <HelmetProvider>
        <App />
      </HelmetProvider>
    </ThemeContextProvider>
  </React.StrictMode>,
);
