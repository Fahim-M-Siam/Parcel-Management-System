/* eslint-disable react/jsx-key */
// @ts-nocheck
import { RiSecurePaymentFill } from "react-icons/ri";
import { FaShippingFast } from "react-icons/fa";
import { BsStack } from "react-icons/bs";
import SectionTitle from "./SectionTitle/SectionTitle";

const Features = () => {
  return (
    <div className="mb-20">
      <SectionTitle heading={"Our Features"}></SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure>
            <RiSecurePaymentFill className="text-7xl" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Secure Parcel Handling</h2>
            <p>
              Experience peace of mind knowing that ShipEase prioritizes the
              safety and security of your parcels. Our advanced tracking systems
              and secure handling protocols ensure that your shipments are in
              safe hands from pickup to delivery.
            </p>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure>
            <FaShippingFast className="text-7xl" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Super Fast Delivery</h2>
            <p>
              Need it fast? ShipEase offers lightning-fast delivery services,
              ensuring that your parcels reach their destination with speed and
              efficiency. Enjoy the convenience of express shipping without
              compromising on the safety and reliability of your shipments.
            </p>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure>
            <BsStack className="text-7xl" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Effortless Parcel Management</h2>
            <p>
              Simplify your parcel management with ShipEases user-friendly app
              interface. Easily organize, track, and manage your shipments in
              one place. Enjoy a seamless and hassle-free experience for all
              your shipping needs.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
