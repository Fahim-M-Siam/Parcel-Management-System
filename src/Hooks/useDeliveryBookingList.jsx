import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";
import { useQuery } from "@tanstack/react-query";

const useDeliveryBookingList = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const { data: deliveryBooking = [], refetch } = useQuery({
    queryKey: ["deliveryBooking", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(
        `/allDeliveryBookings?id=${user.email}`
      );
      return res.data;
    },
  });
  return [deliveryBooking, refetch];
};

export default useDeliveryBookingList;
