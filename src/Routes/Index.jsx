// @ts-nocheck
import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import MainLayout from "../Layout/MainLayout";
import Register from "../Pages/Register";
import Login from "../Pages/Login";
import Errorpage from "../Pages/Errorpage";
import Dashboard from "../Layout/Dashboard";
import MyParcels from "../components/Dashboard/MyParcels/MyParcels";
import BookParcel from "../components/Dashboard/BookParcel/BookParcel";
import UserProfile from "../components/Dashboard/userProfile/UserProfile";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <Errorpage></Errorpage>,
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
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <Dashboard></Dashboard>
      </PrivateRoute>
    ),
    children: [
      {
        path: "myParcels",
        element: <MyParcels></MyParcels>,
      },
      {
        path: "bookParcel",
        element: <BookParcel></BookParcel>,
      },
      {
        path: "userProfile",
        element: <UserProfile></UserProfile>,
      },
    ],
  },
]);
