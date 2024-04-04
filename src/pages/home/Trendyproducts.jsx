import React, { useEffect, useState } from 'react'
import Container from '../../shared/Container'
import OutlineButton from '../../shared/OutlineButton'

const Trendyproducts = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('./products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    console.log(products);
    return (
        <div>
            <Container>
                <div className='grid grid-cols-4 gap-8'>
                    {
                        products.map((product, index) => <div key={index}>
                            {/* Product feature image */}
                            <div>
                                <img className='rounded-md'
                                    src={product.featureImg} alt="" />
                            </div>
                            {/* Product Information */}
                            <div className='my-5'>
                                <h2 className='text-2xl truncate text-center text-heading font-medium '>{product.name}</h2>
                                {/* Product prices */}
                                <div className='text-center flex items-center justify-center gap-3 mt-5'>
                                    <span className='text-2xl truncate text-center text-primary font-medium '>${product.price}</span>
                                    <span className='text-xl font-normal line-through text-[#888888]'>${product.discount}</span>
                                </div>
                                {/* Add to cart button */}
                              <div className='flex flex-col justify-center items-center mt-5'>
                              <button className='py-2 px-10 lg:py-4 lg:px-12 outline-none border-primary border-[3px] text-xl font-medium text-heading hover:text-white bg-no hover:bg-primary hover:border-primary  duration-300 transition-all text-center'
                                    // onClick={onclick} 
                                    >Add to Cart</button>
                              </div>
                            </div>
                        </div>)
                    }
                </div>
            </Container>
        </div>
    )
}

export default Trendyproducts