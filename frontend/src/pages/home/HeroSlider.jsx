import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
// import required modules
import { Navigation } from 'swiper/modules';

import heroImage from '../../assets/images/heroslider.png'
import Container from '../../components/shared/Container'
import OutlineButton from '../../components/shared/OutlineButton';
import LinkButton from '../../components/shared/LinkButton';
const HeroSlider = () => {

    const carousel = [
        {
            title: ' Decorate your home ',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat pulvinar enim hendrerit pellentesque Pharetra consectetur quam.',
            button: 'Show Now',
            image: heroImage,

        },
        {
            title: ' Decorate your home ',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat pulvinar enim hendrerit pellentesque Pharetra consectetur quam.',
            button: 'Show Now',
            image: heroImage,

        },
    ];

    const handleShowButton=()=>{
      alert('hi')
    }

  return (
 <div className='bg-bg'>
     <Container>
     <Swiper navigation={true}  modules={[Navigation]} className="mySwiper">
      {
        carousel.map((items, index)=><SwiperSlide key={index}>
          <div className='py-20 px-10  md:px-20 lg:px-28 flex flex-col-reverse lg:flex-row gap-10 items-center justify-between '>
          <div>
          <h1 className='text-4xl md:text-5xl lg:text-6xl cursor-pointer w-full lg:max-w-lg mb-5 lg:leading-[74px] font-semibold hover:text-primary text-heading'>{items.title}</h1>
            <p className='text-xl font-normal text-pera w-full lg:max-w-lg mb-10'>{items.description}</p>
            <LinkButton fullWidth={false} label='Shop Now' link='/shop'/>
          </div>
          <div>
            <img src={items.image} alt="" />
          </div>
          </div>
        </SwiperSlide>)        
      }
        
      </Swiper>
  </Container>
 </div>
  )
}

export default HeroSlider