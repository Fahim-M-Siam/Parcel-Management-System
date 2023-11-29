import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";

const useDeliveryMen = (email) => {
  const { user } = useAuth();
  console.log(user?.email);
  const axiosSecure = useAxiosSecure();
  const { data: isDeliveryMen, isPending: isDeliveryMenLoading } = useQuery({
    queryKey: [email, "isDeliveryMen"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/users/deliveryMen/${user?.email}`);
      console.log(res.data);
      return res.data?.deliveryMen;
    },
  });
  return [isDeliveryMen, isDeliveryMenLoading];
};

export default useDeliveryMen;
