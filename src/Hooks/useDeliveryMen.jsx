import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";

const useDeliveryMen = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { data: isDeliveryMen, isPending: isDeliveryMenLoading } = useQuery({
    queryKey: [user?.email, "isDeliveryMen"],
    queryFn: async () => {
      const res = await axiosSecure.get(
        `/users/deliveryMen?email=${user?.email}`
      );
      return res?.data?.deliveryMen;
    },
  });
  return [isDeliveryMen, isDeliveryMenLoading];
};

export default useDeliveryMen;
