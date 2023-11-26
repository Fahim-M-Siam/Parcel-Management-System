// @ts-nocheck
import useAuth from "../../../Hooks/useAuth";
import SectionTitle from "../../SectionTitle/SectionTitle";

const UserProfile = () => {
  const { user } = useAuth();
  console.log(user);
  return (
    <div>
      <SectionTitle heading={"Profile"}></SectionTitle>
      <div className="flex justify-center">
        <div className="avatar mt-20">
          <div className="w-80 rounded">
            <img src={user.photoURL} />
          </div>
        </div>
      </div>
      <div className="text-center mt-10">
        <input type="file" className="file-input w-full max-w-xs" />
      </div>
      <div className="text-center">
        <button className="btn btn-outline mt-5">Update</button>
      </div>
    </div>
  );
};

export default UserProfile;
