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
      <div>
        <Header />
        <main>
          <Outlet />
        </main>
      </div>
      <Footer />
    </div>
  );
}
