// @ts-nocheck
import useBookings from "../../../Hooks/useBookings";
import SectionTitle from "../../SectionTitle/SectionTitle";
import { FaEdit } from "react-icons/fa";
import { MdOutlineCancel } from "react-icons/md";
import { MdReviews } from "react-icons/md";
import { GiPayMoney } from "react-icons/gi";
import { useState } from "react";

const MyParcels = () => {
  const [booking] = useBookings();
  const [selectedStatus, setSelectedStatus] = useState("");
  const filteredBookings = booking.filter((booking) => {
    if (!selectedStatus) {
      return true;
    }
    return booking.status === selectedStatus;
  });
  return (
    <div>
      <SectionTitle heading={"my parcels"}></SectionTitle>
      <div className="ml-20 my-20 btn btn-sm bg-[#FF715A]">
        <label htmlFor="statusFilter">Filter by Status:</label>
        <select
          id="statusFilter"
          value={selectedStatus}
          onChange={(e) => setSelectedStatus(e.target.value)}
        >
          <option value="">All</option>
          <option value="pending">Pending</option>
          <option value="onTheWay">On the Way</option>
          <option value="delivered">Delivered</option>
          <option value="canceled">Canceled</option>
        </select>
      </div>
      <div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Parcel Type</th>
                <th>Requested Delivery Date</th>
                <th>Approximate Delivery Date</th>
                <th>Delivery Men ID</th>
                <th>Booking Status</th>
                <th>
                  <button>Update</button>
                </th>
                <th>
                  <button>Cancel</button>
                </th>
                <th>
                  <button>Review</button>
                </th>
                <th>
                  <button>Pay</button>
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredBookings?.map((item) => (
                <tr key={item._id}>
                  <th></th>
                  <td>
                    <div className="flex items-center gap-3">
                      <td>{item.parcelType}</td>
                    </div>
                  </td>
                  <td>{item.requestedDate}</td>
                  <td>{item.approximateDate}</td>
                  <td>{item.deliveryMenId}</td>
                  <td>{item.status}</td>
                  <th>
                    <button
                      disabled={item.status !== "pending"}
                      className="btn btn-outline btn-sm bg-[#FF715A] text-white "
                    >
                      <FaEdit />
                    </button>
                  </th>
                  <th>
                    <button
                      disabled={item.status !== "pending"}
                      className="btn btn-outline btn-sm bg-[#FF715A] text-white"
                    >
                      <MdOutlineCancel />
                    </button>
                  </th>
                  <th>
                    <button className="btn btn-outline btn-sm bg-[#FF715A] text-white disabled">
                      <MdReviews />
                    </button>
                  </th>
                  <th>
                    <button className="btn btn-outline btn-sm bg-[#FF715A] text-white">
                      <GiPayMoney />
                    </button>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyParcels;
