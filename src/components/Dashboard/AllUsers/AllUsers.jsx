// @ts-nocheck
// import loadingAnimation from "../../../assets/loadingAnimation.json";
// import { useEffect, useState } from "react";
import useAllUsers from "../../../Hooks/useAllUsers";
import SectionTitle from "../../SectionTitle/SectionTitle";
import AllUsersTable from "./AllUsersTable";
// import axios from "axios";
// import Lottie from "lottie-react";

const AllUsers = () => {
  const [allUsers, refetch] = useAllUsers("User");

  // const [isLoading, setIsLoading] = useState(true);
  // const count = allUsers.length;
  // const userPerPage = 5;
  // const [currentPage, setCurrentPage] = useState(0);
  // const numberOfPages = Math.ceil(count / userPerPage);
  // const pages = [...Array(numberOfPages).keys()];

  // useEffect(() => {
  //   axios
  //     .get(
  //       `http://localhost:5000/allUsers?type=User&page=${currentPage}&size=${userPerPage}`
  //     )
  //     .then((response) => {
  //       setUsers(response.data);
  //     })
  //     .catch((error) => console.log(error))
  //     .finally(() => {
  //       setIsLoading(false);
  //     });
  // }, [currentPage]);

  // // pagination features
  // const handlePrevPage = () => {
  //   if (currentPage > 0) {
  //     setCurrentPage(currentPage - 1);
  //   }
  // };
  // const handleNextPage = () => {
  //   if (currentPage < pages.length - 1) {
  //     setCurrentPage(currentPage + 1);
  //   }
  // };
  return (
    <div>
      <SectionTitle heading={"All users"}></SectionTitle>
      {/* {isLoading ? (
        <>
          <div className="w-[400px] flex ml-96 items-center h-screen">
            <Lottie animationData={loadingAnimation}></Lottie>
          </div>
        </>
      ) : ( */}
      <div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>User Name</th>
                <th>Users Phone</th>
                <th>Parcel Booked</th>
                <th>Make Delivery Men</th>
                <th>Make Admin</th>
              </tr>
            </thead>
            <tbody>
              {allUsers?.map((user, index) => (
                <AllUsersTable
                  key={user._id}
                  user={user}
                  index={index}
                  refetch={refetch}
                ></AllUsersTable>
              ))}
              {/* <div className="text-center mt-20">
                  <button
                    onClick={handlePrevPage}
                    className="btn btn-outline btn-sm"
                  >
                    Prev
                  </button>
                  {pages?.map((page) => (
                    <button
                      onClick={() => setCurrentPage(page)}
                      className="btn btn-sm btn-outline mx-2"
                      style={{
                        backgroundColor:
                          currentPage === page ? "black" : "initial",
                        color: currentPage === page ? "white" : "initial",
                      }}
                      key={page}
                    >
                      {page + 1}
                    </button>
                  ))}
                  <button
                    onClick={handleNextPage}
                    className="btn btn-outline btn-sm"
                  >
                    Next
                  </button>
                </div> */}
            </tbody>
          </table>
        </div>
      </div>
      {/* )} */}
    </div>
  );
};

export default AllUsers;
