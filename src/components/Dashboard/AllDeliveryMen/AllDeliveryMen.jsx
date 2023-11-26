// @ts-nocheck
import useAllUsers from "../../../Hooks/useAllUsers";
import SectionTitle from "../../SectionTitle/SectionTitle";
import AllDeliveryMenTable from "./AllDeliveryMenTable";

const AllDeliveryMen = () => {
  const [allUsers] = useAllUsers("DeliveryMen");
  return (
    <div>
      <SectionTitle heading={"All Delivery Men"}></SectionTitle>
      <div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Delivery Men Name</th>
                <th>Phone Number</th>
                <th>Parcel Delivered</th>
                <th>Average Review</th>
              </tr>
            </thead>
            <tbody>
              {allUsers?.map((deliveryMen, i) => (
                <AllDeliveryMenTable
                  key={deliveryMen._id}
                  i={i}
                  deliveryMen={deliveryMen}
                ></AllDeliveryMenTable>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllDeliveryMen;
