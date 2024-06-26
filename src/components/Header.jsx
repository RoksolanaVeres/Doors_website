import { Separator } from "@/components/ui/separator";
import { AnimatePresence, motion } from "framer-motion";
import { useContext } from "react";
import DropdownMenu from "./DropdownMenu";
import NavigationLinkItems from "./NavigationLinkItems";
import { MenuContext } from "./store/MenuContext";
import { LanguageContext } from "./store/LanguageContext";
import { useRef } from "react";
import { XIcon, MenuIcon } from "lucide-react";

export default function Header() {
  const { menuIsOpen, toggleMenuOpenState } = useContext(MenuContext);

  return (
    <>
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
        <Separator orientation="vertical" className="h-[20px]" />
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
  const { toggleMenuOpenState, menuIsOpen, closeMenu, openMenu } =
    useContext(MenuContext);
  const { language, setUkrainianLanguage, setEnglishLanguage } =
    useContext(LanguageContext);

  const dropdownMenu = useRef(null);

  if (menuIsOpen) {
    dropdownMenu.current.showModal();
  }

  if (!menuIsOpen && dropdownMenu.current) {
    dropdownMenu.current.close();
  }

  function handleDialogClick(e) {
    console.log(e.target.nodeName);
    if (e.target.nodeName === "DIALOG") {
      closeMenu();
    }
  }

  function handleCloseMenuClick() {
    closeMenu();
  }

  function handleOpenMenuClick() {
    openMenu();
  }

  return (
    <>
      <header
        id="mobileHeader"
        className="flex w-full justify-between gap-5 px-container-padding py-6 text-sm md:hidden"
      >
        <dialog
          ref={dropdownMenu}
          className="m-0 h-screen max-h-screen w-2/3 bg-background backdrop:bg-black/70"
          onClick={handleDialogClick}
        >
          <div className="h-full py-6 px-container-padding">
            <button className="pb-10">
              <XIcon
                size={32}
                strokeWidth={1.5}
                onClick={handleCloseMenuClick}
                className="text-accent-main"
              />
            </button>
            <DropdownMenu />
          </div>
        </dialog>
        <button onClick={handleOpenMenuClick}>
          <MenuIcon size={32} strokeWidth={1.5} />
        </button>
        <div className="flex gap-2">
          <button
            onClick={setUkrainianLanguage}
            className={`${language === "ua" && "border-b-2 border-accent-main"}`}
          >
            УКР
          </button>
          <Separator orientation="vertical" />
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
