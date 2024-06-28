import { AnimatePresence, motion } from "framer-motion";
import { useContext } from "react";
import DropdownMenu from "./DropdownMenu";
import NavigationLinkItems from "./NavigationLinkItems";
import { MenuContext } from "./store/MenuContext";
import { LanguageContext } from "./store/LanguageContext";

export default function Header() {
  const { menuIsOpen, toggleMenuOpenState } = useContext(MenuContext);

  return (
    <>
      <AnimatePresence>
        {menuIsOpen && (
          <>
            <motion.div
              id="overlay"
              className="absolute bottom-0 top-0 z-10 w-full bg-black/70"
              onClick={toggleMenuOpenState}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            ></motion.div>
            <DropdownMenu />
          </>
        )}
      </AnimatePresence>
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
  const { language, setUkrainianLanguage, setEnglishLanguage } =
    useContext(LanguageContext);

  return (
    <header
      id="desktopHeader"
      className="hidden w-full items-center justify-between px-container-padding py-8 md:flex"
    >
      <nav id="desktopNav">
        <ul className="flex w-full justify-between gap-5">
          <NavigationLinkItems />
        </ul>
      </nav>
      <div className="flex gap-2">
        <button
          onClick={setUkrainianLanguage}
          className={`${language === "ua" && "border-b-2 border-accent-main"}`}
        >
          УКР
        </button>
        <div className="h-[22px] w-[1px] bg-border"></div>
        <button
          onClick={setEnglishLanguage}
          className={`${language === "en" && "border-b-2 border-accent-main"}`}
        >
          ENG
        </button>
      </div>
    </header>
  );
}

function MobileHeader() {
  const { toggleMenuOpenState, menuIsOpen } = useContext(MenuContext);
  const { language, setUkrainianLanguage, setEnglishLanguage } =
    useContext(LanguageContext);

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
        <div className="flex gap-2">
          <button
            onClick={setUkrainianLanguage}
            className={`${language === "ua" && "border-b-2 border-accent-main"}`}
          >
            УКР
          </button>
          <div className="h-[22px] w-[1px] bg-border"></div>
          <button
            onClick={setEnglishLanguage}
            className={`${language === "en" && "border-b-2 border-accent-main"}`}
          >
            ENG
          </button>
        </div>
      </header>
    </>
  );
}
