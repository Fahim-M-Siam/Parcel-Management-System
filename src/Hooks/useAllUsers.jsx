import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useAllUsers = (userType) => {
  const axiosSecure = useAxiosSecure();
  const { data: allUsers = [], refetch } = useQuery({
    queryKey: ["allUsers", userType],
    queryFn: async () => {
      const res = await axiosSecure.get(`/allUsers?type=${userType}`);
      return res.data;
    },
  });
  return [allUsers, refetch];
};

export default useAllUsers;
