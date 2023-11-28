/* eslint-disable no-unused-vars */
// @ts-nocheck
import { useLoaderData, useParams } from "react-router-dom";
import SectionTitle from "../../SectionTitle/SectionTitle";
import Lottie from "lottie-react";
import updateParcel from "../../../assets/updateParcel.json";
import { useState } from "react";
import toast from "react-hot-toast";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const UpdateParcel = () => {
  const axiosSecure = useAxiosSecure();
  const { id } = useParams();
  const item = useLoaderData();
  const [totalPrice, setTotalPrice] = useState(0);
  const [updatedParcelWeight, setUpdatedParcelWeight] = useState(0);
  const {
    _id,
    userName,
    email,
    userNumber,
    parcelType,
    price,
    receiverName,
    receiverNumber,
    receiverAddress,
    requestedDate,
    locationLatitude,
    locationLongtitude,
  } = item;

  const handleParcelWeightChange = (event) => {
    const updatedWeight = parseFloat(event.target.value);

    setUpdatedParcelWeight(updatedWeight);

    // Calculate the total price based on the specified formula
    let calculatedPrice;
    if (updatedWeight <= 2) {
      calculatedPrice = updatedWeight * 50;
    } else if (updatedWeight > 2) {
      calculatedPrice = 150;
    } else {
      calculatedPrice = 0; // Set a default value or handle other cases as needed
    }

    setTotalPrice(calculatedPrice);
  };

  const handleUpdateBooking = (event) => {
    event.preventDefault();
    const toastId = toast.loading("Processing..");
    const form = event.target;
    // inputvalues
    const userName = form.userName.value.toLowerCase();
    const email = form.email.value.toLowerCase();
    const userNumber = form.userNumber.value;
    const parcelType = form.parcelType.value.toLowerCase();
    const parcelWeight = parseInt(form.parcelWeight.value);
    const price = parseInt(form.price.value);
    const receiverName = form.receiverName.value.toLowerCase();
    const receiverNumber = parseInt(form.receiverNumber.value);
    const requestedDate = form.requestedDeliveryDate.value;
    const receiverAddress = form.receiverAddress.value.toLowerCase();
    const locationLatitude = parseInt(form.latitude.value);
    const locationLongtitude = parseInt(form.longtitude.value);
    const status = "pending";
    const approximateDate = "will be updated";
    const deliveryMenId = "will be assigned soon";
    const bookingWholeDate = new Date();
    const bookingDate = `${bookingWholeDate.getUTCFullYear()}-${(
      bookingWholeDate.getUTCMonth() + 1
    )
      .toString()
      .padStart(2, "0")}-${bookingWholeDate
      .getDate()
      .toString()
      .padStart(2, "0")}`;

    const updatedBookingItem = {
      userName,
      email,
      userNumber,
      parcelType,
      parcelWeight,
      price,
      receiverName,
      receiverNumber,
      requestedDate,
      receiverAddress,
      locationLatitude,
      locationLongtitude,
      approximateDate,
      deliveryMenId,
      bookingDate,
      status,
    };

    axiosSecure
      .patch(`/bookings/${_id}`, updatedBookingItem)
      .then((res) => {
        const data = res.data;
        if (data.modifiedCount > 0) {
          toast.success("Booked parcel has been updated successfully", {
            id: toastId,
          });
        } else {
          toast.error(data.message, { id: toastId });
        }
      })
      .catch((error) => {
        console.log("Error updating booking item", error, { id: toastId });
      });
  };
  return (
    <div>
      <SectionTitle heading={"update your booking"}></SectionTitle>
      <div>
        <div className="hero min-h-screen ">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="text-center text-gray-700 lg:text-left">
              <h1 className="text-5xl font-bold">Update Your Booking</h1>
              <p className="py-6 w-[500px]">
                Step into a world of convenience with our comprehensive parcel
                booking service. Simplify your shipping experience by
                effortlessly scheduling deliveries for your valuable packages.
                Our user-friendly platform ensures a smooth journey from start
                to finish. Benefit from transparent pricing models, allowing you
                to plan and budget with ease. Real-time tracking capabilities
                keep you informed every step of the way, providing peace of
                mind. With our commitment to reliable and secure deliveries,
                your parcels are in capable hands. Experience the next level of
                convenience—book your parcels today for a stress-free shipping
                experience.
              </p>
              <Lottie
                className="w-[400px] ml-12"
                animationData={updateParcel}
              ></Lottie>
            </div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-black bg-opacity-10">
              <form
                onSubmit={handleUpdateBooking}
                className="card-body bg-black"
              >
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-white">User Name</span>
                  </label>
                  <input
                    className="input input-bordered"
                    type="text"
                    name="userName"
                    defaultValue={userName}
                    readOnly
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-white">User Email</span>
                  </label>
                  <input
                    className="input input-bordered"
                    type="text"
                    name="email"
                    defaultValue={email}
                    readOnly
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-white">Phone Number</span>
                  </label>
                  <input
                    className="input input-bordered"
                    type="text"
                    name="userNumber"
                    placeholder="Your Active Phone Number"
                    defaultValue={userNumber}
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-white">Parcel Type</span>
                  </label>
                  <input
                    type="text"
                    name="parcelType"
                    placeholder="Type of Your Parcel"
                    className="input input-bordered"
                    required
                    defaultValue={parcelType}
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-white">Parcel Weight</span>
                  </label>
                  <input
                    onChange={handleParcelWeightChange}
                    type="number"
                    name="parcelWeight"
                    placeholder="Weight of Your Parcel"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-white">Price</span>
                  </label>
                  <input
                    type="number"
                    name="price"
                    placeholder="Your Total Price"
                    className="input input-bordered"
                    required
                    defaultValue={price}
                    value={totalPrice}
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-white">Receiver Name</span>
                  </label>
                  <input
                    type="text"
                    name="receiverName"
                    placeholder="Receiver's Name"
                    className="input input-bordered"
                    required
                    defaultValue={receiverName}
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-white">
                      Receiver Phone Number
                    </span>
                  </label>
                  <input
                    type="text"
                    name="receiverNumber"
                    placeholder="Receiver's Phone Number"
                    className="input input-bordered"
                    required
                    defaultValue={receiverNumber}
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-white">
                      Receiver Address
                    </span>
                  </label>
                  <input
                    type="text"
                    name="receiverAddress"
                    placeholder="Receiver's Address"
                    className="input input-bordered"
                    required
                    defaultValue={receiverAddress}
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-white">
                      Requested Delivery Date
                    </span>
                  </label>
                  <input
                    type="date"
                    name="requestedDeliveryDate"
                    placeholder="Requested Delivery Date"
                    className="input input-bordered"
                    required
                    defaultValue={requestedDate}
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-white">
                      Delivery Address Latitude
                    </span>
                  </label>
                  <input
                    type="number"
                    name="latitude"
                    placeholder="Delivery Address Latitude"
                    className="input input-bordered"
                    required
                    defaultValue={locationLatitude}
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-white">
                      Delivery Address Longtitude
                    </span>
                  </label>
                  <input
                    type="number"
                    name="longtitude"
                    placeholder="Delivery Address Longtitude"
                    className="input input-bordered"
                    required
                    defaultValue={locationLongtitude}
                  />
                </div>
                <div className="form-control mt-6">
                  <button
                    type="submit"
                    className="btn btn-outline bg-[#FF715A]"
                  >
                    Update Your Booking
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateParcel;
