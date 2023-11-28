/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
// @ts-nocheck

import { MdEditNote } from "react-icons/md";
import useAllUsers from "../Hooks/useAllUsers";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import toast from "react-hot-toast";

const Modal = ({ item, modalId, refetch }) => {
  const { _id } = item;
  const [allUsers] = useAllUsers("DeliveryMen");
  const axiosSecure = useAxiosSecure();
  const handleAssign = (event) => {
    event.preventDefault();
    const form = event.target;
    // inputvalues
    const deliverMenId = form.deliveryMenId.value;
    const approxDate = form.approxDate.value;
    const status = "On The Way";
    console.log(approxDate);

    const update = {
      deliverMenId,
      approxDate,
      status,
    };

    // axiosSecure
    //   .put(`/allBookings?id=${_id}`, update)
    //   .then((res) => {
    //     if (res.data.modifiedCount > 0) {
    //       toast.success("Assigned");
    //     }
    //     refetch();
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  };
  return (
    <div>
      <>
        <input
          type="checkbox"
          id={`modal-${modalId}`}
          className="modal-toggle"
        />
        <div className="modal">
          <div className="modal-box w-96 relative">
            <label
              htmlFor={`modal-${modalId}`}
              className="btn btn-sm btn-circle absolute right-2 top-2"
            >
              ✕
            </label>

            <form onSubmit={handleAssign} className="grid grid-cols-1 gap-3">
              <h2>{_id}</h2>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Choose Delivery Men</span>
                </label>
                <select
                  name="deliveryMenId"
                  className="select select-bordered w-full max-w-xs"
                >
                  <option disabled selected>
                    Choose Delivery Men
                  </option>
                  {allUsers?.map((deliveryMen) => (
                    <option key={deliveryMen?._id} value={deliveryMen?.email}>
                      {deliveryMen?.name} - {deliveryMen?._id}
                    </option>
                  ))}
                </select>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Approximate Delivery Date</span>
                </label>
                <input
                  type="date"
                  placeholder="Your Active Phone Number"
                  name="approxDate"
                  className="input input-bordered"
                  required
                />
              </div>
              <button className="btn btn-outline btn-sm mt-4">Assign</button>
            </form>
          </div>
        </div>
      </>
    </div>
  );
};

export default Modal;
