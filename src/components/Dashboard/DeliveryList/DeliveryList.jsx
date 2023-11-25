// @ts-nocheck
import SectionTitle from "../../SectionTitle/SectionTitle";
import DeliveryListTable from "./DeliveryListTable";

const DeliveryList = () => {
  return (
    <div>
      <SectionTitle heading={"All Delivery"}></SectionTitle>
      <div>
        <DeliveryListTable></DeliveryListTable>
      </div>
    </div>
  );
};

export default DeliveryList;
