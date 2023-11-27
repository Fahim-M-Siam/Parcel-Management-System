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
import AllParcel from "../components/Dashboard/AllParcel/AllParcel";
import AllUsers from "../components/Dashboard/AllUsers/AllUsers";
import AllDeliveryMen from "../components/Dashboard/AllDeliveryMen/AllDeliveryMen";
import Statistics from "../components/Dashboard/Statistics/Statistics";
import DeliveryList from "../components/Dashboard/DeliveryList/DeliveryList";
import Reviews from "../components/Dashboard/Reviews/Reviews";
import AdminRoute from "./AdminRoute";
import DeliveryMenRoute from "./DeliveryMenRoute";
import UpdateParcel from "../components/Dashboard/Update/UpdateParcel";

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
      // Noraml Users Routes
      {
        path: "myParcels",
        element: <MyParcels></MyParcels>,
      },
      {
        path: "bookParcel",
        element: <BookParcel></BookParcel>,
      },
      {
        path: "updateParcel/:id",
        element: (
          <PrivateRoute>
            <UpdateParcel></UpdateParcel>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/bookings/${params.id}`),
      },
      {
        path: "userProfile",
        element: <UserProfile></UserProfile>,
      },
      // Noraml Users Routes

      // Admin Routes
      {
        path: "allParcel",
        element: (
          <AdminRoute>
            <AllParcel></AllParcel>
          </AdminRoute>
        ),
      },
      {
        path: "allUsers",
        element: (
          <AdminRoute>
            <AllUsers></AllUsers>
          </AdminRoute>
        ),
      },
      {
        path: "allDeliveryMen",
        element: (
          <AdminRoute>
            <AllDeliveryMen></AllDeliveryMen>
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/statistics",
        element: (
          <AdminRoute>
            <Statistics></Statistics>
          </AdminRoute>
        ),
      },
      // Admin Routes

      // DeliveryMen Routes
      {
        path: "deliveryList",
        element: (
          <DeliveryMenRoute>
            <DeliveryList></DeliveryList>
          </DeliveryMenRoute>
        ),
      },
      {
        path: "reviews",
        element: (
          <DeliveryMenRoute>
            <Reviews></Reviews>
          </DeliveryMenRoute>
        ),
      },
      // DeliveryMen Routes
    ],
  },
]);
