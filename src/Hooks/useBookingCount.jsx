import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useBookingCount = (user) => {
  const axiosSecure = useAxiosSecure();
  const { data: booking = [], refetch } = useQuery({
    queryKey: ["booking", user],
    queryFn: async () => {
      const res = await axiosSecure.get(`/bookings?email=${user}`);
      return res.data;
    },
  });
  return [booking, refetch];
};

export default useBookingCount;
