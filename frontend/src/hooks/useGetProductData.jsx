import { useQuery } from '@tanstack/react-query'
import useAxiosPublic from './useAxiosPublic'

const useGetProductsData = () => {
    const { refetch, data, isLoading, error }= useQuery({
        queryKey: ['products'],
        queryFn: async()=>{
            const data = await useAxiosPublic.get('/products')
            return data
        }
    })
    return [ refetch, data, isLoading, error ]
}

export default useGetProductsData
