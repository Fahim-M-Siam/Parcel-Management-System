// @ts-nocheck
import toast from "react-hot-toast";
import useAuth from "../../../Hooks/useAuth";
import SectionTitle from "../../SectionTitle/SectionTitle";
import { imageUpload } from "../../../api/utils";
import { updateProfile } from "firebase/auth";

const UserProfile = () => {
  const { user } = useAuth();
  const handleUserImageUpdate = async (event) => {
    event.preventDefault();
    const toastId = toast.loading("Updating Profile Picture..");
    const form = event.target;
    const imageFile = form.image.files[0];

    try {
      const imageData = await imageUpload(imageFile);
      const image = imageData?.data?.display_url;
      // update profile
      updateProfile(user, {
        photoURL: image,
      }).then(() => {
        toast.success("Profile Picture Updated Succesfully", { id: toastId });
        window.location.reload();
      });
    } catch (err) {
      console.log(err);
    }
  };
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
      <form onSubmit={handleUserImageUpdate} className="flex justify-center">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Select Image</span>
          </label>
          <input
            type="file"
            placeholder="image"
            name="image"
            required
            accept="image/*"
            id="image"
          />
        </div>
        <div className="text-center">
          <button type="submit" className="btn btn-outline btn-sm mt-8">
            Update
          </button>
        </div>
      </form>
    </div>
  );
};

export default UserProfile;
