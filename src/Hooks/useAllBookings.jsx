import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useAllBookings = () => {
  const axiosSecure = useAxiosSecure();

  const { data: allBookings = [], refetch } = useQuery({
    queryKey: ["allBookings"],
    queryFn: async () => {
      const res = await axiosSecure.get("/allBookings");
      return res?.data;
    },
  });
  return [allBookings, refetch];
};

export default useAllBookings;
