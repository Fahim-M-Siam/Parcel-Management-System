import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useDeliveryMen = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { data: isDeliveryMen, isPending: isDeliveryMenLoading } = useQuery({
    queryKey: [user?.email, "isDeliveryMen"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/users/deliveryMen/${user.email}`);
      console.log(res.data);
      return res.data?.DeliveryMen;
    },
  });
  return [isDeliveryMen, isDeliveryMenLoading];
};

export default useDeliveryMen;
