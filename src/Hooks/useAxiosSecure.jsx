// @ts-nocheck
import axios from "axios";

const axiosSecure = axios.create({
  baseURL: "http://localhost:5000",
});

const useAxiosSecure = () => {
  axiosSecure.interceptors.request.use(
    function (config) {
      const token = localStorage.getItem("Access-Token");
      config.headers.authorization = `Bearer ${token}`;
      return config;
    },
    function (error) {
      // TODO
      return Promise.reject(error);
    }
  );

  // interceptor 401 and 403 status
  axiosSecure.interceptors.response.use(
    function (response) {
      return response;
    },
    (error) => {
      const status = error.response.status;
      console.log("Status error in the interceptor", status);
      return Promise.reject(error);
    }
  );

  return axiosSecure;
};

export default useAxiosSecure;
