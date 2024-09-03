import { createContext, useState } from "react";

export const MenuContext = createContext(null);

export default function MenuContextProvider({ children }) {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  function toggleMenuOpenState() {
    setMenuIsOpen((isOpen) => !isOpen);
  }

  function openMenu() {
    setMenuIsOpen(true);
  }

  function closeMenu() {
    setMenuIsOpen(false);
  }

  function closeMenuIfLinkClicked(e) {
    if (e.target.tagName === "A") {
      setMenuIsOpen(false);
    }
  }

  const value = {
    menuIsOpen,
    toggleMenuOpenState,
    closeMenu,
    closeMenuIfLinkClicked,
    openMenu,
  };
  return <MenuContext.Provider value={value}>{children}</MenuContext.Provider>;
}
