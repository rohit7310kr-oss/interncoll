import { createBrowserRouter, RouterProvider } from "react-router";
import { Router } from "react-router";
import Home from "../../features/public/Home";
import Auth from "../../features/Auth/components/Auth";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/auth",
    element: <Auth />,
  },
]);

const AppRoutes = function () {
  return <RouterProvider router={router} />;
};

export default AppRoutes;
