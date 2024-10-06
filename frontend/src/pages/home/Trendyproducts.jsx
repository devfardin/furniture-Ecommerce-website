import React, { useEffect, useState } from 'react'
import Container from '../../components/shared/Container'
import { BsCart3 } from "react-icons/bs";
import { IoHeartOutline } from "react-icons/io5";
import { AiOutlineRetweet } from "react-icons/ai";
import { LiaEyeSolid } from "react-icons/lia";
import ProductCard from '../../components/shared/ProductCard';
const Trendyproducts = () => {
    const [products, setProducts] = useState([])
    const [loading, setLoading]=useState(false)

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
        <div>
            <ProductCard products={products} 
            startQuery={0} endQuery={4} loading={loading}
            />
        </div>
    )
}

export default Trendyproducts