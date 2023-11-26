// @ts-nocheck
import { useState } from "react";
import SectionTitle from "../../SectionTitle/SectionTitle";
import AllParcelTable from "./AllParcelTable";
import useAllBookings from "../../../Hooks/useAllBookings";
import useBookingsByDateRange from "../../../Hooks/useBookingsByDateRange";

const AllParcel = () => {
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [allBookings] = useAllBookings();
  const [bookings, refetchBookings] = useBookingsByDateRange(fromDate, toDate);

  const handleSearch = () => {
    refetchBookings(fromDate, toDate);
  };

  const mergedBookings = fromDate || toDate ? bookings : allBookings;

  return (
    <div>
      <SectionTitle heading={"All Parcels"}></SectionTitle>

      <div className="mb-4">
        <label
          htmlFor="fromDate"
          className="block text-sm font-medium text-gray-700"
        >
          From Date
        </label>
        <input
          type="date"
          id="fromDate"
          name="fromDate"
          value={fromDate}
          onChange={(e) => setFromDate(e.target.value)}
          className="mt-1 p-2 border rounded-md w-full"
        />
      </div>

      <div className="mb-4">
        <label
          htmlFor="toDate"
          className="block text-sm font-medium text-gray-700"
        >
          To Date
        </label>
        <input
          type="date"
          id="toDate"
          name="toDate"
          value={toDate}
          onChange={(e) => setToDate(e.target.value)}
          className="mt-1 p-2 border rounded-md w-full"
        />
      </div>

      <button
        onClick={handleSearch}
        className="bg-blue-500 text-white px-4 py-2 rounded-md"
      >
        Search
      </button>

      <div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>User Name</th>
                <th>Users Phone</th>
                <th>Booking Date</th>
                <th>Requested Delivery Date</th>
                <th>Cost</th>
                <th>Status</th>
                <th>Manage</th>
              </tr>
            </thead>
            <tbody>
              {mergedBookings?.map((item, i) => (
                <AllParcelTable
                  modalNumber={i + 1}
                  key={item._id}
                  item={item}
                ></AllParcelTable>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllParcel;
