// @ts-nocheck
import SectionTitle from "./SectionTitle/SectionTitle";
import { CiDeliveryTruck } from "react-icons/ci";
import { IoCheckmarkDoneCircleSharp } from "react-icons/io5";
import { FaUsers } from "react-icons/fa";

const Satistics = () => {
  return (
    <div className="my-20">
      <SectionTitle heading={"Statistics"}></SectionTitle>
      <div>
        <div className="stats shadow w-full">
          <div className="stat">
            <div className="stat-figure text-secondary text-4xl">
              <CiDeliveryTruck />
            </div>
            <div className="stat-title">Parcel Booking</div>
            <div className="stat-value">$31</div>
          </div>

          <div className="stat">
            <div className="stat-figure text-secondary text-4xl">
              <IoCheckmarkDoneCircleSharp />
            </div>
            <div className="stat-title">Parcel Delivered</div>
            <div className="stat-value">4,200</div>
          </div>

          <div className="stat">
            <div className="stat-figure text-secondary text-4xl">
              <FaUsers />
            </div>
            <div className="stat-title">All Users</div>
            <div className="stat-value">1,200</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Satistics;
