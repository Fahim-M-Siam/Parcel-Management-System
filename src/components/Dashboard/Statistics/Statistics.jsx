// @ts-nocheck
import useAllBookings from "../../../Hooks/useAllBookings";
import SectionTitle from "../../SectionTitle/SectionTitle";
import BookingChart from "./BookingChart";

const Statistics = () => {
  const [allBookings] = useAllBookings();
  return (
    <div>
      <SectionTitle heading={"Statistics"}></SectionTitle>
      <div>
        <div>
          <BookingChart bookings={allBookings}></BookingChart>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
