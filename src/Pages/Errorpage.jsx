// @ts-nocheck
import Lottie from "lottie-react";
import { NavLink } from "react-router-dom";
import errorpageAnimation from "../assets/errorpageAnimation.json";

const Errorpage = () => {
  return (
    <div className="text-center mt-40 lg:mt-40">
      <Lottie
        className="w-[400px] ml-[760px]"
        animationData={errorpageAnimation}
      ></Lottie>
      <h2 className="mt-3 text-6xl">
        This Page Does Not <span className="text-6xl font-bold">Exist</span>
      </h2>
      <p className="mt-5 text-2xl font-semibold">
        The page you are looking for cannot be found
      </p>
      <NavLink to="/">
        <button className="btn btn-outline bg-[#FF715A] text-white mt-5">
          Go Back
        </button>
      </NavLink>
    </div>
  );
};

export default Errorpage;
