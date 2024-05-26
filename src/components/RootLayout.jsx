import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import DropdownMenu from "./DropdownMenu";
import { useContext } from "react";
import { MenuContext } from "./store/MenuContext";

export default function RootLayout() {
  const { toggleMenuOpenState, menuIsOpen } = useContext(MenuContext);

  return (
    <>
      <div
        id="page-layout--main"
        className="relative flex h-fit min-h-screen flex-col justify-between"
      >
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
        <div id="header-mainContent__container" className="flex-1">
          <Header />
          <main id="pageContent__container">
            <Outlet />
          </main>
        </div>
        <Footer />
      </div>
    </>
  );
}
