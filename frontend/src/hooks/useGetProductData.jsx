import { useQuery } from '@tanstack/react-query'
import React from 'react'
import useAxiosPublic from './useAxiosPublic'

const useGetProductData = () => {
    const { refetch, data, isLoading, error }= useQuery({
        queryKey: ['products'],
        queryFn: async()=>{
            const data = await useAxiosPublic.get('/products')
            return data
        }
    })
    return [ refetch, data, isLoading, error ]
}

export default useGetProductData
