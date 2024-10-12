import React, { useState } from 'react'
import feature_cagegory1 from '../../assets/images/feature_cagegory1.png'
import feature_cagegory2 from '../../assets/images/feature_cagegory2.png'
import Container from '../../components/shared/Container'
import { Link } from 'react-router-dom'
import QuickShowProduct from '../../components/QuickShowProduct'
const Featurecategory = () => {
    return (
        <div className='mt-16'>
            <Container>
                <div className='flex flex-col lg:flex-row gap-5 justify-between items-center'>

                    <div className='flex justify-between items-center gap-10 px-10 bg-[#F0F1FA] py-7'>
                        <div>
                            <h1 className='text-[42px] mb-2 text-heading font-semibold'>
                                Furniture Collection
                            </h1>
                            <Link className='text-base font-medium pb-1 border-b-2 border-heading hover:text-primary hover:border-primary transition-all duration-200'>
                                Shop Now
                            </Link>
                        </div>
                        <div>
                            <img width='94%' className='w-'
                                src={feature_cagegory1} alt="" />
                        </div>
                    </div>

                    <div className='flex justify-between items-center gap-10 px-10 bg-[#FAF6F2] py-7'>
                        <div>
                            <h1 className='text-[42px] mb-2 text-heading font-semibold'>
                                Plant Collection
                            </h1>
                            <Link className='text-base font-medium pb-1 border-b-2 border-heading hover:text-primary hover:border-primary transition-all duration-200'>
                                Shop Now
                            </Link>
                        </div>
                        <div>
                            <img width='100%' className='w-full'
                                src={feature_cagegory2} alt="Feature Category" />
                        </div>
                    </div>
                </div>

            </Container>

        </div>
    )
}

export default Featurecategory