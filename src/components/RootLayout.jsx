import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

export default function RootLayout() {
  return (
    <>
      <div
        id="page-layout--main"
        className="relative flex h-fit min-h-screen flex-col justify-between"
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
