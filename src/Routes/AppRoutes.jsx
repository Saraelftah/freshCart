import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "../Layout/Layout";
// import { lazy } from "react";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Notfound from "../pages/Notfound/Notfound";

function AppRoutes() {
  // const Home = lazy(() => import("../pages/Home/Home"));
  // const Login = lazy(() => import("../pages/Login/Login"))
  // const Register = lazy(() => import("../pages/Register/Register"))
  // const Notfound = lazy(() => import("../pages/Notfound/Notfound"))
  let router = createBrowserRouter([
    { path: "login", element: <Login /> },
    { path: "register", element: <Register /> },
    {
      path: "",
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },

        { path: "*", element: <Notfound /> },
      ],
    },
  ]);

  return <RouterProvider router={router}></RouterProvider>;
}

export default AppRoutes;
