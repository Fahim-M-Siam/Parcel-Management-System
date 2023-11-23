// @ts-nocheck
import SectionTitle from "../SectionTitle/SectionTitle";
import TopDeliveryCard from "./TopDeliveryCard";

const TopDeliveryMen = () => {
  return (
    <div className="my-20">
      <SectionTitle heading={"our top delivery men"}></SectionTitle>
      <div>
        <TopDeliveryCard></TopDeliveryCard>
      </div>
    </div>
  );
};

export default TopDeliveryMen;
