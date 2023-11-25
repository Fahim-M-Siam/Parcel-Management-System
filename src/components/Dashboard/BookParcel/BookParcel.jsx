/* eslint-disable no-unused-vars */
// @ts-nocheck
import toast from "react-hot-toast";
import useAuth from "../../../Hooks/useAuth";
import SectionTitle from "../../SectionTitle/SectionTitle";
import Lottie from "lottie-react";
import { useState } from "react";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import bookingParcel from "../../../assets/bookingParcel.json";

const BookParcel = () => {
  const { user } = useAuth();
  const [parcelWeight, setParcelWeight] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const axiosPublic = useAxiosPublic();

  const handleParcelWeightChange = (event) => {
    const weight = parseFloat(event.target.value);

    setParcelWeight(weight);

    // Calculate the total price based on the specified formula
    let calculatedPrice;
    if (weight <= 2) {
      calculatedPrice = weight * 50;
    } else if (weight > 2) {
      calculatedPrice = 150;
    } else {
      calculatedPrice = 0; // Set a default value or handle other cases as needed
    }

    setTotalPrice(calculatedPrice);
  };

  const handleBooking = (event) => {
    event.preventDefault();
    const toastId = toast.loading("Processing..");
    const form = event.target;
    // inputvalues
    const userName = form.userName.value.toLowerCase();
    const userEmail = form.userEmail.value.toLowerCase();
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
    // const bookingWholeDate = new Date();
    const bookingWholeDate = new Date();
    const formattedDate = `${bookingWholeDate.getUTCFullYear()}-${(
      bookingWholeDate.getUTCMonth() + 1
    )
      .toString()
      .padStart(2, "0")}-${bookingWholeDate
      .getDate()
      .toString()
      .padStart(2, "0")}`;

    const newBookingItem = {
      userName,
      userEmail,
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
      formattedDate,
    };
    console.log(newBookingItem);

    axiosPublic
      .post("/bookings", newBookingItem)
      .then((res) => {
        const data = res.data;
        if (data.insertedId) {
          toast.success("Successfully Added the Food Item", { id: toastId });
        } else {
          toast.error(data.message, { id: toastId });
        }
      })
      .catch((error) => {
        console.log("Error adding food item:", error, { id: toastId });
      });
  };
  return (
    <div>
      <SectionTitle heading={"book a parcel"}></SectionTitle>
      <div>
        <div className="hero min-h-screen ">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="text-center text-gray-700 lg:text-left">
              <h1 className="text-5xl font-bold">Book Your Parcel with Ease</h1>
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
                animationData={bookingParcel}
              ></Lottie>
            </div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-black bg-opacity-10">
              <form onSubmit={handleBooking} className="card-body bg-black">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-white">User Name</span>
                  </label>
                  <input
                    className="input input-bordered"
                    type="text"
                    name="userName"
                    value={user.displayName}
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
                    name="userEmail"
                    value={user.email}
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
                    value={user?.phoneNumber}
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
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-white">Parcel Weight</span>
                  </label>
                  <input
                    type="number"
                    name="parcelWeight"
                    onChange={handleParcelWeightChange}
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
                    value={totalPrice}
                    readOnly
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
                  />
                </div>
                <div className="form-control mt-6">
                  <button
                    type="submit"
                    className="btn btn-outline bg-[#FF715A]"
                  >
                    Book Parcel
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

export default BookParcel;
