// @ts-nocheck
import { FcGoogle } from "react-icons/fc";
import toast from "react-hot-toast";
import useAuth from "../Hooks/useAuth";
import { Navigate } from "react-router-dom";
import useAxiosPublic from "../Hooks/useAxiosPublic";

// @ts-nocheck
const SocialLogin = () => {
  const { googleLogin } = useAuth();
  const axiosPublic = useAxiosPublic();
  const handleSocialLogin = (media) => {
    media()
      .then((result) => {
        const userInfo = {
          email: result.user?.email,
          name: result.user?.displayName,
          image: result.user?.photoURL,
          type: "User",
        };
        axiosPublic
          .post("/users", userInfo)
          .then((response) => {
            console.log(response.data);
          })
          .catch((error) => {
            console.error(error);
          });

        toast.success("Registration has been successful");
        Navigate(location?.state ? location.state : "/");
      })
      .catch(() => {
        toast.error("Registration failed");
      });
  };
  return (
    <>
      <div className="divider">Continue With</div>
      <div className="text-center">
        <button
          onClick={() => handleSocialLogin(googleLogin)}
          className="btn btn-outline btn-sm"
        >
          <FcGoogle />
          Google
        </button>
      </div>
    </>
  );
};

export default SocialLogin;
