import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useAllDelivered = () => {
  const axiosPublic = useAxiosPublic();
  const { data: allDelivered = [] } = useQuery({
    queryKey: ["allDelivered"],
    queryFn: async () => {
      const res = await axiosPublic.get("/allDelivered?status=Delivered");
      return res.data;
    },
  });
  return [allDelivered];
};

export default useAllDelivered;
