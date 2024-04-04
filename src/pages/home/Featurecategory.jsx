import React from 'react'
import feature_cagegory1 from '../../assets/images/feature_cagegory1.png'
import feature_cagegory2 from '../../assets/images/feature_cagegory2.png'
import Container from '../../shared/Container'
import { Link } from 'react-router-dom'

const Featurecategory = () => {
    return (
        <div className='mt-16'>
            <Container>
                <div className='flex flex-col lg:flex-row gap-10 justify-between items-center'>
                    <div
                        className='px-10 bg-[#F0F1FA]'>
                        <div className='flex justify-between items-center gap-10'>
                            <div>
                                <h1 className='text-[42px] mb-2 text-heading font-semibold'>
                                    Furniture Collection
                                </h1>
                                <Link className='text-xl font-medium pb-2 border-b-[3px] border-heading'>
                                    Shop Now
                                </Link>
                            </div>
                            <div>
                                <img src={feature_cagegory1} alt="" />
                            </div>
                        </div>
                    </div>

                    <div className='px-10 bg-[#FAF6F2]'>
                        <div className='flex justify-between items-center gap-10'>
                            <div>
                                <h1 className='text-[42px] mb-2 text-heading font-semibold'>
                                    Plant Collection
                                </h1>
                                <Link className='text-xl font-medium pb-2 border-b-[3px] border-heading'>
                                    Shop Now
                                </Link>
                            </div>
                            <div>
                                <img src={feature_cagegory2} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </Container>

        </div>
    )
}

export default Featurecategory