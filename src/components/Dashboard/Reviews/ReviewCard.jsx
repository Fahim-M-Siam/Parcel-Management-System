// @ts-nocheck
/* eslint-disable react/prop-types */

import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

// @ts-nocheck
const ReviewCard = ({ review }) => {
  const { userName, userImage, rating, feedback, reviewDate } = review;
  return (
    <div className="w-96 bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={userImage} alt={userName} className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center py-5">
        <h2 className="card-title">{userName}</h2>
        <p>Reviewed Date: {reviewDate}</p>
        <div className="rating">
          <Rating style={{ maxWidth: 180 }} value={rating} readOnly />
        </div>
        <p>{feedback}</p>
      </div>
    </div>
  );
};

export default ReviewCard;
