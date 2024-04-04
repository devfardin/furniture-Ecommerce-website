import React, { useEffect, useState } from 'react'

const Trendyproducts = () => {
    const [products, setProducts]=useState([])
    
    useEffect(()=>{
        fetch('https://raw.githubusercontent.com/devfardin/furniture-Ecommerce-website/main/public/products.json')
        .then(res=>res.json())
        .then(data=>setProducts(data))
      },[])

    console.log(products);
  return (
    <div>
        <h1>Trendyproducts</h1>
        <h2>{products.length}</h2>
    </div>
  )
}

export default Trendyproducts