import { createContext, useState } from "react";

export const LanguageContext = createContext(null);

export default function LanguageContextProvider({ children }) {
  const [language, setLanguage] = useState("ua");

  function setUkrainianLanguage() {
    setLanguage("ua");
  }

  function setEnglishLanguage() {
    setLanguage("en");
  }

  const value = { language, setUkrainianLanguage, setEnglishLanguage };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}
