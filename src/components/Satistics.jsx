// @ts-nocheck
import SectionTitle from "./SectionTitle/SectionTitle";
import { CiDeliveryTruck } from "react-icons/ci";
import { IoCheckmarkDoneCircleSharp } from "react-icons/io5";
import { FaUsers } from "react-icons/fa";
import CountUp from "react-countup";
import useRegisteredUsers from "../Hooks/useRegisteredUsers";
import useHomeAllBookings from "../Hooks/useHomeAllBookings";
import useAllDelivered from "../Hooks/useAllDelivered";
import { useInView } from "react-intersection-observer";

const Statistics = () => {
  const [registeredUser] = useRegisteredUsers();
  const [homeAllBookings] = useHomeAllBookings();
  const [allDelivered] = useAllDelivered();

  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  return (
    <div className="my-20" ref={ref}>
      <SectionTitle heading={"Statistics"}></SectionTitle>
      {inView && (
        <div>
          <div className="stats shadow w-full">
            <div className="stat">
              <div className="stat-figure text-secondary text-4xl">
                <CiDeliveryTruck />
              </div>
              <div className="stat-title">Parcel Booking</div>
              <div className="stat-value">
                <CountUp end={homeAllBookings.length} />
              </div>
            </div>

            <div className="stat">
              <div className="stat-figure text-secondary text-4xl">
                <IoCheckmarkDoneCircleSharp />
              </div>
              <div className="stat-title">Parcel Delivered</div>
              <div className="stat-value">
                <CountUp end={allDelivered.length} />
              </div>
            </div>

            <div className="stat">
              <div className="stat-figure text-secondary text-4xl">
                <FaUsers />
              </div>
              <div className="stat-title">All Users</div>
              <div className="stat-value">
                <CountUp end={registeredUser.length} />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Statistics;
