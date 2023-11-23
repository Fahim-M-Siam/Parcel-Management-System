// @ts-nocheck
import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import MainLayout from "../Layout/MainLayout";
import Register from "../Pages/Register";
import Login from "../Pages/Login";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
    ],
  },
]);
