// @ts-nocheck
import SectionTitle from "../../SectionTitle/SectionTitle";
import AllUsersTable from "./AllUsersTable";

const AllUsers = () => {
  return (
    <div>
      <SectionTitle heading={"All users"}></SectionTitle>
      <div>
        <AllUsersTable></AllUsersTable>
      </div>
    </div>
  );
};

export default AllUsers;
