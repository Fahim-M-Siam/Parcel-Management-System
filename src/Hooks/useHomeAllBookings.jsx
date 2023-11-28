import useAxiosPublic from "./useAxiosPublic";
import { useQuery } from "@tanstack/react-query";

const useHomeAllBookings = () => {
  const axiosPublic = useAxiosPublic();
  const { data: homeAllBookings = [] } = useQuery({
    queryKey: ["homeAllBookings"],
    queryFn: async () => {
      const res = await axiosPublic.get("/homeAllBookings");
      return res.data;
    },
  });
  return [homeAllBookings];
};

export default useHomeAllBookings;
