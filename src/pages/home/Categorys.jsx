import Container from '../../components/shared/Container'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// ImportSwiper styles
import 'swiper/css';
import 'swiper/css/navigation';
// import required modules
import { Navigation } from 'swiper/modules';
import { useEffect, useState } from 'react';
const Categorys = () => {
  const [categorys, setCategorys]=useState([])
  const [loading, setLoading]=useState(false)
  useEffect(()=>{
        setLoading(true)
        fetch('./category.json')
        .then((res)=> res.json())
        .then(data=> {
          setCategorys(data)
          setLoading(false)
        })
  },[])
  return (
    <div className='mt-24'>
      <Container>
      <Swiper
        slidesPerView={2}
        spaceBetween={10}
        breakpoints={{
          640: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          992: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
          1400: {
            slidesPerView: 5,
            spaceBetween: 20,
          },
        }}
        modules={[Navigation]}
        navigation={true}
        // loop={true}
        className="mySwiper">
            {
              categorys.map((category,index)=>     <SwiperSlide>
              <div className='border border-[rgba(221, 221, 221, 0.5)] px-2 py-6'>
                <img src={category.image} className='w-full' alt="" />
                <h2 className='text-2xl font-medium text-heading my-4 text-center'>{category.category}</h2>
                <h3 className='text-xl font-normal text-pera text-center'>{category.num_items} Items</h3>
              </div>
        </SwiperSlide> )
            }
       
      </Swiper>
      </Container>
    </div>
  )
}

export default Categorys