import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./components/pages/RootLayout";
import HomePage from "./components/pages/HomePage";
import ContactsPage from "./components/pages/ContactsPage";
import CataloguePage from "./components/pages/CataloguePage";
import BrandsPage from "./components/pages/BrandsPage";
import ServicesPage from "./components/pages/ServicesPage";

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        { path: "/", element: <HomePage /> },
        { path: "/catalogue", element: <CataloguePage /> },
        { path: "/brands", element: <BrandsPage /> },
        { path: "/services", element: <ServicesPage /> },
        { path: "/contacts", element: <ContactsPage /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}
