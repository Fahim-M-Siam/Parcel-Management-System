/* eslint-disable react/prop-types */
// @ts-nocheck
import { MdEditNote } from "react-icons/md";
const AllParcelTable = ({ item }) => {
  const { userName, userNumber, bookingDate, requestedDate, price, status } =
    item;
  return (
    <tr>
      <th></th>
      <td>
        <div className="flex items-center gap-3">
          <div>
            <div className="font-bold">{userName}</div>
          </div>
        </div>
      </td>
      <td>{userNumber}</td>
      <th>{bookingDate}</th>
      <th>{requestedDate}</th>
      <td>{price}</td>
      <th>{status}</th>
      <td>
        <button className="btn bg-[#FF715A] btn-sm">
          <MdEditNote className="text-lg" />
        </button>
      </td>
    </tr>
  );
};

export default AllParcelTable;
