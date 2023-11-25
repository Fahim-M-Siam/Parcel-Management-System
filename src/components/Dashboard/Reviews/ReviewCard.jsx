// @ts-nocheck
const ReviewCard = () => {
  return (
    <div className="w-96 bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img
          src="https://i.ibb.co/ng9RnQm/user.jpg"
          alt="Shoes"
          className="rounded-xl"
        />
      </figure>
      <div className="card-body items-center text-center py-5">
        <h2 className="card-title">Nabil</h2>
        <p>Reviewed Date: 10.11.2023</p>
        <div className="rating">
          <input type="radio" name="rating-1" className="mask mask-star" />
          <input
            type="radio"
            name="rating-1"
            className="mask mask-star"
            checked
          />
          <input type="radio" name="rating-1" className="mask mask-star" />
          <input type="radio" name="rating-1" className="mask mask-star" />
          <input type="radio" name="rating-1" className="mask mask-star" />
        </div>

        <p>FeedBack Text</p>
      </div>
    </div>
  );
};

export default ReviewCard;
