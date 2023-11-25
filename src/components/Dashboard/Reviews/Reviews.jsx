// @ts-nocheck
import SectionTitle from "../../SectionTitle/SectionTitle";
import ReviewCard from "./ReviewCard";

const Reviews = () => {
  return (
    <div>
      <SectionTitle heading={"All The Reviews"}></SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-20">
        <ReviewCard></ReviewCard>
      </div>
    </div>
  );
};

export default Reviews;
