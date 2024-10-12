import React, { useState } from "react";
import { BsCart3 } from "react-icons/bs";
import { IoHeartOutline } from "react-icons/io5";
import { AiOutlineRetweet } from "react-icons/ai";
import { LiaEyeSolid } from "react-icons/lia";
import toast from "react-hot-toast";
import QuickShowProduct from "./QuickShowProduct";
const ProductIconHover = ({ product }) => {

  const [isOpen, setIsOpen] = useState(false);

  const handleQuickShow = ( id ) => {
    setIsOpen(true);
    console.log(id);
    
  };
  return (
    <ul className="flex -mb-16 text-pera hover:text-pera z-0 group-hover:-translate-y-20 transition-all duration-500 group-hover:flex items-center justify-center gap-x-2 px-2 md:px-3 lg:px-10">
      <li
        onClick={() => toast.success(product?._id)}
        className="p-3.5  group-scoped bg-white rounded-md group hover:bg-primary transition-all duration-300"
      >
        <BsCart3
          className="text-xl hover-color text-pera 
                                        transition-all duration-300"
        />
      </li>
      <li className="p-3.5 group-scoped bg-white rounded-md group hover:bg-primary transition-all duration-300">
        <IoHeartOutline
          className="text-xl  hover-color text-pera 
                                        transition-all duration-300"
        />
      </li>
      <li className="p-3.5 group-scoped bg-white rounded-md group hover:bg-primary transition-all duration-300">
        <AiOutlineRetweet
          className="text-xl hover-color text-pera 
                                        transition-all duration-300"
        />
      </li>
      <li
        onClick={() => handleQuickShow( product._id )}
        className="p-3.5 group-scoped bg-white rounded-md group hover:bg-primary transition-all duration-300"
      >
        <LiaEyeSolid
          className="text-xl hover-color text-pera 
                                        transition-all duration-300"
        />
      </li>
      <QuickShowProduct isOpen={isOpen} setIsOpen={setIsOpen} id={product._id}/>
    </ul>
  );
};

export default ProductIconHover;
