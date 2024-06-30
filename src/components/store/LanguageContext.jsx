import { useLocalStorageState } from "@/hooks/useLocalStorageState";
import { createContext } from "react";

export const LanguageContext = createContext(null);

export default function LanguageContextProvider({ children }) {
  const [language, setLanguage] = useLocalStorageState("ua", "lang")

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
