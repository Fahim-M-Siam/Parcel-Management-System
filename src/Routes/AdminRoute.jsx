// @ts-nocheck
import propTypes from "prop-types";
import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../Hooks/useAdmin";
import useAuth from "../Hooks/useAuth";
import loadingAnimation from "../assets/loadingAnimation.json";
import Lottie from "lottie-react";

const AdminRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const [isAdmin, isAdminLoading] = useAdmin();
  const location = useLocation();

  if (loading || isAdminLoading) {
    return (
      <div className="w-[400px] flex ml-96 items-center h-screen">
        <Lottie animationData={loadingAnimation}></Lottie>
      </div>
    );
  }
  if (user && isAdmin) {
    return children;
  }
  return <Navigate state={location.pathname} to="/login"></Navigate>;
};
AdminRoute.propTypes = {
  children: propTypes.node,
};
export default AdminRoute;
