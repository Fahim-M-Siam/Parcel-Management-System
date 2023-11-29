/* eslint-disable react/prop-types */
// @ts-nocheck
import { useState } from "react";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import toast from "react-hot-toast";

const ReviewTwoModal = ({ i, item }) => {
  const axiosPublic = useAxiosPublic();
  const [deliveryMenName, setDeliveryMenName] = useState();
  console.log(deliveryMenName);

  axiosPublic
    .get(`/individualUser?email=${item?.deliveryMenId}`)
    .then((res) => {
      setDeliveryMenName(res.data.name);
    });

  const handleReview = (event) => {
    event.preventDefault();
    const toastId = toast.loading("Giving Review..");
    const form = event.target;
    // inputvalues
    const userName = form.userName.value;
    const userImage = form.userImage.value;
    const deliveryMenId = form.deliveryMenId.value;
    const rating = parseInt(form.rating.value);
    const feedback = form.feedback.value.toLowerCase();
    const reviewGivingDate = new Date();
    const reviewDate = `${reviewGivingDate.getUTCFullYear()}-${(
      reviewGivingDate.getUTCMonth() + 1
    )
      .toString()
      .padStart(2, "0")}-${reviewGivingDate
      .getDate()
      .toString()
      .padStart(2, "0")}`;
    const reviewDetail = {
      userName,
      userImage,
      deliveryMenId,
      rating,
      feedback,
      deliveryMenName,
      reviewDate,
    };

    axiosPublic.post("/review", reviewDetail).then((res) => {
      if (res.data.insertedId) {
        toast.success("Thank You For Your FeedBack", { id: toastId });
      }
    });
  };
  return (
    <>
      <input type="checkbox" id={i + 1} className="modal-toggle" />
      <div className="modal">
        <div className="modal-box w-96 relative">
          <label
            htmlFor={i + 1}
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>

          <form onSubmit={handleReview} className="grid grid-cols-1 gap-3">
            <div className="form-control">
              <label className="label">
                <span className="label-text">User Name</span>
              </label>
              <input
                type="text"
                placeholder={item?.userName}
                name="userName"
                className="input input-bordered"
                required
                defaultValue={item?.userName}
                readOnly
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">User Image</span>
              </label>
              <input
                type="text"
                placeholder={item?.userImage}
                name="userImage"
                className="input input-bordered"
                required
                defaultValue={item?.userImage}
                readOnly
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">DeliveryMen ID</span>
              </label>
              <input
                type="text"
                placeholder={item?.deliveryMenId}
                name="deliveryMenId"
                className="input input-bordered"
                required
                defaultValue={item?.deliveryMenId}
                readOnly
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Rating Out Of 5</span>
              </label>
              <input
                type="number"
                placeholder="Input Your Rating"
                name="rating"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Any Feedback?</span>
              </label>
              <textarea
                type="text"
                className="textarea textarea-bordered"
                name="feedback"
                placeholder="Tell Your Feedback"
                required
              ></textarea>
            </div>

            <button type="submit" className="btn btn-outline btn-sm mt-4">
              Review
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ReviewTwoModal;
