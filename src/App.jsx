import { lazy, Suspense } from "react";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./components/RootLayout";
import HomePage from "./components/pages/HomePage";
const DoorsPage = lazy(() => import("./components/pages/DoorsPage"));
const WindowsPage = lazy(() => import("./components/pages/WindowsPage"));
const ServicesPage = lazy(() => import("./components/pages/ServicesPage"));
const ContactsPage = lazy(() => import("./components/pages/ContactsPage"));

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        { path: "/", element: <HomePage /> },
        {
          path: "/doors",
          element: (
            <Suspense fallback={<p>Loading...</p>}>
              <DoorsPage />
            </Suspense>
          ),
        },
        {
          path: "/windows",
          element: (
            <Suspense fallback={<p>Loading...</p>}>
              <WindowsPage />
            </Suspense>
          ),
        },
        {
          path: "/services",
          element: (
            <Suspense fallback={<p>Loading...</p>}>
              <ServicesPage />
            </Suspense>
          ),
        },
        {
          path: "/contacts",
          element: (
            <Suspense fallback={<p>Loading...</p>}>
              <ContactsPage />
            </Suspense>
          ),
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

// to do:
// - add pdf catalogues Magda & Termoplast
// - page / link to each door???
// - some description???
// - Windows from https://plamet.ua/vikna/
// - add to favourite feature
