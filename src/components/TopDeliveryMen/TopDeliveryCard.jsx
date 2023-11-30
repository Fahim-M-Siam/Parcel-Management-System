/* eslint-disable react/prop-types */
// @ts-nocheck
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
const TopDeliveryCard = ({ deliveryMen }) => {
  const { image, name, deliveredCount, averageRating } = deliveryMen;
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={image} alt="Shoes" className="rounded-xl h-[300px]" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{name}</h2>
        <p>Parcel Delivered: {deliveredCount}</p>

        <div>
          <div className="rating">
            <Rating
              style={{ maxWidth: 180 }}
              value={averageRating ? averageRating : 0}
              readOnly
            />
            <span className="mt-2 ml-2 font-bold">
              ({averageRating ? averageRating : 0})
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopDeliveryCard;
