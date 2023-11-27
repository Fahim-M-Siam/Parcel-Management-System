/* eslint-disable react/prop-types */
// @ts-nocheck

import { MdEditNote } from "react-icons/md";
import Modal from "../../Modal";
const AllParcelTable = ({ modalNumber, item, refetch }) => {
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
        <label
          htmlFor={`modal-${modalNumber}`}
          className="btn bg-[#FF715A] btn-sm"
        >
          <MdEditNote className="text-lg" />
        </label>

        <Modal modalId={modalNumber} item={item} refetch={refetch}></Modal>
      </td>
    </tr>
  );
};

export default AllParcelTable;
