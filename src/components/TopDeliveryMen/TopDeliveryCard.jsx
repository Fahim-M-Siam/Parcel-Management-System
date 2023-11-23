// @ts-nocheck
import deliveryMan from "../../../public/images/testTopDeliveryMen.png";
const TopDeliveryCard = () => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={deliveryMan} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">Fahim Mohammad Siam</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <p>Parcel Delivered: 10</p>
        <div>
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
        </div>
      </div>
    </div>
  );
};

export default TopDeliveryCard;
