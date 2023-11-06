import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../../Layouts/Dashboard/Dashboard";
import Main from "../../Layouts/Main/Main";
import Home from "../../Pages/Home/Home";
import LogIn from "../../Pages/Login/LogIn";
import Reviews from "../../Pages/Reviews/Reviews";
import Services from "../../Pages/Services/Services";
import SingUp from "../../Pages/SingUp/SingUp";
import OrderList from "../../Pages/AdminPages/OrderList/OrderList";
import AddService from "../../Pages/AdminPages/AddService/AddService";
import MakeAdmin from "../../Pages/AdminPages/MakeAdmin/MakeAdmin";
import ManageServices from "../../Pages/AdminPages/ManageServices/ManageServices";
import ErrorPage from "../../Pages/Shared/ErrorPage/ErrorPage";
import Book from "../../Pages/Book/Book";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
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
      {
        path: "/dashboard/book",
        element: <Book></Book>,
      },
      {
        path: "/dashboard/order-list",
        element: <OrderList></OrderList>,
      },
      {
        path: "/dashboard/add-service",
        element: <AddService></AddService>,
      },
      {
        path: "/dashboard/make-admin",
        element: <MakeAdmin></MakeAdmin>,
      },
      {
        path: "/dashboard/manage-services",
        element: <ManageServices></ManageServices>,
      },
    ],
  },
]);
