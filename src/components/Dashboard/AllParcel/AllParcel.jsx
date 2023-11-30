// @ts-nocheck
import SectionTitle from "../../SectionTitle/SectionTitle";
import AllParcelTable from "./AllParcelTable";
import useAllBookings from "../../../Hooks/useAllBookings";

const AllParcel = () => {
  const [allBookings, refetch] = useAllBookings();

  return (
    <div>
      <SectionTitle heading={"All Parcels"}></SectionTitle>

      <div className="mb-20">
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
                  refetch={refetch}
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
