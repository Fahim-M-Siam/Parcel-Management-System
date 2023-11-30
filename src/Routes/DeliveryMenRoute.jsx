// @ts-nocheck
import propTypes from "prop-types";
import useAuth from "../Hooks/useAuth";
import useDeliveryMen from "../Hooks/useDeliveryMen";
import { Navigate, useLocation } from "react-router-dom";
import Lottie from "lottie-react";
import loadingAnimation from "../assets/loadingAnimation.json";

const DeliveryMenRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const [isDeliveryMen, isDeliveryMenLoading] = useDeliveryMen();
  const location = useLocation();

  if (loading || isDeliveryMenLoading) {
    return (
      <div className="w-[400px] flex ml-96 items-center h-screen">
        <Lottie animationData={loadingAnimation}></Lottie>
      </div>
    );
  }
  if (user && isDeliveryMen) {
    return children;
  }
  return <Navigate state={location.pathname} to="/login"></Navigate>;
};
DeliveryMenRoute.propTypes = {
  children: propTypes.node,
};

export default DeliveryMenRoute;
