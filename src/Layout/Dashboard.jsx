// @ts-nocheck
import { NavLink, Outlet } from "react-router-dom";
import { FaHome, FaList } from "react-icons/fa";
import { MdDeliveryDining } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import SectionTitle from "../components/SectionTitle/SectionTitle";

// @ts-nocheck
const DashboardLayout = () => {
  return (
    <div className="flex">
      <div className="w-64 min-h-screen bg-[#FF715A]">
        <div>
          <SectionTitle heading={"Ship Ease"}></SectionTitle>
        </div>
        <ul className="menu text-md">
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
          <div className="divider"></div>
          <li>
            <NavLink to="/">
              <FaHome /> Home
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="flex-1">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default DashboardLayout;
