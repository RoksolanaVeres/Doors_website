import { createContext, useState, useEffect } from "react";
const THEME_STORAGE_KEY = "theme";

export const ThemeContext = createContext(null);

export default function ThemeContextProvider({ children }) {
  const [theme, setTheme] = useState(
    localStorage.getItem(THEME_STORAGE_KEY) || "light",
  );

  function toggleTheme() {
    setTheme((currentTheme) => (currentTheme === "light" ? "dark" : "light"));
  }

  useEffect(() => {
    localStorage.setItem(THEME_STORAGE_KEY, theme);
    const root = document.documentElement;
    root.setAttribute("class", theme);
  }, [theme]);
  const value = { theme, toggleTheme, isDark: theme === "dark" };
  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}
