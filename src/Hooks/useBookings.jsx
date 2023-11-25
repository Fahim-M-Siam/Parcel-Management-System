import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";
import useAuth from "./useAuth";

const useBookings = () => {
  const axiosPublic = useAxiosPublic();
  const { user } = useAuth();
  const { data: booking = [], refetch } = useQuery({
    queryKey: ["booking", user?.email],
    queryFn: async () => {
      const res = await axiosPublic.get(`/bookings?email=${user.email}`);
      return res.data;
    },
  });
  return [booking, refetch];
};

export default useBookings;
