import {Swiper , SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import "swiper/css/pagination";
export const Proj = () => {
  return (
    <Swiper
        modules={[Pagination]}
        slidesPerView ={3}
        centeredSlider ={true}
        pagination={{ clickable: true }}
        spaceBetween={20}
        loop={true}
        >
            <SwiperSlide>
                <img src="/image1" alt=""/>
            </SwiperSlide>
            <SwiperSlide>
                <img src="/image2" alt=""/>
            </SwiperSlide>
            <SwiperSlide>
                <img src="/image3" alt=""/>
            </SwiperSlide>         
    </Swiper>
    );
};