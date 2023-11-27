/* eslint-disable react/prop-types */
// @ts-nocheck
import { IoLocation } from "react-icons/io5";
import { MdCancel } from "react-icons/md";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import toast from "react-hot-toast";

const DeliveryListTable = ({ deliveryBookingItem, refetch, index }) => {
  console.log(deliveryBookingItem);
  const axiosSecure = useAxiosSecure();
  const {
    _id,
    userName,
    receiverName,
    userNumber,
    requestedDate,
    approximateDate,
    receiverNumber,
    locationLatitude,
    locationLongtitude,
  } = deliveryBookingItem;

  // status changing to cancel
  const handleCancel = (_id) => {
    const status = "Canceled";

    const update = {
      status,
    };

    axiosSecure
      .put(`/allDeliveryBookings?id=${_id}`, update)
      .then((res) => {
        if (res.data.modifiedCount > 0) {
          toast.success("Canceled");
        }
        refetch();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  // status changing to cancel
  const handleDelivered = (_id) => {
    const status = "Delivered";

    const update = {
      status,
    };

    axiosSecure
      .put(`/allDeliveryBookings?id=${_id}`, update)
      .then((res) => {
        if (res.data.modifiedCount > 0) {
          toast.success("Delivered");
        }
        refetch();
      })
      .catch((err) => {
        console.log(err);
      });
  };
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
          <div className="modal-box w-11/12 max-w-full h-full">
            <h3 className="font-bold text-lg">Hello!</h3>
            <p className="py-4">Click the button below to close</p>
            <div className="modal-action">
              <form className="-mt-28" method="dialog">
                {/* if there is a button, it will close the modal */}
                <button className="btn btn-outline btn-sm">X</button>
              </form>
            </div>
          </div>
        </dialog>
      </th>
      <th>
        <button
          onClick={() => handleCancel(_id)}
          className="btn btn-outline btn-xs"
        >
          <MdCancel />
          Cancel
        </button>
      </th>
      <th>
        <button
          onClick={() => handleDelivered(_id)}
          className="btn btn-outline btn-xs"
        >
          Deliver
        </button>
      </th>
    </tr>
  );
};

export default DeliveryListTable;
