// @ts-nocheck
import useBookings from "../../../Hooks/useBookings";
import SectionTitle from "../../SectionTitle/SectionTitle";
import { FaEdit } from "react-icons/fa";
import { MdOutlineCancel } from "react-icons/md";
import { MdReviews } from "react-icons/md";
import { GiPayMoney } from "react-icons/gi";

const MyParcels = () => {
  const [booking] = useBookings();
  return (
    <div>
      <SectionTitle heading={"my parcels"}></SectionTitle>
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
              {booking?.map((item) => (
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
