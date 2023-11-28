// @ts-nocheck
import useBookings from "../../../Hooks/useBookings";
import SectionTitle from "../../SectionTitle/SectionTitle";
import { FaEdit } from "react-icons/fa";
import { MdOutlineCancel } from "react-icons/md";
import { MdReviews } from "react-icons/md";
import { GiPayMoney } from "react-icons/gi";
import { useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const MyParcels = () => {
  const [booking, refetch] = useBookings();
  const axiosSecure = useAxiosSecure();
  const [selectedStatus, setSelectedStatus] = useState("");
  const filteredBookings = booking.filter((booking) => {
    const selectedStatusLower = selectedStatus.trim().toLowerCase();
    const bookingStatusLower = String(booking.status).trim().toLowerCase();

    if (!selectedStatusLower) {
      return true;
    }

    return bookingStatusLower === selectedStatusLower;
  });

  // cancel booking
  const handleCancelParcel = (item) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await axiosSecure.delete(`/bookings/${item._id}`);
        if (res.data.deletedCount > 0) {
          refetch();
          Swal.fire({
            title: "Canceled!",
            text: `Your ${item.name} has been Canceled.`,
            icon: "success",
          });
        }
      }
    });
  };
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
          <option value="onTheWay">On The Way</option>
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
                    <Link to={`/dashboard/updateParcel/${item._id}`}>
                      <button
                        disabled={item.status !== "Pending"}
                        className="btn btn-outline btn-sm bg-[#FF715A] text-white "
                      >
                        <FaEdit />
                      </button>
                    </Link>
                  </th>
                  <th>
                    <button
                      onClick={() => handleCancelParcel(item)}
                      disabled={item.status !== "Pending"}
                      className="btn btn-outline btn-sm bg-[#FF715A] text-white"
                    >
                      <MdOutlineCancel />
                    </button>
                  </th>
                  <th>
                    {/* Open the modal using document.getElementById('ID').showModal() method */}
                    <button
                      className="btn btn-outline btn-sm bg-[#FF715A] text-white disabled"
                      onClick={() =>
                        document.getElementById("my_modal_1").showModal()
                      }
                    >
                      <MdReviews />
                    </button>
                    <dialog id="my_modal_1" className="modal">
                      <div className="modal-box">
                        <h3 className="font-bold text-lg">Hello!</h3>
                        <p className="py-4">
                          Press ESC key or click the button below to close
                        </p>
                        <div className="modal-action">
                          <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn">Close</button>
                          </form>
                        </div>
                      </div>
                    </dialog>
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
