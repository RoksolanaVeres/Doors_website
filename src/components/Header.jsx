
import { useContext } from "react";
import { ThemeContext } from "./store/ThemeContext";
import { MenuContext } from "./store/MenuContext";

import { NavLink } from "react-router-dom";
import NavigationLinkItems from "./NavigationLinkItems";

import "@theme-toggles/react/css/DarkSide.css";
import { DarkSide } from "@theme-toggles/react";
import { Separator } from "@/components/ui/separator";


export default function Header() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div
      id="mobile-desktop-header__container"
      className="absolute left-0 right-0 top-0 z-10 flex"
    >
      <DesktopHeader theme={theme} toggleTheme={toggleTheme} />
      <MobileHeader theme={theme} toggleTheme={toggleTheme} />
    </div>
  );
}

function DesktopHeader({ theme, toggleTheme }) {
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
    
      <div
        id="desktop-language-theme-buttons__container"
        className="flex gap-1 md:gap-2"
      >
        <button>УКР</button>
        <Separator orientation="vertical" />
        <button>ENG</button>
        <DarkSide
          duration={300}
          onToggle={toggleTheme}
          toggled={theme === "light"}
          className="ml-2 text-2xl md:ml-4"
        />
      </div>
    </header>
  );
}

function MobileHeader({ theme, toggleTheme }) {
  const { toggleMenuOpenState, menuIsOpen, closeMenu } =
    useContext(MenuContext);

  return (
    <>
      <header
        id="mobileHeader"
        className="flex w-full justify-between gap-5 px-container-padding py-6 text-sm md:hidden"
      >
        <button onClick={toggleMenuOpenState}>
          Menu {menuIsOpen ? "open" : "closed"}
        </button>
        <div
          id="mobile-language-theme-buttons__container"
          className="flex gap-1"
        >
          <button>УКР</button>
          <Separator orientation="vertical" />
          <button>ENG</button>
          <DarkSide
            duration={300}
            onToggle={toggleTheme}
            toggled={theme === "light"}
            className="ml-2 text-lg md:ml-4"
          />
        </div>
      </header>
    </>
  );
}
