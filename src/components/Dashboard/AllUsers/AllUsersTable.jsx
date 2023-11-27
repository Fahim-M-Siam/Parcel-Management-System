/* eslint-disable react/prop-types */
// @ts-nocheck
import { IoMan } from "react-icons/io5";
import { RiAdminFill } from "react-icons/ri";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";

const AllUsersTable = ({ user, index, refetch }) => {
  const { name, phoneNumber } = user;
  const axiosSecure = useAxiosSecure();

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
      <td>0</td>
      <td>
        <button className="btn btn-sm btn-outline bg-[#FF715A] text-white">
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
