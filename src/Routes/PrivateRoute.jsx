// @ts-nocheck
import propTypes from "prop-types";
import loadingAnimation from "../assets/loadingAnimation.json";
import useAuth from "../Hooks/useAuth";
import { Navigate, useLocation } from "react-router-dom";
import Lottie from "lottie-react";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation();

  if (loading) {
    return (
      <div className="w-[400px] flex ml-96 items-center h-screen">
        <Lottie animationData={loadingAnimation}></Lottie>
      </div>
    );
  }
  if (user) {
    return children;
  }
  return <Navigate state={location.pathname} to="/login"></Navigate>;
};

PrivateRoute.propTypes = {
  children: propTypes.node,
};
export default PrivateRoute;
