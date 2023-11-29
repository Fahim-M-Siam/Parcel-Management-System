// @ts-nocheck
import useAuth from "../../../Hooks/useAuth";
import SectionTitle from "../../SectionTitle/SectionTitle";
import ReviewCard from "./ReviewCard";

import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const Reviews = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { data: reviews = [] } = useQuery({
    queryKey: "reviews",
    queryFn: async () => {
      const res = await axiosSecure.get(`/review?email=${user?.email}`);
      return res?.data;
    },
  });

  return (
    <div>
      <SectionTitle heading={"All The Reviews"}></SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-20">
        {reviews?.map((review) => (
          <ReviewCard key={review?._id} review={review}></ReviewCard>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
