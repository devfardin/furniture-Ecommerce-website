import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from './useAxiosSecure';
const useAllProducts = () => {
    const axiosSecure = useAxiosSecure()
    const { refetch:productRefetch, isLoading, data:products=[] } = useQuery({
        queryKey: [ 'products' ],
        queryFn: async() =>{
            const data = await axiosSecure(`/all-products`)
            return data.data;
        }
      })
      return [ productRefetch, isLoading, products ]  
}

export default useAllProducts
