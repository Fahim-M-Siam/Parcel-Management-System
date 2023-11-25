// @ts-nocheck
import SectionTitle from "../../SectionTitle/SectionTitle";
import AllParcelTable from "./AllParcelTable";

const AllParcel = () => {
  return (
    <div>
      <SectionTitle heading={"All Parcels"}></SectionTitle>
      <div>
        <AllParcelTable></AllParcelTable>
      </div>
    </div>
  );
};

export default AllParcel;
