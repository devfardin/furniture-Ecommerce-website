import { useQuery } from "@tanstack/react-query"
import useAuth from "./useAuth"
import useAxiosSecure from "./useAxiosSecure";

const useCartData = () => {
    const axiouSecure = useAxiosSecure()
    const { user } =useAuth()
    const userEmail = user?.email;
    const { refetch, isLoading, error, data:cart=[] } = useQuery({
        queryKey: ['cart-product', userEmail],
        queryFn: async()=>{
            const data = await axiouSecure.get(`/product-cart?email=${userEmail}`);
            return data.data;
        }
    })
    return [ refetch, isLoading, error, cart ]
}
export default useCartData
