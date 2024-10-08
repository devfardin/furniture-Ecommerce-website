import React from 'react'
import Container from '../../components/shared/Container'
import TeamProfile from '../../assets/images/team11668539086.jpg'
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";

import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
// import required modules
import 'swiper/css/pagination';
import { Navigation, Autoplay } from 'swiper/modules';

const OurTeam = () => {
    const team = [
        {
            name: ' Abraham Lincon ',
            title: ' Chairman ',
            prifile: TeamProfile,
        },
        {
            name: 'Brook Listner',
            title: '  Manager  ',
            prifile: TeamProfile,
        },
        {
            name: ' Abraham Lincon ',
            title: ' Chairman ',
            prifile: TeamProfile,
        },
        {
            name: 'Brook Listner',
            title: '  Manager  ',
            prifile: TeamProfile,
        },
        {
            name: ' Abraham Lincon ',
            title: ' Chairman ',
            prifile: TeamProfile,
        },
        {
            name: 'Brook Listner',
            title: '  Manager  ',
            prifile: TeamProfile,
        },
    ]
    return (
        <div className='mt-14 md:mt-20'>
            <Container>
                <div className='flex justify-between items-center gap-10'>
                    <div>
                        <h1 className='text-[32px] text-heading font-medium'>Out Team</h1>
                    </div>
                    <div className='flex items-center justify-between gap-3'>
                        <span className='border arrow-right group border-[#dddddd] hover:border-primary  duration-300 transition-all p-3 cursor-pointer'>
                            <SlArrowLeft className='text-lg text-neutral-500 duration-300 transition-all group-hover:text-primary' />
                        </span>
                        <span className='border group arrow-left border-[#dddddd] hover:border-primary  duration-300 transition-all p-3 cursor-pointer'>
                            <SlArrowRight className='text-lg  text-neutral-500 duration-300 transition-all group-hover:text-primary' />
                        </span>
                    </div>
                </div>
                <div className='mt-10'>

                    <Swiper
                        slidesPerView={1}
                        spaceBetween={10}
                        pagination={{
                            clickable: true,
                        }}
                       
                        breakpoints={{
                            640: {
                                slidesPerView: 2,
                                spaceBetween: 10,
                            },
                            768: {
                                slidesPerView: 3,
                                spaceBetween: 15,
                            },
                            1024: {
                                slidesPerView: 3,
                                spaceBetween: 20,
                            },
                        }}
                        autoplay={{
                            delay: 2000,
                            disableOnInteraction: false,
                          }}

                        loop={true}
                        modules={[Navigation, Autoplay]}
                       
                        navigation={{ nextEl: ".arrow-left", prevEl: ".arrow-right" }}
                        
                        className="mySwiper">
                        {
                            team.map((item, index) => <SwiperSlide>
                                <div className='border border-[#e9e9e9] p-4'>
                                <img className='w-full' src={item.prifile} alt="" />
                                <div className='mt-3'>
                                    <h1 className='text-2xl font-medium text-heading'>{item.name}</h1>
                                    <h4 className='text-base font-normal text-pera'>{item.title}</h4>
                                </div>
                                </div>
                            </SwiperSlide>)
                        }
                    </Swiper>
                </div>
            </Container>
        </div>
    )
}

export default OurTeam