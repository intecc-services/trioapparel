import React from 'react'

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import "./styles.css";
import 'swiper/css/effect-cards';
import { FreeMode, Pagination, EffectCards } from "swiper";
import { images } from '../../general';

const MyCarousel = () => {
  return (
    <div className='mycarousel-our-products'>
        {/* MyCarousel */}
        <Swiper
        breakpoints={{
          300: {
            // width: 576,
            slidesPerView: 2,
            spaceBetween : 10
          },
          768: {
            // width: 768,
            slidesPerView: 3,
            spaceBetween : 30
          },
        }}
        // slidesPerView={3}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        {
            images.map((item)=>{
                return <SwiperSlide className='our-carousel-item'><img src={item} alt='not found' className='our-carousel-item-img'/></SwiperSlide>
            })
        }
      </Swiper>
    </div>
  )
}

export default MyCarousel