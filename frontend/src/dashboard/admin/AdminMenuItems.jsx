import React from "react";
import SidebarLink from "../../dashboard/components/SidebarLink";
import { BsShop, BsCartCheck } from "react-icons/bs";
import {
  MdOutlineArticle,
  MdOutlineDiscount,
  MdSupportAgent,
} from "react-icons/md";
import { MdOutlineInventory2, MdOutlineReviews } from "react-icons/md";
import { RxDashboard } from "react-icons/rx";
import { TbUserStar } from "react-icons/tb";
import { FaRegBell } from "react-icons/fa";

const AdminMenuItems = ({ isOpen }) => {
  return (
    <div className="flex justify-self-start flex-col gap-3">
      <SidebarLink
        to={"/dashboard"}
        label="Dashboard"
        icon={RxDashboard}
        isOpen={isOpen}
      />
      <SidebarLink
        to={"all-products"}
        label="All Products"
        icon={BsShop}
        isOpen={isOpen}
      />
      <SidebarLink
        to={"all-products"}
        label="Add Product"
        icon={BsShop}
        isOpen={isOpen}
      />
      <SidebarLink
        to={"orders"}
        label="Orders"
        icon={BsCartCheck}
        isOpen={isOpen}
      />

      <SidebarLink
        to={"orders"}
        label="Inventory Management"
        icon={MdOutlineInventory2}
        isOpen={isOpen}
      />
      <SidebarLink
        to={"orders"}
        label="Discounts & Coupons"
        icon={MdOutlineDiscount}
        isOpen={isOpen}
      />
      <SidebarLink
        to={"orders"}
        label="Reviews & Feedback"
        icon={MdOutlineReviews}
        isOpen={isOpen}
      />
      <SidebarLink
        to={"support"}
        label="Support"
        icon={MdSupportAgent}
        isOpen={isOpen}
      />
      <SidebarLink
        to={"all-users"}
        label="User Management"
        icon={TbUserStar}
        isOpen={isOpen}
      />
      <SidebarLink
        to={"all-users"}
        label="Post Management"
        icon={MdOutlineArticle}
        isOpen={isOpen}
      />
      <SidebarLink
        to={"all-users"}
        label="Notification Center"
        icon={FaRegBell}
        isOpen={isOpen}
      />
    </div>
  );
};

export default AdminMenuItems;
