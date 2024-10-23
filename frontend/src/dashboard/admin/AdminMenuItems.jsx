import React from "react";
import SidebarLink from "../../dashboard/components/SidebarLink";
import { BsShop, BsCartCheck } from "react-icons/bs";
import { RxDashboard } from "react-icons/rx";
import { TbUserStar } from "react-icons/tb";
import { FaRegBell } from "react-icons/fa";
import { TfiShoppingCartFull } from "react-icons/tfi";
import { CiSignpostDuo1 } from "react-icons/ci";
import {
  MdOutlineAddBusiness,
  MdOutlineArticle,
  MdOutlineDiscount,
  MdSupportAgent,
  MdOutlineInventory2,
  MdOutlineReviews
} from "react-icons/md";

const AdminMenuItems = ({ isOpen }) => {
  const adminMenuLinks =[
    {
      label: 'Dashboard',
      link: '/dashboard',
      icon: RxDashboard,
    },
    {
      label:'All Products',
      link:'products',
      icon:BsShop,
    },
    {
      label: 'Add Product',
      link:'add-product',
      icon: MdOutlineAddBusiness,
    },
    {
      label: 'Product Categories',
      link:'product-categories',
      icon: TfiShoppingCartFull,
    },
    {
      label: 'Orders',
      link:'orders',
      icon: BsCartCheck,
    },
    {
      label: 'Inventory Management',
      link:'inventory-management',
      icon: MdOutlineInventory2,
    },
    {
      label: 'Discounts & Coupons',
      link:'discounts-coupons',
      icon: MdOutlineDiscount,
    },
    {
      label: 'Reviews & Feedback',
      link:'reviews-feedback',
      icon: MdOutlineReviews,
    },
    {
      label: 'Support',
      link:'support',
      icon: MdSupportAgent,
    },
    {
      label: 'User Management',
      link:'users',
      icon: TbUserStar,
    },
    {
      label: 'Post Management',
      link:'posts',
      icon: MdOutlineArticle,
    },
    {
      label: 'Post Categories',
      link:'posts-categories',
      icon: CiSignpostDuo1,
    },
    {
      label: 'Notification Center',
      link:'notification',
      icon: FaRegBell,
    },
    

  ]
  return (
    <div className="flex w-full justify-self-start flex-col gap-3">
      {
        adminMenuLinks.map( (adminLink, index)=> <SidebarLink key={index} to={adminLink.link} label={adminLink.label} icon={adminLink.icon} isOpen={isOpen}/> )
      }
    </div>
  );
};

export default AdminMenuItems;
