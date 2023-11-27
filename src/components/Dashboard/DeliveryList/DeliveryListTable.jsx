/* eslint-disable react/prop-types */
// @ts-nocheck
import { IoLocation } from "react-icons/io5";
import { MdCancel } from "react-icons/md";

const DeliveryListTable = ({ deliveryBookingItem, refetch, index }) => {
  const {
    userName,
    receiverName,
    userNumber,
    requestedDate,
    approximateDate,
    receiverNumber,
    locationLatitude,
    locationLongtitude,
  } = deliveryBookingItem;
  return (
    <tr>
      <th>{index + 1}</th>
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">{userName}</div>
        </div>
      </td>
      <td>{receiverName}</td>
      <td>{userNumber}</td>
      <td>{requestedDate}</td>
      <td>{approximateDate}</td>
      <td>{receiverNumber}</td>
      <th>
        {/* You can open the modal using document.getElementById('ID').showModal() method */}
        <button
          className="btn btn-outline btn-xs"
          onClick={() => document.getElementById("my_modal_4").showModal()}
        >
          <IoLocation />
          Location
        </button>
        <dialog id="my_modal_4" className="modal">
          <div className="modal-box w-11/12 max-w-5xl">
            <h3 className="font-bold text-lg">Hello!</h3>
            <p className="py-4">Click the button below to close</p>
            <div className="modal-action">
              <form method="dialog">
                {/* if there is a button, it will close the modal */}
                <button className="btn">Close</button>
              </form>
            </div>
          </div>
        </dialog>
      </th>
      <th>
        <button className="btn btn-outline btn-xs">
          <MdCancel />
          Cancel
        </button>
      </th>
      <th>
        <button className="btn btn-outline btn-xs">Deliver</button>
      </th>
    </tr>
  );
};

export default DeliveryListTable;
