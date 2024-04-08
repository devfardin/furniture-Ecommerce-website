import React, { useEffect, useState } from 'react'
import Container from '../../shared/Container'
import { BsCart3 } from "react-icons/bs";
import { IoHeartOutline } from "react-icons/io5";
import { AiOutlineRetweet } from "react-icons/ai";
import { LiaEyeSolid } from "react-icons/lia";
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
                        products.map((product, index) => <div key={index}
                            className='overflow-hidden group'>
                            {/* Product feature image */}
                            <div className='relative  overflow-hidden bg-[#D9D9D9]'>
                                <img className='rounded-md hover:scale-125 hover:rotate-6 w-full transition-all duration-300'
                                    src={product.featureImg} alt="Feature image" />
{/*  */}
                                <ul  className='flex -mb-16 text-pera hover:text-pera z-0 group-hover:-translate-y-24 transition-all duration-500 group-hover:flex  items-center justify-between gap-x-2 px-7'>
                                    <li className='p-4  group-scoped bg-white rounded-md group hover:bg-primary transition-all duration-300'>
                                        <BsCart3 className='text-3xl hover-color text-pera 
                                        transition-all duration-300' />
                                    </li>
                                    <li className='p-4 group-scoped bg-white rounded-md group hover:bg-primary transition-all duration-300'>
                                        <IoHeartOutline className='text-3xl hover-color text-pera 
                                        transition-all duration-300' />
                                    </li>
                                    <li className='p-4 group-scoped bg-white rounded-md group hover:bg-primary transition-all duration-300'>
                                        <AiOutlineRetweet className='text-3xl hover-color text-pera 
                                        transition-all duration-300'/>
                                    </li>
                                    <li className='p-4 group-scoped bg-white rounded-md group hover:bg-primary transition-all duration-300'>
                                        <IoHeartOutline className='text-3xl hover-color text-pera 
                                        transition-all duration-300'/>
                                    </li>
                                </ul>
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