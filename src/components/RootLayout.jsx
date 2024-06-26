import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import { MenuContext } from "./store/MenuContext";
import { useContext } from "react";

export default function RootLayout() {
  const { menuIsOpen } = useContext(MenuContext);
  return (
    <>
      <div
        id="page-layout--main"
        className={`${
          menuIsOpen ? "h-screen overflow-hidden" : "h-fit"
        } relative flex min-h-screen flex-col justify-between`}
        // className="relative flex h-fit min-h-screen flex-col justify-between"
      >
        <div id="header-mainContent__container" className="flex-1">
          <Header />
          <main id="pageContent__container" className="overflow-hidden">
            <Outlet />
          </main>
        </div>
        <Footer />
      </div>
    </>
  );
}
