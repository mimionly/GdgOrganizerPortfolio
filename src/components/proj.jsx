import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow"; //for 3d effect
import { Navigation, Pagination, Autoplay, EffectCoverflow } from "swiper/modules";

export const Proj = () => {
  return (
    <div id="Project" className="w-full flex flex-col items-center py-6 md:py-12 bg-gray-50 px-4 sm:px-6 lg:px-8">
      {" "}
       <div className="container mx-auto  max-w-7xl px-4">
      <h2 className="
  text-4xl md:text-5xl lg:text-6xl 
  font-extrabold 
  mb-12 md:mb-16 
  text-center 
  text-black
">
  Achievements & Experiences

</h2>
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
        slidesPerView={1}
        centeredSlides={true}
        grabCursor={true}
        spaceBetween={16}
        slideToClickedSlide={true}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        effect={"coverflow"}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        }}
        navigation={true}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        breakpoints={{
          320: {
            slidesPerView: 1.1,
            spaceBetween: 12,
          },
          480: {
            slidesPerView: 1.2,
            spaceBetween: 16,
          },
          640: {
            slidesPerView: 1.5,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 24,
          },
          1024: {
            slidesPerView: 2.5,
            spaceBetween: 28,
          },
          1280: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
        className="w-full max-w-7xl !pb-12"
      >
        {/* Slide 1 */}
        <SwiperSlide className="!h-auto">
          <div className="relative h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px] xl:h-[500px] w-full rounded-xl overflow-hidden group shadow-lg transition-all duration-300 hover:shadow-xl">
            <img
              src="/ashley/image1.jpg"
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              alt="Google Crowdsource India Summit"
              loading="lazy"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-3 sm:p-4 md:p-5">
              <h3 className="text-white text-sm sm:text-base md:text-lg lg:text-xl font-bold mb-1 sm:mb-2 line-clamp-2">
                Google Crowdsource India Summit
              </h3>
              <p className="text-gray-200 text-xs sm:text-sm line-clamp-2 sm:line-clamp-3">
                Attended the Google Crowdsource India Summit—an enriching experience with insightful discussions on Generative AI, career growth, and responsible, community-driven AI.
              </p>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide className="!h-auto">
          <div className="relative h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px] xl:h-[500px] w-full rounded-xl overflow-hidden group shadow-lg transition-all duration-300 hover:shadow-xl">
            <img
              src="/ashley/image2.jpg"
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              alt="Organizing DevFest Mangalore"
              loading="lazy"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-3 sm:p-4 md:p-5">
              <h3 className="text-white text-sm sm:text-base md:text-lg lg:text-xl font-bold mb-1 sm:mb-2 line-clamp-2">
                Organizing DevFest Mangalore
              </h3>
              <p className="text-gray-200 text-xs sm:text-sm line-clamp-2 sm:line-clamp-3">
                Grateful to be part of the Organizing Committee for DevFest Mangalore by GDG Cloud Mangalore. Valuable exposure to large-scale event planning and coordination.
              </p>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 3 - Fixed title/alt mismatch */}
        <SwiperSlide className="!h-auto">
          <div className="relative h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px] xl:h-[500px] w-full rounded-xl overflow-hidden group shadow-lg transition-all duration-300 hover:shadow-xl">
            <img
              src="/ashley/image3.jpg"
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              alt="Back-to-Back Win at CaesarsEpilogue"
              loading="lazy"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-3 sm:p-4 md:p-5">
              <h3 className="text-white text-sm sm:text-base md:text-lg lg:text-xl font-bold mb-1 sm:mb-2 line-clamp-2">
                Back-to-Back Win at CaesarsEpilogue
              </h3>
              <p className="text-gray-200 text-xs sm:text-sm line-clamp-2 sm:line-clamp-3">
                Winning CaesarsEpilogue at Tiara '25 for the second year in a row. The event tested problem-solving and technical thinking under pressure.
              </p>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 4 */}
        <SwiperSlide className="!h-auto">
          <div className="relative h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px] xl:h-[500px] w-full rounded-xl overflow-hidden group shadow-lg transition-all duration-300 hover:shadow-xl">
            <img
              src="/ashley/image5.jpg"
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              alt="Code4Bharat Hackathon"
              loading="lazy"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-3 sm:p-4 md:p-5">
              <h3 className="text-white text-sm sm:text-base md:text-lg lg:text-xl font-bold mb-1 sm:mb-2 line-clamp-2">
                Code4Bharat: AI Innovation Hackathon
              </h3>
              <p className="text-gray-200 text-xs sm:text-sm line-clamp-2 sm:line-clamp-3">
                Top 5 finalist at AInnovation Hackathon – Code4Bharat. Pitched our idea to the jury and celebrated at the cultural night.
              </p>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 5 */}
        <SwiperSlide className="!h-auto">
          <div className="relative h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px] xl:h-[500px] w-full rounded-xl overflow-hidden group shadow-lg transition-all duration-300 hover:shadow-xl">
            <img
              src="/ashley/image4.jpg"
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              alt="Winter Hackathon 2026"
              loading="lazy"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-3 sm:p-4 md:p-5">
              <h3 className="text-white text-sm sm:text-base md:text-lg lg:text-xl font-bold mb-1 sm:mb-2 line-clamp-2">
                Winter Hackathon 2026
              </h3>
              <p className="text-gray-200 text-xs sm:text-sm line-clamp-2 sm:line-clamp-3">
                A vibrant platform for innovation and collaboration. Grateful to St Joseph Engineering College and The Sceptix Club for their support.
              </p>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 6 */}
        <SwiperSlide className="!h-auto">
          <div className="relative h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px] xl:h-[500px] w-full rounded-xl overflow-hidden group shadow-lg transition-all duration-300 hover:shadow-xl">
            <img
              src="/ashley/image6.jpg"
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              alt="HackToFuture 3.0"
              loading="lazy"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-3 sm:p-4 md:p-5">
              <h3 className="text-white text-sm sm:text-base md:text-lg lg:text-xl font-bold mb-1 sm:mb-2 line-clamp-2">
                HackToFuture 3.0
              </h3>
              <p className="text-gray-200 text-xs sm:text-sm line-clamp-2 sm:line-clamp-3">
                Organised a 36-hour hackathon in partnership with EG India. A celebration of ideas, learning, and community.
              </p>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 7 */}
        <SwiperSlide className="!h-auto">
          <div className="relative h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px] xl:h-[500px] w-full rounded-xl overflow-hidden group shadow-lg transition-all duration-300 hover:shadow-xl">
            <img
              src="/ashley/image9.jpg"
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              alt="Web3 Connect"
              loading="lazy"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-3 sm:p-4 md:p-5">
              <h3 className="text-white text-sm sm:text-base md:text-lg lg:text-xl font-bold mb-1 sm:mb-2 line-clamp-2">
                Web3 Connect: Blockchain Workshop
              </h3>
              <p className="text-gray-200 text-xs sm:text-sm line-clamp-2 sm:line-clamp-3">
                Introduced students to blockchain and Web3 through hands-on sessions exploring dApps and creating meta characters.
              </p>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 8 */}
        <SwiperSlide className="!h-auto">
          <div className="relative h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px] xl:h-[500px] w-full rounded-xl overflow-hidden group shadow-lg transition-all duration-300 hover:shadow-xl">
            <img
              src="/ashley/image8.jpg"
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              alt="TEDxSJEC Curator"
              loading="lazy"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-3 sm:p-4 md:p-5">
              <h3 className="text-white text-sm sm:text-base md:text-lg lg:text-xl font-bold mb-1 sm:mb-2 line-clamp-2">
                TEDxSJEC Curator
              </h3>
              <p className="text-gray-200 text-xs sm:text-sm line-clamp-2 sm:line-clamp-3">
                Curator for Chef Shriya Shetty, renowned for innovative culinary expertise blending tradition with modern techniques.
              </p>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 9 */}
        <SwiperSlide className="!h-auto">
          <div className="relative h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px] xl:h-[500px] w-full rounded-xl overflow-hidden group shadow-lg transition-all duration-300 hover:shadow-xl">
            <img
              src="/ashley/image10.jpg"
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              alt="4th Place at TCS Quiz"
              loading="lazy"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-3 sm:p-4 md:p-5">
              <h3 className="text-white text-sm sm:text-base md:text-lg lg:text-xl font-bold mb-1 sm:mb-2 line-clamp-2">
                4th Place at TCS Quiz
              </h3>
              <p className="text-gray-200 text-xs sm:text-sm line-clamp-2 sm:line-clamp-3">
                Secured 4th place in the Mangalore regional round at Sahyadri College. Proud to represent SJEC.
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
    </div>
  );
};