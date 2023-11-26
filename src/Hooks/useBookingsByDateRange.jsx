import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useBookingsByDateRange = (fromDate, toDate) => {
  const axiosSecure = useAxiosSecure();

  const { data: bookings = [], refetch } = useQuery({
    queryKey: ["bookingsByDateRange", fromDate, toDate],
    queryFn: async () => {
      const res = await axiosSecure.get("/bookingsByDateRange", {
        params: { fromDate, toDate },
      });
      return res.data;
    },
  });

  return [bookings, refetch];
};

export default useBookingsByDateRange;
