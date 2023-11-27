// @ts-nocheck
import useAllUsers from "../../../Hooks/useAllUsers";
import SectionTitle from "../../SectionTitle/SectionTitle";
import AllUsersTable from "./AllUsersTable";

const AllUsers = () => {
  const [users, refetch] = useAllUsers("User");
  return (
    <div>
      <SectionTitle heading={"All users"}></SectionTitle>
      <div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>User Name</th>
                <th>Users Phone</th>
                <th>Parcel Booked</th>
                <th>Make Delivery Men</th>
                <th>Make Admin</th>
              </tr>
            </thead>
            <tbody>
              {users?.map((user, index) => (
                <AllUsersTable
                  key={user._id}
                  user={user}
                  index={index}
                  refetch={refetch}
                ></AllUsersTable>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllUsers;
