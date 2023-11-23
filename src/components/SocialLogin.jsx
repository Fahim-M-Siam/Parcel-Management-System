// @ts-nocheck
import { FcGoogle } from "react-icons/fc";
import toast from "react-hot-toast";
import useAuth from "../Hooks/useAuth";
import { Navigate } from "react-router-dom";

// @ts-nocheck
const SocialLogin = () => {
  const { googleLogin } = useAuth();
  const handleSocialLogin = (media) => {
    media()
      .then(() => {
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
