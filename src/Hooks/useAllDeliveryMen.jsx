import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useAllDeliveryMen = () => {
  const axiosSecure = useAxiosSecure();
  const { data: deliveryMens = [], refetch } = useQuery({
    queryKey: ["deliveryMens"],
    queryFn: async () => {
      const res = await axiosSecure.get("/allDeliveryMen?type=DeliveryMen");
      return res?.data;
    },
  });

  return [deliveryMens, refetch];
};

export default useAllDeliveryMen;
