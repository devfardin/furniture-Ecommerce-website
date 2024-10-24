import React from "react";
import { FiMenu, FiUser } from "react-icons/fi";
import { SlCalender } from "react-icons/sl";
import { Menu } from "@headlessui/react";
import { Link, useNavigate } from "react-router-dom";
import { IoSettingsOutline } from "react-icons/io5";
import { PiSignOut } from "react-icons/pi";
import { IoIosArrowDown } from "react-icons/io";
import adminAvather from "../../assets/images/admin.jpg";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";
import useRole from "../../hooks/useRole";
import Loader from "../../components/shared/Loader";

const Header = ({ isOpen, setIsOpen }) => {
  const { logOut, user } = useAuth();
  const date = new Date();
  const year = date.getFullYear();
  const month = date.toLocaleDateString("default", { month: "long" });
  const day = date.getDate();
  const navitage = useNavigate();
  const [userData, isLoading] = useRole();

  const handleSignOut = () => {
    logOut()
      .then((sucess) => {
        toast.success("You have successfully logged out");
        navitage("/");
      })
      .catch((error) => {
        toast.error(error, "Error logging out. Please try again.");
      });
  };

  return (
    // Header wrpper Start
    <div className="bg-white flex-1 transition-all duration-500 rounded-lg mb-5 px-5 py-2">
      {/* header innder container star */}
      <div className="flex justify-between items-center gap-5 ">
        {/* Left start */}
        <div className="cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
          <FiMenu className="text-2xl hover:text-primary duration-300" />
        </div>

        {/* Right Start */}
        <div className="flex items-center gap-3 md:gap-5">
          <div className="hidden md:block">
            <h2 className="flex items-center gap-2 border border-[#E2E8F0] py-2 px-3 lg:px-4 rounded-sm text-base lg:text-lg font-medium text-primary">
              <SlCalender className="text-xl" />
              {` ${day} ${month} ${year}`}
            </h2>
          </div>

          <div className="flex items-center gap-2">
            <div className=" ">
              <Menu as="div" className="relative">
                <div>
                  <Menu.Button>
                    <div class="flex gap-2 sm:gap-4 items-center">
                      <img
                        className="w-14 h-14 rounded-full"
                        src={user?.photoURL ? user?.photoURL : adminAvather}
                        alt=""
                      />
                      <div className="hidden sm:flex flex-col justify-center">
                        <span className="text-base lg:text-lg font-normal text-primary text-center">
                          {isLoading ? <Loader /> : userData?.role}
                        </span>
                        <h2 className="flex items-center gap-2 text-base lg:text-lg font-semibold">
                          {user?.displayName} <IoIosArrowDown />
                        </h2>
                      </div>
                    </div>
                  </Menu.Button>
                </div>

                <Menu.Items className="absolute right-0 py-2 mt-4 w-44 origin-top-right divide-y divide-gray-100 rounded-sm bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
                  <div className="px-1 py-1 ">
                    <Menu.Item>
                      <Link
                        to="profile"
                        className=" hover:bg-primary hover:text-white text-base font-normal flex w-full gap-1 items-center rounded-md px-2 py-1 text-primary"
                      >
                        <FiUser></FiUser>
                        Profile
                      </Link>
                    </Menu.Item>

                    <Menu.Item>
                      <Link
                        to="/profile"
                        className=" hover:bg-primary hover:text-white text-base font-normal flex w-full gap-1 items-center rounded-md px-2 py-1 text-primary"
                      >
                        <IoSettingsOutline></IoSettingsOutline>
                        Setting
                      </Link>
                    </Menu.Item>

                    <Menu.Item>
                      <button
                        onClick={handleSignOut}
                        className=" hover:bg-primary hover:text-white text-base font-normal flex w-full gap-1 items-center rounded-md px-2 py-1 text-primary"
                      >
                        <PiSignOut />
                        Logout
                      </button>
                    </Menu.Item>
                  </div>
                </Menu.Items>
              </Menu>
            </div>
          </div>
        </div>
      </div>
      {/* Header innder containder end */}
    </div>
    // Header wrpper end
  );
};

export default Header;
