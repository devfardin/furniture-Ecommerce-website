import React from "react";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";
import { useQuery } from "@tanstack/react-query";
const useWishList = () => {
  const axiouSecure = useAxiosSecure();
  const { user } = useAuth();
  const email = user?.email;
  const { refetch:wishlistRefetch, isLoading, data:wishList=[] } = useQuery({
    queryKey: [ 'wishlist', email ],
    queryFn: async() =>{
        const data = await axiouSecure(`/wishlist?email=${email}`)
        return data.data;
    }
  })
  return [ wishlistRefetch, isLoading, wishList ]  
};
export default useWishList;
