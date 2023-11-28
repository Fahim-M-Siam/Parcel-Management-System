/* eslint-disable react/prop-types */
// @ts-nocheck
import { IoMan } from "react-icons/io5";
import { RiAdminFill } from "react-icons/ri";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
import useBookingCount from "../../../Hooks/useBookingCount";

const AllUsersTable = ({ user, index, refetch }) => {
  const { email, name, phoneNumber } = user;
  const axiosSecure = useAxiosSecure();
  const [booking] = useBookingCount(email);

  // make admin
  const handleMakeAdmin = (user) => {
    axiosSecure.patch(`/users/admin/${user._id}`).then((res) => {
      if (res.data.modifiedCount > 0) {
        refetch();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${name} is Admin now`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };

  // make deliveryMen
  const handleMakeDeliveryMen = (user) => {
    axiosSecure.patch(`/users/deliveryMen/${user._id}`).then((res) => {
      if (res.data.modifiedCount > 0) {
        refetch();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${name} is DeliveryMen now`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };
  return (
    <tr>
      <th>{index + 1}</th>
      <td>
        <div className="flex items-center gap-3">
          <div>
            <div className="font-bold">{name}</div>
          </div>
        </div>
      </td>
      <td>{phoneNumber}</td>
      <td>{booking?.length}</td>
      <td>
        <button
          onClick={() => handleMakeDeliveryMen(user)}
          className="btn btn-sm btn-outline bg-[#FF715A] text-white"
        >
          <IoMan />
        </button>
      </td>
      <th>
        <button
          onClick={() => handleMakeAdmin(user)}
          className="btn btn-sm btn-outline bg-[#FF715A] text-white"
        >
          <RiAdminFill />
        </button>
      </th>
    </tr>
  );
};

export default AllUsersTable;
