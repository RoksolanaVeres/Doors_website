import { Separator } from "@/components/ui/separator";
import { AnimatePresence, motion } from "framer-motion";
import { useContext } from "react";
import DropdownMenu from "./DropdownMenu";
import NavigationLinkItems from "./NavigationLinkItems";
import { MenuContext } from "./store/MenuContext";

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
        <button>УКР</button>
        <Separator orientation="vertical" className="h-[20px]" />
        <button>ENG</button>
      </div>
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
        <div className="flex gap-2">
          <button>УКР</button>
          <Separator orientation="vertical" />
          <button>ENG</button>
        </div>
      </header>
    </>
  );
}
