import React from "react";
import { RxCross2 } from "react-icons/rx";
import dashboardLogo from "../../assets/images/dashboard-logo.png";
import SidebarLink from "../../dashboard/components/SidebarLink";
import { FiUser } from "react-icons/fi";
const Sidebar = ({ isOpen, setIsOpen }) => {
  return (
    <div className=" bg-white overflow-hidden">
      <div className="flex justify-between flex-col gap-5 h-screen">
        {/* Side bar Logo and title start */}
        <div className="flex sticky top-0 justify-between items-center gap-5 border-b border-[#ededed]  p-3">
          <div className="flex gap-2 items-cente">
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
          <div className="block md:hidden z-50">
            <RxCross2
              onClick={() => setIsOpen(!isOpen)}
              className="text-3xl hover:text-primary"
            ></RxCross2>
          </div>
        </div>
        {/* Sidebar logo and Title end */}

        <div className="sticky bottom-0 border-t border-[#ededed] p-3">
        <h4 className={` ${isOpen ? "text-pera text-base font-normal mb-3 duration-300 transition-all opacity-100" : "opacity-0"} `}>AUTHENTICATION</h4>
        
        <SidebarLink to={'profile'} label="Profile" icon={FiUser} isOpen={isOpen}></SidebarLink>
        <SidebarLink to={'Setting'} label="Setting" icon={FiUser} isOpen={isOpen}></SidebarLink>

      </div>

      </div>

   
    </div>
  );
};

export default Sidebar;
