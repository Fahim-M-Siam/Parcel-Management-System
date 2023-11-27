// @ts-nocheck
import Lottie from "lottie-react";
import registerAnimation from "../assets/registerAnimation.json";
import toast from "react-hot-toast";
import { useState } from "react";
import { updateProfile } from "firebase/auth";
import SocialLogin from "../components/SocialLogin";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import useAuth from "../Hooks/useAuth";
import { imageUpload } from "../api/utils";
import useAxiosPublic from "../Hooks/useAxiosPublic";

const Register = () => {
  const { createUser, logOut } = useAuth();
  const axiosPublic = useAxiosPublic();
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault();
    const toastId = toast.loading("Registering..");
    const form = event.target;
    // inputvalues
    const name = form.name.value;
    const email = form.email.value.toLowerCase();
    const phoneNumber = form.number.value;
    const type = form.type.value;
    const password = form.password.value;
    const imageFile = form.image.files[0];

    // validations
    if (password.length < 6) {
      toast.error("Password is less than 6 characters");
      return;
    } else if (!/[A-Z]/.test(password)) {
      toast.error("Password don't have a capital letter");
      return;
    } else if (!/[!@#$%^&*()_+{}[\]:;<>,.?~\\-]/.test(password)) {
      toast.error("Password don't have a special character");
      return;
    }

    try {
      const imageData = await imageUpload(imageFile);
      const image = imageData?.data?.display_url;
      // const user = { name, email, image, type };
      // creatingUser
      await createUser(email, password)
        .then((user) => {
          toast.success("Registration has been succesful", { id: toastId });
          logOut();
          // update profile
          updateProfile(user.user, {
            displayName: name,
            photoURL: image,
          }).then(() => {
            toast.success("Profile Updated");
          });
          navigate("/login");
        })
        .catch((error) => {
          toast.error("Registration failed", { id: toastId });
          console.log(error);
        });

      // sendin user information to backend
      axiosPublic
        .post("/users", { name, email, phoneNumber, image, type })
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left mt-28">
          <h1 className="text-5xl font-bold">Register Now!</h1>
          <p className="py-5">
            Experience the Art of Culinary Excellence at TasteHarmony Cafe. From
            our carefully crafted dishes to our warm and inviting atmosphere, we
            are dedicated to creating moments of gastronomic delight that will
            linger in your memory.
          </p>
          <div className="w-[300px]">
            <Lottie animationData={registerAnimation}></Lottie>
          </div>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleSubmit} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Your Name"
                name="name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Your Email"
                name="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Phone Number</span>
              </label>
              <input
                type="number"
                placeholder="Your Active Phone Number"
                name="number"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">User Type</span>
              </label>
              <select
                name="type"
                required
                className="select select-bordered w-full max-w-xs"
              >
                <option disabled selected>
                  Your Type
                </option>
                <option value="DeliveryMen">Delivery Men</option>
                <option value="User">User</option>
              </select>
            </div>
            <div className="form-control relative">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                name="password"
                className="input input-bordered"
                required
              />
              <span
                onClick={() => setShowPassword(!showPassword)}
                className="absolute left-[13.25rem] lg:left-[18rem] top-[3.2rem]"
              >
                {showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
              </span>
            </div>
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
            <div className="form-control mt-6">
              <button type="submit" className="btn btn-outline bg-[#FF715A]">
                Register
              </button>
            </div>
            <div className="flex text-sm">
              <p>Have a account?</p>
              <Link
                to="/login"
                className="link link-hover text-black font-bold"
              >
                Login Now
              </Link>
            </div>
            <SocialLogin></SocialLogin>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
