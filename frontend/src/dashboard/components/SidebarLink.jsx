import React from "react";
import { NavLink } from "react-router-dom";
import {
  MdKeyboardArrowRight,
} from "react-icons/md";
const SidebarLink = ({ to, label, icon: Icon, isOpen }) => {
  return (
    <div>
      <NavLink
        end
        to={to}
        className={({ isActive }) => ` ${
          isOpen ? "justify-start" : "md:justify-center"
        } ${
          isActive
            ? "bg-dashPrimary hover:bg-dashPrimary hover:text-white text-white"
            : "hover:bg-dashPrimary"
        } flex items-center justify-between text-lg gap-2
       bg-dashHoverBg py-3 px-4 transition-all duration-300 hover:text-white rounded-md mx-1`}
      >
        <span className="flex items-center gap-2">
          <Icon className={` ${isOpen ? "" : "text-xl"} text-2xl`}> </Icon>
          <span
            className={`${
              isOpen ? "" : "md:hidden"
            } text-lg font-normal leading-5`}
          >
            {label}
          </span>
        </span>
        {isOpen ? <MdKeyboardArrowRight className="text-2xl" /> : ""}
      </NavLink>
    </div>
  );
};

export default SidebarLink;
