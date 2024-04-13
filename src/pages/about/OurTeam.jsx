import React from 'react'
import Container from '../../components/shared/Container'
import TeamProfile from '../../assets/images/team11668539086.jpg'
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
const OurTeam = () => {
    return (
        <div className='mt-14 md:mt-20'>
            <Container>
                <div className='flex justify-between items-center gap-10'>
                    <div>
                        <h1 className='text-[32px] text-heading font-medium'>Out Team</h1>
                    </div>
                    <div className='flex items-center justify-between gap-3'>
                        <span className='border group border-[#dddddd] hover:border-primary  duration-300 transition-all p-3 cursor-pointer'>
                            <SlArrowLeft className='text-lg text-neutral-500 duration-300 transition-all group-hover:text-primary' />
                        </span>
                        <span className='border group border-[#dddddd] hover:border-primary  duration-300 transition-all p-3 cursor-pointer'>
                            <SlArrowRight className='text-lg text-neutral-500 duration-300 transition-all group-hover:text-primary' />
                        </span>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default OurTeam