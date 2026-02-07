import {Swiper , SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow"; // for 3D effect
import { Navigation, Pagination, Autoplay, EffectCoverflow } from "swiper/modules";

export const Proj = () => {
  return (
    <div className="w-full flex justify-center py-12 bg-gray-50">
    <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
        //core center focus 
        slidesPerView ={1}
        centeredSlides ={true}
        grabCursor={true} 
        spaceBetween={30}
        slideToClickedSlide={true}
        loop={true}
        autoplay={{ 
            delay: 9000,
            disableOnInteraction: false,
            pauseOnMouseEnter:true,
        }}
        //COVERFLOW EFFECT for 3D carousel look
        effect={"coverflow"}
        coverflowEffect={{
          rotate:0,
          stretch:0,
          depth:100, //depth of 3d
          modifier: 1,
          slideShadows: false,
        }}
        //navigation and pagination
        navigation ={true} //enable next and prev buttons
        pagination={{
          clickable:true,
          dynamicBullets:true,
        }}
        breakpoints={{
          320: {
            slidesPerView: 1.2,    // Mobile: show partial next/prev
            spaceBetween: 20,
          },
          640: {
            slidesPerView: 2,      // Tablet
            spaceBetween: 25,
          },
          1024: {
            slidesPerView: 3,      // Desktop: 3 slides
            spaceBetween: 30,
          },
        }}  
        className="w-full max-w-5xl">
            <SwiperSlide>
  <div className="relative h-full w-full rounded-xl overflow-hidden group shadow-lg transition-all duration-300">
    <img 
      src="/ashley/image1.jpg" 
      className="h-full w-full object-cover"
      alt="TEDxSJEC Curator - Chef Shriya Shetty"
    />
    {/* Description Overlay */}
    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4  ">
      <h3 className="text-white text-xl font-bold mb-2">TEDxSJEC Curator - Chef Shriya Shetty</h3>
      <p className="text-gray-200 text-sm line-clamp-3">Privileged to be a part of TEDxSJEC as the curator for the esteemed Chef Shriya Shetty at TEDxSJEC, Chef Shriya is renowned for her innovative culinary expertise, blending traditional recipes with modern techniques while emphasizing sustainability and local flavors. Her inspiring journey in the culinary arts serves as a testament to passion and creativity. It has been an honor to collaborate with such a talented and visionary individual. </p>
    </div>
  </div>
</SwiperSlide>

         <SwiperSlide>
  <div className="relative h-full w-full rounded-xl overflow-hidden group shadow-lg transition-all duration-300">
    <img 
      src="/ashley/image2.jpg" 
      className="h-full w-full object-cover"
      alt="TEDxSJEC Curator - Chef Shriya Shetty"
    />
    {/* Description Overlay */}
    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4  ">
      <h3 className="text-white text-xl font-bold mb-2">TEDxSJEC Curator - Chef Shriya Shetty</h3>
      <p className="text-gray-200 text-sm line-clamp-3">Privileged to be a part of TEDxSJEC as the curator for the esteemed Chef Shriya Shetty at TEDxSJEC, Chef Shriya is renowned for her innovative culinary expertise, blending traditional recipes with modern techniques while emphasizing sustainability and local flavors. Her inspiring journey in the culinary arts serves as a testament to passion and creativity. It has been an honor to collaborate with such a talented and visionary individual. </p>
    </div>
  </div>
</SwiperSlide>
         <SwiperSlide>
  <div className="relative h-full w-full rounded-xl overflow-hidden group shadow-lg transition-all duration-300">
    <img 
      src="/ashley/image3.jpg" 
      className="h-full w-full object-cover"
      alt="TEDxSJEC Curator - Chef Shriya Shetty"
    />
    {/* Description Overlay */}
    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4  ">
      <h3 className="text-white text-xl font-bold mb-2">TEDxSJEC Curator - Chef Shriya Shetty</h3>
      <p className="text-gray-200 text-sm line-clamp-3">Privileged to be a part of TEDxSJEC as the curator for the esteemed Chef Shriya Shetty at TEDxSJEC, Chef Shriya is renowned for her innovative culinary expertise, blending traditional recipes with modern techniques while emphasizing sustainability and local flavors. Her inspiring journey in the culinary arts serves as a testament to passion and creativity. It has been an honor to collaborate with such a talented and visionary individual. </p>
    </div>
  </div>
</SwiperSlide>
        <SwiperSlide>
  <div className="relative h-full w-full rounded-xl overflow-hidden group shadow-lg transition-all duration-300">
    <img 
      src="/ashley/image4.jpg" 
      className="h-full w-full object-cover"
      alt="TEDxSJEC Curator - Chef Shriya Shetty"
    />
    {/* Description Overlay */}
    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4  ">
      <h3 className="text-white text-xl font-bold mb-2">TEDxSJEC Curator - Chef Shriya Shetty</h3>
      <p className="text-gray-200 text-sm line-clamp-3">Privileged to be a part of TEDxSJEC as the curator for the esteemed Chef Shriya Shetty at TEDxSJEC, Chef Shriya is renowned for her innovative culinary expertise, blending traditional recipes with modern techniques while emphasizing sustainability and local flavors. Her inspiring journey in the culinary arts serves as a testament to passion and creativity. It has been an honor to collaborate with such a talented and visionary individual. </p>
    </div>
  </div>
</SwiperSlide>
         <SwiperSlide>
  <div className="relative h-full w-full rounded-xl overflow-hidden group shadow-lg transition-all duration-300">
    <img 
      src="/ashley/image5.jpg" 
      className="h-full w-full object-cover"
      alt="TEDxSJEC Curator - Chef Shriya Shetty"
    />
    {/* Description Overlay */}
    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4  ">
      <h3 className="text-white text-xl font-bold mb-2">TEDxSJEC Curator - Chef Shriya Shetty</h3>
      <p className="text-gray-200 text-sm line-clamp-3">Privileged to be a part of TEDxSJEC as the curator for the esteemed Chef Shriya Shetty at TEDxSJEC, Chef Shriya is renowned for her innovative culinary expertise, blending traditional recipes with modern techniques while emphasizing sustainability and local flavors. Her inspiring journey in the culinary arts serves as a testament to passion and creativity. It has been an honor to collaborate with such a talented and visionary individual. </p>
    </div>
  </div>
</SwiperSlide>
         <SwiperSlide>
  <div className="relative h-full w-full rounded-xl overflow-hidden group shadow-lg transition-all duration-300">
    <img 
      src="/ashley/image6.jpg" 
      className="h-full w-full object-cover"
      alt="TEDxSJEC Curator - Chef Shriya Shetty"
    />
    {/* Description Overlay */}
    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4  ">
      <h3 className="text-white text-xl font-bold mb-2">TEDxSJEC Curator - Chef Shriya Shetty</h3>
      <p className="text-gray-200 text-sm line-clamp-3">Privileged to be a part of TEDxSJEC as the curator for the esteemed Chef Shriya Shetty at TEDxSJEC, Chef Shriya is renowned for her innovative culinary expertise, blending traditional recipes with modern techniques while emphasizing sustainability and local flavors. Her inspiring journey in the culinary arts serves as a testament to passion and creativity. It has been an honor to collaborate with such a talented and visionary individual. </p>
    </div>
  </div>
</SwiperSlide>  
  <SwiperSlide>
  <div className="relative h-full w-full rounded-xl overflow-hidden group shadow-lg transition-all duration-300">
    <img 
      src="/ashley/image7.jpg" 
      className="h-full w-full object-cover"
      alt="TEDxSJEC Curator - Chef Shriya Shetty"
    />
    {/* Description Overlay */}
    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4  ">
      <h3 className="text-white text-xl font-bold mb-2">TEDxSJEC Curator - Chef Shriya Shetty</h3>
      <p className="text-gray-200 text-sm line-clamp-3">Privileged to be a part of TEDxSJEC as the curator for the esteemed Chef Shriya Shetty at TEDxSJEC, Chef Shriya is renowned for her innovative culinary expertise, blending traditional recipes with modern techniques while emphasizing sustainability and local flavors. Her inspiring journey in the culinary arts serves as a testament to passion and creativity. It has been an honor to collaborate with such a talented and visionary individual. </p>
    </div>
  </div>
</SwiperSlide>
 <SwiperSlide>
  <div className="relative h-full w-full rounded-xl overflow-hidden group shadow-lg transition-all duration-300">
    <img 
      src="/ashley/image8.jpg" 
      className="h-full w-full object-cover"
      alt="TEDxSJEC Curator - Chef Shriya Shetty"
    />
    {/* Description Overlay */}
    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4  ">
      <h3 className="text-white text-xl font-bold mb-2">TEDxSJEC Curator - Chef Shriya Shetty</h3>
      <p className="text-gray-200 text-sm line-clamp-3">Privileged to be a part of TEDxSJEC as the curator for the esteemed Chef Shriya Shetty at TEDxSJEC, Chef Shriya is renowned for her innovative culinary expertise, blending traditional recipes with modern techniques while emphasizing sustainability and local flavors. Her inspiring journey in the culinary arts serves as a testament to passion and creativity. It has been an honor to collaborate with such a talented and visionary individual. </p>
    </div>
  </div>
</SwiperSlide>
    </Swiper>
    </div>
    );
};