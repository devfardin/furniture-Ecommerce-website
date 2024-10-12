import React from 'react'
import { useSearchParams } from 'react-router-dom'
import ProductCard from '../../../components/shared/ProductCard'
import useGetProductsData from '../../../hooks/useGetProductData'
const Products = () => {
    const [params, setParams] = useSearchParams()

    const category = params.get('category')
    const filterValue = category?.replace('-', ' ')

    const [ refetch, data, isLoading, error ] = useGetProductsData()

    let product;
    if (filterValue) {
        product = data?.filter(productItems => productItems?.category == filterValue)
    } else {
        product = data
    }
 
    return (
        <div>
            <ProductCard products={product} refetch={refetch} loading={isLoading} endQuery={8} />
        </div>
    )
}
export default Products