import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "@fontsource-variable/inter";
import "@fontsource-variable/lora";
import { HelmetProvider } from "react-helmet-async";
import MenuContextProvider from "./components/store/MenuContext.jsx";
import LanguageContextProvider from "./components/store/LanguageContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <LanguageContextProvider>
      <MenuContextProvider>
        <HelmetProvider>
          <App />
        </HelmetProvider>
      </MenuContextProvider>
    </LanguageContextProvider>
  </React.StrictMode>,
);
