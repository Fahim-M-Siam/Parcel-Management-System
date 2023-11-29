// @ts-nocheck
import useDeliveryBookingList from "../../../Hooks/useDeliveryBookingList";
import SectionTitle from "../../SectionTitle/SectionTitle";
import DeliveryListTable from "./DeliveryListTable";

const DeliveryList = () => {
  const [deliveryBooking, refetch] = useDeliveryBookingList();

  return (
    <div>
      <SectionTitle heading={"All Delivery"}></SectionTitle>
      <div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>
                  <h2>{deliveryBooking.length}</h2>
                </th>
                <th>Booked User Name</th>
                <th>Receiver Name</th>
                <th>Booked User Phone</th>
                <th>Requested Delivery Date</th>
                <th>Approximate Delivery Date</th>
                <th>Receiver Phone</th>
                <th>Location</th>
                <th>Cancel</th>
                <th>Deliver</th>
              </tr>
            </thead>
            <tbody>
              {deliveryBooking?.map((deliveryBookingItem, index) => (
                <DeliveryListTable
                  key={deliveryBookingItem._id}
                  deliveryBookingItem={deliveryBookingItem}
                  refetch={refetch}
                  index={index}
                ></DeliveryListTable>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DeliveryList;
