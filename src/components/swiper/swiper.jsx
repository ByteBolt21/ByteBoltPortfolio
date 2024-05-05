import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import 'swiper/css/effect-fade';
import './styles.css';
import Testimonial from '../Testimonial';

export default function SwiperComponent() {
  const breakpoints = {
    // when window width is >= 768px (md)

    1024: {
      slidesPerView: 3,
    },
    768: {
      slidesPerView: 2,
    },
    // when window width is >= 640px (sm)
    640: {
      slidesPerView: 1,
    },
  };

  return (
    <>
      <Swiper
        spaceBetween={30}
        loop={true}
        autoplay={true}
        navigation={true}
        modules={[Navigation, Autoplay]}
        className="mySwiper"
        breakpoints={breakpoints}
      >
        <SwiperSlide><Testimonial /></SwiperSlide>
        <SwiperSlide><Testimonial /></SwiperSlide>
        <SwiperSlide><Testimonial /></SwiperSlide>
        <SwiperSlide><Testimonial /></SwiperSlide>
        <SwiperSlide><Testimonial /></SwiperSlide>
        <SwiperSlide><Testimonial /></SwiperSlide>
        <SwiperSlide><Testimonial /></SwiperSlide>
        <SwiperSlide><Testimonial /></SwiperSlide>
      </Swiper>
    </>
  );
}
