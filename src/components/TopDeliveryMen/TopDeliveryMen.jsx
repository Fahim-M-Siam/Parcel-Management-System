// @ts-nocheck
import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../SectionTitle/SectionTitle";
import TopDeliveryCard from "./TopDeliveryCard";
import useAxiosPublic from "../../Hooks/useAxiosPublic";

const TopDeliveryMen = () => {
  const axiosPublic = useAxiosPublic();
  const { data: topDeliveryMens = [], refetch } = useQuery({
    queryKey: ["topDeliveryMens"],
    queryFn: async () => {
      const res = await axiosPublic.get("/topDeliveryMen");
      return res?.data;
    },
  });
  console.log(topDeliveryMens);

  return (
    <div className="my-20">
      <SectionTitle heading={"our top delivery men"}></SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {topDeliveryMens?.map((deliveryMen) => (
          <TopDeliveryCard
            key={deliveryMen._id}
            deliveryMen={deliveryMen}
          ></TopDeliveryCard>
        ))}
      </div>
    </div>
  );
};

export default TopDeliveryMen;
