import { useContext } from "react";
import { ThemeContext } from "./store/ThemeContext";
import { MenuContext } from "./store/MenuContext";

import { motion } from "framer-motion";

import "@theme-toggles/react/css/DarkSide.css";
import { DarkSide } from "@theme-toggles/react";
import { Separator } from "@/components/ui/separator";

import DropdownMenu from "./DropdownMenu";
import NavigationLinkItems from "./NavigationLinkItems";

export default function Header() {
  const { menuIsOpen, toggleMenuOpenState } = useContext(MenuContext);

  return (
    <>
      {menuIsOpen && (
        <>
          <div
            id="overlay"
            className="absolute bottom-0 top-0 z-10 w-full bg-black/70"
            onClick={toggleMenuOpenState}
          ></div>
          <DropdownMenu />
        </>
      )}

      <div
        id="mobile-desktop-header__container"
        className="absolute left-0 right-0 top-0 z-10 flex"
      >
        <DesktopHeader />
        <MobileHeader />
      </div>
    </>
  );
}

function DesktopHeader() {
  return (
    <header
      id="desktopHeader"
      className="hidden w-full justify-between px-container-padding py-8 md:flex"
    >
      <nav id="desktopNav">
        <ul className="flex w-full justify-between gap-5">
          <NavigationLinkItems />
        </ul>
      </nav>
      <LanguageAndThemeSwitchers screenSize="desktop" />
    </header>
  );
}

function MobileHeader() {
  const { toggleMenuOpenState, menuIsOpen } = useContext(MenuContext);

  return (
    <>
      <header
        id="mobileHeader"
        className="flex w-full justify-between gap-5 px-container-padding py-6 text-sm md:hidden"
      >
        <button
          onClick={toggleMenuOpenState}
          className="grid h-[20px] w-[30px] grid-cols-1 gap-0.5"
        >
          <motion.div
            animate={{ rotate: menuIsOpen ? -45 : 0, y: menuIsOpen ? 11 : 0 }}
            transition={{ ease: "easeOut", duration: 0.2 }}
            className="h-0.5 bg-black"
          ></motion.div>
          <motion.div
            animate={{ display: menuIsOpen ? "none" : "block" }}
            transition={{ ease: "easeOut", duration: 0.1 }}
            className="h-0.5 bg-black"
          ></motion.div>
          <motion.div
            animate={{ rotate: menuIsOpen ? 45 : 0 }}
            transition={{ ease: "easeOut", duration: 0.2 }}
            className={"h-0.5 bg-black"}
          ></motion.div>
        </button>
        <LanguageAndThemeSwitchers screenSize="mobile" />
      </header>
    </>
  );
}

function LanguageAndThemeSwitchers({ screenSize }) {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div
      id="languageAndThemeSwitchers"
      className={`flex ${screenSize === "mobile" ? "gap-1" : "gap-2"}`}
    >
      <button>УКР</button>
      <Separator orientation="vertical" />
      <button>ENG</button>
      <DarkSide
        duration={300}
        onToggle={toggleTheme}
        toggled={theme === "light"}
        className={`ml-2 flex ${screenSize === "mobile" ? "text-lg" : "text-2xl"}`}
      />
    </div>
  );
}
