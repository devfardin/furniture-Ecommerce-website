import React, { useEffect, useState } from "react";
import Container from "../../components/shared/Container";
import { BsCart3 } from "react-icons/bs";
import { IoHeartOutline } from "react-icons/io5";
import { AiOutlineRetweet } from "react-icons/ai";
import { LiaEyeSolid } from "react-icons/lia";
import ProductCard from "../../components/shared/ProductCard";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../hooks/useAxiosPublic";
const Trendyproducts = () => {
  const axiosPublic = useAxiosPublic();

  const { data, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const { data } = await axiosPublic.get("/products");
      return data;
    },
    
  });

  return (
    <div>
      <ProductCard
        products={data}
        startQuery={0}
        endQuery={4}
        isLoading={isLoading}
      />
    </div>
  );
};

export default Trendyproducts;
