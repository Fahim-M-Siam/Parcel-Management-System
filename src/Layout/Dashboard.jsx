// @ts-nocheck
import { NavLink, Outlet } from "react-router-dom";
import { FaHome, FaList, FaUsers } from "react-icons/fa";
import { MdDeliveryDining } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { PiUsersThreeFill } from "react-icons/pi";
import { FcStatistics } from "react-icons/fc";
import SectionTitle from "../components/SectionTitle/SectionTitle";

// @ts-nocheck
const DashboardLayout = () => {
  const isAdmin = true;
  // const isDeliveryMen = true;
  return (
    <div className="flex">
      <div className="w-64 min-h-screen bg-[#FF715A]">
        <div>
          <SectionTitle heading={"Ship Ease"}></SectionTitle>
        </div>
        <ul className="menu text-md">
          {isAdmin ? (
            <>
              <li>
                <NavLink to="/dashboard/allParcel">
                  <FaList></FaList> All Parcels
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/allUsers">
                  <FaUsers /> All Users
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/allDeliveryMen">
                  <PiUsersThreeFill /> All Delivery Men
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/statistics">
                  <FcStatistics /> Statistics
                </NavLink>
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink to="/dashboard/bookParcel">
                  <MdDeliveryDining /> Book Parcel
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/myParcels">
                  <FaList /> My Parcels
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/userProfile">
                  <CgProfile /> My Profile
                </NavLink>
              </li>
            </>
          )}
          <div className="divider"></div>
          {/* shared navItem */}
          <li>
            <NavLink to="/">
              <FaHome /> Home
            </NavLink>
          </li>
          {/* shared navItem */}
        </ul>
      </div>
      <div className="flex-1">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default DashboardLayout;
