import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./components/pages/RootLayout";
import HomePage from "./components/pages/HomePage";
import ContactsPage from "./components/pages/ContactsPage";
import CataloguePage from "./components/pages/CataloguePage";
import BrandsPage from "./components/pages/BrandsPage";
import BlogPage from "./components/pages/BlogPage";

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        { path: "/", element: <HomePage /> },
        { path: "/catalogue", element: <CataloguePage /> },
        { path: "/brands", element: <BrandsPage /> },
        { path: "/blog", element: <BlogPage /> },
        { path: "/contacts", element: <ContactsPage /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}
