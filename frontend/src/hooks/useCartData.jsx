import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useCartData = () => {
  const axiouSecure = useAxiosSecure();
  const { user } = useAuth();
  const email = user?.email;
  const {
    refetch,
    isLoading,
    error,
    data: cartItems = [],
  } = useQuery({
    queryKey: ["cart-product", email],
    queryFn: async () => {
      const data = await axiouSecure(`/carts?email=${email}`);
      return data.data;
    },
  });
  return [refetch, isLoading, error, cartItems];
};
export default useCartData;
