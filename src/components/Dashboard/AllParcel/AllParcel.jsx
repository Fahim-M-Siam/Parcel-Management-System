// @ts-nocheck
import SectionTitle from "../../SectionTitle/SectionTitle";
import AllParcelTable from "./AllParcelTable";
import useAllBookings from "../../../Hooks/useAllBookings";

const AllParcel = () => {
  const [allBookings] = useAllBookings();

  return (
    <div>
      <SectionTitle heading={"All Parcels"}></SectionTitle>

      <div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>User Name</th>
                <th>Users Phone</th>
                <th>Booking Date</th>
                <th>Requested Delivery Date</th>
                <th>Cost</th>
                <th>Status</th>
                <th>Manage</th>
              </tr>
            </thead>
            <tbody>
              {allBookings?.map((item, i) => (
                <AllParcelTable
                  modalNumber={i + 1}
                  key={item._id}
                  item={item}
                ></AllParcelTable>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllParcel;
