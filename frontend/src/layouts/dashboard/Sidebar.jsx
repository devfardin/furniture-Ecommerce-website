import React from "react";
import { RxCross2 } from "react-icons/rx";
import dashboardLogo from "../../assets/images/dashboard-logo.png";
const Sidebar = ({ isOpen, setIsOpen }) => {
  return (
    <div className=" bg-white overflow-hidden">
      <div className="flex sticky top-0 justify-between items-center gap-5 border-b border-[#ededed] p-3 ">
        {/* Sidebar Logo */}
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
    </div>
  );
};

export default Sidebar;
