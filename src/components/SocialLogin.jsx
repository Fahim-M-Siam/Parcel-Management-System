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
      .then((userCredential) => {
        const user = userCredential.user;

        const isGoogleLogin =
          userCredential.additionalUserInfo?.providerId === "google.com";

        const userType = isGoogleLogin && "User";

        const updatedUser = {
          name: user.displayName,
          email: user.email,
          img: user.photoURL,
          password: "",
          type: userType,
        };

        // axios
        //   .post("https://taste-harmony-cafe-server.vercel.app/users", updatedUser)
        //   .then((response) => {
        //     console.log(response.data);
        //   })
        //   .catch((error) => {
        //     console.error(error);
        //   });

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
