import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import ProductCard from '../../../components/shared/ProductCard'
const Products = () => {
    const [params, setParams] = useSearchParams()
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(false)
    const category = params.get('category')
    const filterValue = category?.replace('-', ' ')
    let product;
    if (filterValue) {
        product = products.filter(productItems => productItems?.category == filterValue)
    } else {
        product = products
    }
    useEffect(() => {
        setLoading(true)
        fetch('./products.json')
            .then(res => res.json())
            .then(data => {
                setProducts(data)
                setLoading(false)
            })
    }, [])
    return (
        <ProductCard products={product} loading={loading} endQuery={8} />
    )
}
export default Products