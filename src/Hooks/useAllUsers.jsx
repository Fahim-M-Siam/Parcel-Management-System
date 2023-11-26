import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useAllUsers = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const { data: allUsers = [], refetch } = useQuery({
    queryKey: ["allUsers", user?.type],
    queryFn: async () => {
      const res = await axiosSecure.get("/allUsers?type=User");
      return res.data;
    },
  });
  return [allUsers, refetch];
};

export default useAllUsers;
