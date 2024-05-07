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
          <div className="max-w-large w-full p-5">
            <Outlet />
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
}
