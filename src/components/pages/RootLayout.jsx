import { Outlet } from "react-router-dom";
import Header from "../Header";
import NavigationLinks from "../NavigationLinks";
import Footer from "../Footer";

export default function RootLayout() {
  return (
    <div
      id="page-layout"
      className="flex min-h-screen flex-col justify-between"
    >
      <div className="">
        <Header />
        <NavigationLinks />
        <main className="flex justify-center">
          <div className="px-container-padding w-full max-w-large py-5">
            <Outlet />
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
}
