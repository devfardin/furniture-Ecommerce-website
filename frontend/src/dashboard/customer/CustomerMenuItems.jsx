import React from "react";
import { RxDashboard } from "react-icons/rx";
import SidebarLink from "../components/SidebarLink";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { FaHome } from "react-icons/fa";
import { FiHeart } from "react-icons/fi";
import { BsCartCheck } from "react-icons/bs";
import { RiInboxUnarchiveLine } from "react-icons/ri";
import { MdOutlineSupportAgent } from "react-icons/md";

const CustomerMenuItems = ({ isOpen }) => {
  const customerMenu = [
    {
      label: "Home",
      link: "/",
      icon: FaHome,
    },
    {
      label: "Dashboard",
      link: "user",
      icon: RxDashboard,
    },
    {
      label: "My Orders",
      link: "my-orders",
      icon: HiOutlineShoppingBag,
    },
    {
      label: "My Cart",
      link: "my-cart",
      icon: BsCartCheck,
    },
    {
      label: "My Wishlist",
      link: "my-wishlist",
      icon: FiHeart,
    },
    {
      label: "Return Requests",
      link: "return-request",
      icon: RiInboxUnarchiveLine,
    },
    {
      label: "Support/Tickets",
      link: "support-tickets",
      icon: MdOutlineSupportAgent,
    },
  ];
  return (
    <div className="flex w-full justify-self-start flex-col gap-3">
      {customerMenu.map((adminLink, index) => (
        <SidebarLink
          key={index}
          to={adminLink.link}
          label={adminLink.label}
          icon={adminLink.icon}
          isOpen={isOpen}
        />
      ))}
    </div>
  );
};

export default CustomerMenuItems;
