import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import dashboardLogo from "../../assets/images/dashboard-logo.png";
import { Link, useNavigate } from "react-router-dom";
import adminAvather from "../../assets/images/admin.jpg";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";
import AdminMenuItems from "../../dashboard/admin/AdminMenuItems";
import useRole from "../../hooks/useRole";
import CustomerMenuItems from "../../dashboard/customer/CustomerMenuItems";

const Sidebar = ({ isOpen, setIsOpen }) => {
  const { logOut, user } = useAuth();
  const navitage = useNavigate();
  const [userData] = useRole();
  const userRole = userData?.role;

  const handleSignOut = () => {
    logOut()
      .then((sucess) => {
        toast.success("You have successfully logged out");
        navitage("/");
      })
      .catch((error) => {
        toast.error("Error logging out. Please try again.");
      });
  };

  return (
    <div className={`${isOpen ? 'fixed top-0' : 'fixed shadow-md border-r top-0'} bg-white overflow- top-0`}>
      <div className="flex flex-col overflow-y-scroll  gap-5  h-screen">
        {/* Side bar Logo and title start */}
        <div
          className={`${
            isOpen
              ? "flex transition-all duration-300 justify-between items-center gap-5 py-3 px-6"
              : "p-3 text-center flex justify-between items-center  transition-all duration-300"
          } border-b border-dashBorder sticky top-0 bg-white`}
        >
          <Link to={"/"}>
            <div className="flex gap-2 items-center">
              <img className="w-12" src={dashboardLogo} alt="" />

              <div className="flex-1">
                <span
                  className={`${
                    isOpen ? "" : "md:hidden"
                  } text-3xl text-left  font-semibold`}
                >
                  Furnito
                </span>
              </div>
            </div>
          </Link>
          <div className="block md:hidden z-50">
            <RxCross2
              onClick={() => setIsOpen(!isOpen)}
              className="text-3xl hover:text-primary"
            ></RxCross2>
          </div>
        </div>
        {/* Sidebar logo and Title end */}

        {/* Sidebar Menu Items Start */}
        <div className="mx-2">

          {
            userRole === 'customer' && <CustomerMenuItems isOpen={isOpen}/>
          }

          { userRole === "admin" &&
            <AdminMenuItems isOpen={isOpen} />
           }
        </div>
        {/* Sidebar Menu Items Start */}

        {/* Sidebar Footer Start */}
        <Link
          to={"profile"}
          className={`${
            isOpen ? " flex items-center py-3 px-6 gap-4" : " p-2 flex gap-5"
          } border-t border-dashBorder mt-auto sticky bottom-0  bg-white `}
        >
          <div>
            <img
              className="w-[55px] h-[55px] object-cover rounded-full"
              src={user?.photoURL ? user?.photoURL : adminAvather}
              alt="User Profile"
            />
          </div>
          <div
            className={` ${
              isOpen
                ? "flex flex-col gap-0.5 opacity-100"
                : "md:opacity-0 md:hidden transition-opacity delay-50000 duration-300"
            } `}
          >
            {/* User Name */}
            <h3 className="text-base font-medium text-[#260944] hover:text-primary transition-all duration-300 cursor-pointer">
              {user?.displayName}
            </h3>
            <button
              onClick={handleSignOut}
              className="text-base font-normal text-pera hover:text-primary transition-all duration-300"
            >
              Log Out
            </button>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
