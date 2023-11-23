// @ts-nocheck
import { Link } from "react-router-dom";
import "../Banner/Banner.css";

const Banner = () => {
  return (
    <div className="hero bg-base-200 h-[400px] banner mb-20">
      <div className="overlay">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-3xl font-bold text-white mt-16">
              Welcome to Ship Ease
            </h1>
            <div className="mt-4">
              <input
                type="text"
                placeholder="Search Here"
                className="input input-bordered w-full max-w-xs"
              />
            </div>
            <p className="py-6 text-sm text-white">
              ShipEase is a cutting-edge parcel delivery app designed to
              streamline and simplify your shipping experience. Whether you're a
              sender looking for swift and reliable parcel delivery or a
              recipient eager to track your shipments seamlessly, ShipEase has
              you covered.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
