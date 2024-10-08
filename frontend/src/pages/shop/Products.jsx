import React, { useEffect, useState } from "react";
import Loader from "../../components/shared/Loader";
import { BsCart3 } from "react-icons/bs";
import { IoHeartOutline } from "react-icons/io5";
import { AiOutlineRetweet } from "react-icons/ai";
import { LiaEyeSolid } from "react-icons/lia";
import { useQuery } from "@tanstack/react-query";
import axiosSecure from "../../hooks/useAxiosSecure";

const Products = ({ category, searchResult }) => {


  const { data, isLoading } = useQuery({
    queryKey: ['products'],
    queryFn: async() => {
      const { data } = await axiosSecure.get('/products');
      return data
    }
  })
  console.log( data );
  



  const productFilter = data?.filter((item) => {
    const matchesSearch = searchResult === "" || item.name.toLowerCase().includes(searchResult);
    
    const matchesCategory = category === "" || item.category === category;
    return matchesSearch && matchesCategory;
  });

  return (
    <div>
      <div>
        { isLoading ? (
          <Loader />
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-7">
            {productFilter?.map((product, index) => (
              <div key={index} className="overflow-hidden group">
                {/* Product feature image */}
                <div className="relative  overflow-hidden bg-[#D9D9D9]">
                  <img
                    className="rounded-md group-hover:scale-125 group-hover:rotate-6 w-full transition-all duration-300"
                    src={product.featureImg}
                    alt="Feature image"
                  />
                  
                  <ul className="flex -mb-16 text-pera hover:text-pera z-0 group-hover:-translate-y-20 transition-all duration-500 group-hover:flex items-center justify-center gap-x-2 px-2 md:px-3 lg:px-10">
                    <li className="p-3.5  group-scoped bg-white rounded-md group hover:bg-primary transition-all duration-300">
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
                    <li className="p-3.5 group-scoped bg-white rounded-md group hover:bg-primary transition-all duration-300">
                      <LiaEyeSolid
                        className="text-xl hover-color text-pera 
                                        transition-all duration-300"
                      />
                    </li>
                  </ul>

                  <span className="absolute top-3 right-3 py-1 px-3 xl:px-4 font-medium text-sm text-white  bg-[#5AB27E]">
                    {" "}
                    New Arival{" "}
                  </span>
                </div>
                {/* Product Information */}
                <div className="my-5">
                  <h2 className="text-xl  truncate text-center text-heading font-medium ">
                    {product.name}
                  </h2>
                  {/* Product prices */}
                  <div className="text-center flex items-center justify-center gap-3 mt-5">
                    <span className="text-xl truncate text-center text-primary font-medium ">
                      ${product.price}
                    </span>
                    <span className="text-xl font-normal line-through text-[#888888]">
                      ${product.discount}
                    </span>
                  </div>
                  {/* Add to cart button */}
                  <div className="flex flex-col justify-center items-center mt-5">
                    <button
                      className="py-2.5 w-full md:w-auto  md:px-10 lg:py-3 lg:px-12 outline-none border-primary border-2 text-base font-medium text-heading hover:text-white bg-no hover:bg-primary hover:border-primary  duration-300 transition-all text-center"
                      // onClick={onclick}
                    >
                      Bye Now

                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;
