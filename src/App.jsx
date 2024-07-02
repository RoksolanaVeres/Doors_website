import { lazy, Suspense } from "react";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./components/RootLayout";
import HomePage from "./components/pages/HomePage";
const DoorsPage = lazy(() => import("./components/pages/DoorsPage"));
const WindowsPage = lazy(() => import("./components/pages/WindowsPage"));
const ServicesPage = lazy(() => import("./components/pages/ServicesPage"));
const ContactsPage = lazy(() => import("./components/pages/ContactsPage"));

const fallback = (
  <p className="absolute left-[50%] top-[50%] -translate-x-[50%] text-xl tracking-widest text-primary">
    Loading...
  </p>
);

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
            <Suspense fallback={fallback}>
              <DoorsPage />
            </Suspense>
          ),
        },
        {
          path: "/windows",
          element: (
            <Suspense fallback={fallback}>
              <WindowsPage />
            </Suspense>
          ),
        },
        {
          path: "/services",
          element: (
            <Suspense fallback={fallback}>
              <ServicesPage />
            </Suspense>
          ),
        },
        {
          path: "/contacts",
          element: (
            <Suspense fallback={fallback}>
              <ContactsPage />
            </Suspense>
          ),
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}
