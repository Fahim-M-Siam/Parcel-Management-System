// @ts-nocheck
import logo from "../../../../public/logo.png";
import toast from "react-hot-toast";
import { IoIosNotifications } from "react-icons/io";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";

const Navbar = () => {
  const { user, logOut } = useAuth();

  const handleLogOut = () => {
    logOut()
      .then(() => {
        toast.success("Successfully Logged Out");
      })
      .catch(() => {
        toast.error("Logout Action Failed");
      });
  };
  return (
    <div className="navbar max-w-7xl mx-auto">
      <div className="navbar-start">
        <div className="dropdown navbarDropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "btn btn-outline bg-[#FF715A] text-white btn-sm"
                  : "btn btn-ghost btn-sm"
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/dashboard"
              className={({ isActive }) =>
                isActive
                  ? "btn btn-outline bg-[#FF715A] text-white btn-sm"
                  : "btn btn-ghost btn-sm"
              }
            >
              Dashboard
            </NavLink>
            <NavLink
              to="/notification"
              className={({ isActive }) =>
                isActive
                  ? "btn btn-outline bg-[#FF715A] text-white btn-sm"
                  : "btn btn-ghost btn-sm"
              }
            >
              <IoIosNotifications className="text-3xl" />
            </NavLink>
          </ul>
        </div>
        <div className="flex text-xl gap-2 items-center font-bold">
          <Link to="/">
            <img className="w-[80px] h-[50" src={logo} alt="" />
          </Link>
          <div>
            <Link to="/">Ship Ease Delivery</Link>
          </div>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "btn btn-outline bg-[#FF715A] text-white btn-sm"
                : "btn btn-ghost btn-sm"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              isActive
                ? "btn btn-outline bg-[#FF715A] text-white btn-sm"
                : "btn btn-ghost btn-sm"
            }
          >
            Dashboard
          </NavLink>
          <NavLink
            to="/notification"
            className={({ isActive }) =>
              isActive
                ? "btn btn-outline bg-[#FF715A] text-white btn-sm"
                : "btn btn-ghost btn-sm"
            }
          >
            <IoIosNotifications className="text-3xl" />
          </NavLink>
        </ul>
      </div>

      <div className="navbar navbar-end">
        {/* This will be displayed on smaller screens */}
        {user?.email ? (
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="cursor-pointer">
              <div className="avatar">
                <div className="w-10 rounded-full">
                  <img src={user.photoURL} alt="User Avatar" />
                </div>
              </div>
            </label>
            <div
              tabIndex={0}
              className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
            >
              <NavLink className="px-4 py-2 hover:bg-base-300 rounded-lg">
                {user.displayName}
              </NavLink>
              <NavLink
                to="/dashboard"
                className="px-4 py-2 hover-bg-base-300 rounded-lg"
              >
                Dashboard
              </NavLink>

              <div
                onClick={handleLogOut}
                className="cursor-pointer text-red-500 px-4 py-2 hover:bg-base-300 rounded-lg"
              >
                Logout
              </div>
            </div>
          </div>
        ) : (
          <>
            <NavLink
              to="/login"
              className={({ isActive }) =>
                isActive ? "btn bg-[#FF715A] btn-sm" : "btn btn-ghost btn-sm"
              }
            >
              Login
            </NavLink>
            <div className="avatar">
              <div className="w-10 rounded-full">
                <img
                  src="https://i.ibb.co/bLrMRXp/user.png"
                  alt="User Avatar"
                />
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
