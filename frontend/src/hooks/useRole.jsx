import React from "react";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const useRole = () => {
  const { user, loading } = useAuth();
  const userEmail = user?.email;
  const axiosSecure = useAxiosSecure();
  const { data:userData, isLoading, refetch } = useQuery({
    queryKey: ["role", userEmail],
    // when loading is true and userEmail have truety value it will be run
    enabled: !loading && !!userEmail,
    queryFn: async () => {
      const { data } = await axiosSecure.get(`/user/${userEmail}`);
      return data;
    },
  });
  return [ userData, isLoading, refetch ];
};
export default useRole;
