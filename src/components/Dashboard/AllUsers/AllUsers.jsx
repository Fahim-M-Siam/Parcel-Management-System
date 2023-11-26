// @ts-nocheck
import useAllUsers from "../../../Hooks/useAllUsers";
import SectionTitle from "../../SectionTitle/SectionTitle";
import AllUsersTable from "./AllUsersTable";

const AllUsers = () => {
  const [users] = useAllUsers("User");
  return (
    <div>
      <SectionTitle heading={"All users"}></SectionTitle>
      <div>
        <h2>{users.length}</h2>
        <AllUsersTable></AllUsersTable>
      </div>
    </div>
  );
};

export default AllUsers;
