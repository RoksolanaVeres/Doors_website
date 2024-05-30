import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./components/RootLayout";
import HomePage from "./components/pages/HomePage";
import ContactsPage from "./components/pages/ContactsPage";
import DoorsPage from "./components/pages/DoorsPage";
import WindowsPage from "./components/pages/WindowsPage";
import ServicesPage from "./components/pages/ServicesPage";

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        { path: "/", element: <HomePage /> },
        { path: "/doors", element: <DoorsPage /> },
        { path: "/windows", element: <WindowsPage /> },
        { path: "/services", element: <ServicesPage /> },
        { path: "/contacts", element: <ContactsPage /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}


// to do:
// - steel doors from Міністерство дверей https://ministerstvo-dverej.ua/kataloh/
// - add pdf catalogues Magda & Termoplast 
// - page / link to each door??? 
// - some description???
// - Windows from https://plamet.ua/vikna/
// - add to favourite feature


