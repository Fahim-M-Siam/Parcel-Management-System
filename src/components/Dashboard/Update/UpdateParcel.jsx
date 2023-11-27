// @ts-nocheck
import { useLoaderData, useParams } from "react-router-dom";
import SectionTitle from "../../SectionTitle/SectionTitle";

const UpdateParcel = () => {
  const { id } = useParams();
  console.log(id);
  const item = useLoaderData();
  console.log(item);
  return (
    <div>
      <SectionTitle heading={"update your booking"}></SectionTitle>
    </div>
  );
};

export default UpdateParcel;
