import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import { useState } from "react";

const useAllUsers = (userType) => {
  const axiosSecure = useAxiosSecure();
  const userPerPage = 5;
  const [currentPage, setCurrentPage] = useState(0);
  const { data: { users, userCount } = [], refetch } = useQuery({
    queryKey: ["users", userType, currentPage],
    queryFn: async () => {
      const res = await axiosSecure.get(
        `/allUsers?type=${userType}&page=${currentPage}&size=${userPerPage}`
      );
      return res?.data;
    },

    initialData: { users: [], userCount: 0 },
  });
  console.log(userCount);
  const numberOfPages = Math.ceil(userCount / userPerPage);
  const pages = [...new Array(numberOfPages).keys()];
  return [users, currentPage, setCurrentPage, pages, refetch];
};

export default useAllUsers;
