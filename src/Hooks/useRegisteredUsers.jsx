import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useRegisteredUsers = () => {
  const axiosPublic = useAxiosPublic();
  const { data: registeredUser = [] } = useQuery({
    queryKey: ["registeredUser"],
    queryFn: async () => {
      const res = await axiosPublic("/registeredUsers");
      return res.data;
    },
  });
  return [registeredUser];
};

export default useRegisteredUsers;
