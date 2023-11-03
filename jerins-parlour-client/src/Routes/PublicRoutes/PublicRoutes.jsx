import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layouts/Main/Main";
import Home from "../../Pages/Home/Home";
import LogIn from "../../Pages/Login/LogIn";
import SingUp from "../../Pages/SingUp/SingUp";
import Dashboard from "../../Layouts/Dashboard/Dashboard";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <LogIn></LogIn>,
      },
      {
        path: "/sing-up",
        element: <SingUp></SingUp>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <Dashboard></Dashboard>,
    children: [
      {
        path: "/dashboard",
      },
    ],
  },
]);
