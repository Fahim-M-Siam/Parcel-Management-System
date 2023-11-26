/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
// @ts-nocheck

import { MdEditNote } from "react-icons/md";

const Modal = ({ item, modalId }) => {
  const { userNumber } = item;
  return (
    <div>
      {/* You can open the modal using document.getElementById('ID').showModal() method */}
      <button
        className="btn bg-[#FF715A] btn-sm"
        onClick={() => document.getElementById(modalId).showModal()}
      >
        <MdEditNote className="text-lg" />
      </button>
      <dialog id={modalId} className="modal">
        <div className="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-lg">{userNumber}!</h3>
          <p className="py-4">Press ESC key or click on ✕ button to close</p>
        </div>
      </dialog>
    </div>
  );
};

export default Modal;
