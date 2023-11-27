import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
// import { useState } from "react";

const useAllUsers = (userType) => {
  const axiosSecure = useAxiosSecure();

  // const userPerPage = 5;
  // const [currentPage, setCurrentPage] = useState(0);
  // const numberOfPages = Math.ceil(count / userPerPage);
  // const pages = [...Array(numberOfPages).keys()];
  const { data: users = [], refetch } = useQuery({
    queryKey: ["users", userType],
    queryFn: async () => {
      const res = await axiosSecure.get(`/allUsers?type=${userType}`);
      return res.data;
    },
  });
  // const count = allUsers.length;
  return [users, refetch];
};

export default useAllUsers;
// &page=${currentPage}&size=${userPerPage}
