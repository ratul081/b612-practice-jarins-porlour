import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../../Layouts/Dashboard/Dashboard";
import Main from "../../Layouts/Main/Main";
import Home from "../../Pages/Home/Home";
import LogIn from "../../Pages/Login/LogIn";
import Reviews from "../../Pages/Reviews/Reviews";
import Services from "../../Pages/Services/Services";
import SingUp from "../../Pages/SingUp/SingUp";

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
        element: <Services></Services>,
      },
      {
        path: "/dashboard/review",
        element: <Reviews></Reviews>,
      },
    ],
  },
]);
