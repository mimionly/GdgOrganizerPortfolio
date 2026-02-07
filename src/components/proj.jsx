import {Swiper , SwiperSlide} from "swiper-react";
import "swiper/css";
import { Pagination } from "swiper";
import "swiper/css/pagination";
export default function Proj() {
    return (
    <Swiper
        slidesPerView ={3}
        centeredSlider ={true}
        spaceBetween={20}
        loop={true}
        >
            <SwiperSlide>
                <img src=" " alt=""/>
            </SwiperSlide>
            <SwiperSlide>
                <img src="" alt=""/>
            </SwiperSlide>
            <SwiperSlide>
                <img src="" alt=""/>
            </SwiperSlide>         
    </Swiper>
    );
} 