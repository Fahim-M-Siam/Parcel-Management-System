// @ts-nocheck
import SectionTitle from "./SectionTitle/SectionTitle";
import { CiDeliveryTruck } from "react-icons/ci";
import { IoCheckmarkDoneCircleSharp } from "react-icons/io5";
import { FaUsers } from "react-icons/fa";
import useRegisteredUsers from "../Hooks/useRegisteredUsers";
import useHomeAllBookings from "../Hooks/useHomeAllBookings";
import useAllDelivered from "../Hooks/useAllDelivered";
import CountUp from "react-countup";

const Satistics = () => {
  const [registeredUser] = useRegisteredUsers();
  const [homeAllBookings] = useHomeAllBookings();
  const [allDelivered] = useAllDelivered();
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
            <div className="stat-value">
              <CountUp end={homeAllBookings.length} duration={2} />
            </div>
          </div>

          <div className="stat">
            <div className="stat-figure text-secondary text-4xl">
              <IoCheckmarkDoneCircleSharp />
            </div>
            <div className="stat-title">Parcel Delivered</div>
            <div className="stat-value">
              <CountUp end={allDelivered.length} duration={2} />
            </div>
          </div>

          <div className="stat">
            <div className="stat-figure text-secondary text-4xl">
              <FaUsers />
            </div>
            <div className="stat-title">All Users</div>
            <div className="stat-value">
              <CountUp end={registeredUser.length} duration={2} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Satistics;
