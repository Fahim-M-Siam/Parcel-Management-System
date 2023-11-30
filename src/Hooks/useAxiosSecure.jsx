// @ts-nocheck
import axios from "axios";
import useAuth from "./useAuth";
import { useNavigate } from "react-router-dom";

const axiosSecure = axios.create({
  baseURL: "https://ship-ease-server.vercel.app",
});

const useAxiosSecure = () => {
  const { logOut } = useAuth();
  const navigate = useNavigate();

  axiosSecure.interceptors.request.use(
    function (config) {
      const token = localStorage.getItem("Access-Token");
      config.headers.authorization = `Bearer ${token}`;
      return config;
    },
    function (error) {
      // Do something with request error
      return Promise.reject(error);
    }
  );

  // interceptor 401 and 403 status
  axiosSecure.interceptors.request.use(
    function (response) {
      return response;
    },
    async (error) => {
      const status = error.response.status;
      console.log("Status Error in the interceptor", status);
      // for 401 and 403 users, move the users to login page and logout them
      if (status === 401) {
        await logOut();
        navigate("/login");
      }
      return Promise.reject(error);
    }
  );

  return axiosSecure;
};

export default useAxiosSecure;
// || status === 403
