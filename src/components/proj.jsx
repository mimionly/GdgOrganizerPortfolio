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
      alt="Google Crowdsource India Summit: Learning, Contributing, Growing"
    />
    {/* Description Overlay */}
    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4  ">
      <h3 className="text-white text-xl font-bold mb-2">Google Crowdsource India Summit: Learning, Contributing, Growing</h3>
      <p className="text-gray-200 text-sm line-clamp-3">Attended the Google Crowdsource India Summit—an enriching experience with insightful discussions on Generative AI, career growth, and responsible, community-driven AI. A highlight was contributing hands-on to the IndicLLM Arena, working on language models tailored to India’s diverse linguistic and cultural landscape. Truly motivating and impactful. </p>
    </div>
  </div>
</SwiperSlide>

         <SwiperSlide>
  <div className="relative h-full w-full rounded-xl overflow-hidden group shadow-lg transition-all duration-300">
    <img 
      src="/ashley/image2.jpg" 
      className="h-full w-full object-cover"
      alt="Organizing DevFest Mangalore with GDG Cloud"
    />
    {/* Description Overlay */}
    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4  ">
      <h3 className="text-white text-xl font-bold mb-2">Organizing DevFest Mangalore with GDG Cloud</h3>
      <p className="text-gray-200 text-sm line-clamp-3">Grateful to be part of the Organizing Committee for DevFest Mangalore by GDG Cloud Mangalore. The experience offered valuable exposure to large-scale event planning, coordination, and teamwork, and highlighted the power of community-driven collaboration. Truly thankful for the learning and the amazing team.</p>
    </div>
  </div>
</SwiperSlide>
         <SwiperSlide>
  <div className="relative h-full w-full rounded-xl overflow-hidden group shadow-lg transition-all duration-300">
    <img 
      src="/ashley/image3.jpg" 
      className="h-full w-full object-cover"
      alt="4th Place at TCS Quiz — Mangalore Region"
    />
    {/* Description Overlay */}
    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4  ">
      <h3 className="text-white text-xl font-bold mb-2">Back-to-Back Win at CaesarsEpilogue (Tiara ’25)</h3>
      <p className="text-gray-200 text-sm line-clamp-3">Privileged to be a part of TEDxSJEC as the curator for the esteemed Chef Shriya Shetty at TEDxSJEC, Chef Shriya is renowned for her innovative culinary expertise, blending traditional recipes with modern techniques while emphasizing sustainability and local flavors. Her inspiring journey in the culinary arts serves as a testament to passion and creativity. It has been an honor to collaborate with such a talented and visionary individual. </p>
    </div>
  </div>
</SwiperSlide>
        <SwiperSlide>
  <div className="relative h-full w-full rounded-xl overflow-hidden group shadow-lg transition-all duration-300">
    <img 
      src="/ashley/image5.jpg" 
      className="h-full w-full object-cover"
      alt="Code4Bharat: AInnovation Hackathon Experience"
    />
    {/* Description Overlay */}
    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4  ">
      <h3 className="text-white text-xl font-bold mb-2">Code4Bharat: AInnovation Hackathon Experience</h3>
      <p className="text-gray-200 text-sm line-clamp-3">An unforgettable experience at the AInnovation Hackathon – Code4Bharat with my amazing teammates. From being selected in the top 5 to becoming finalists, pitching our idea to the jury, and celebrating at the cultural night—it was truly special. Grateful to Microsoft India and Kyndryl for the opportunity. </p>
    </div>
  </div>
</SwiperSlide>
         <SwiperSlide>
  <div className="relative h-full w-full rounded-xl overflow-hidden group shadow-lg transition-all duration-300">
    <img 
      src="/ashley/image4.jpg" 
      className="h-full w-full object-cover"
      alt="Winter Hackathon 2026: Impact Beyond the Event"
    />
    {/* Description Overlay */}
    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4  ">
      <h3 className="text-white text-xl font-bold mb-2">Winter Hackathon 2026: Impact Beyond the Event</h3>
      <p className="text-gray-200 text-sm line-clamp-3">The event was a vibrant platform for innovation, collaboration, and problem-solving, creating lasting memories and strong professional connections.
We’re grateful to St Joseph Engineering College, Mangaluru, the management and leadership, faculty mentors, The Sceptix Club, organizers, judges, volunteers, and participants for their trust, support, and dedication in making the hackathon a meaningful success.</p>
    </div>
  </div>
</SwiperSlide>
         <SwiperSlide>
  <div className="relative h-full w-full rounded-xl overflow-hidden group shadow-lg transition-all duration-300">
    <img 
      src="/ashley/image6.jpg" 
      className="h-full w-full object-cover"
      alt="HackToFuture 3.0: Building Innovation Together"
    />
    {/* Description Overlay */}
    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4  ">
      <h3 className="text-white text-xl font-bold mb-2">HackToFuture 3.0: Building Innovation Together</h3>
      <p className="text-gray-200 text-sm line-clamp-3">Organising HackToFuture 3.0, a 36-hour hackathon in partnership with EG India, was an incredible milestone filled with innovation, collaboration, and creativity. Grateful to my fellow organizers for their dedication, the leadership at EG A/S and EG India for their mentorship, and the management of St Joseph Engineering College, Mangaluru for their constant support. A special shoutout to The Sceptix Club for ensuring seamless execution. More than a hackathon—it was a celebration of ideas, learning, and community.</p>
    </div>
  </div>
</SwiperSlide>  
  <SwiperSlide>
  <div className="relative h-full w-full rounded-xl overflow-hidden group shadow-lg transition-all duration-300">
    <img 
      src="/ashley/image9.jpg" 
      className="h-full w-full object-cover"
      alt="Web3 Connect: Introducing Blockchain to Students"
    />
    {/* Description Overlay */}
    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4  ">
      <h3 className="text-white text-xl font-bold mb-2">Web3 Connect: Introducing Blockchain to Students</h3>
      <p className="text-gray-200 text-sm line-clamp-3">Web3 Connect introduced students to blockchain and Web3 through an interactive, hands-on session at St Joseph Engineering College, Mangaluru. Led by industry experts, participants explored dApps, blockchain fundamentals, and even created their own meta characters. Thanks to everyone who made the session engaging and impactful</p>
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
<SwiperSlide>
  <div className="relative h-full w-full rounded-xl overflow-hidden group shadow-lg transition-all duration-300">
    <img 
      src="/ashley/image10.jpg" 
      className="h-full w-full object-cover"
      alt="4th Place at TCS Quiz — Mangalore Region"
    />
    {/* Description Overlay */}
    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4  ">
      <h3 className="text-white text-xl font-bold mb-2">4th Place at TCS Quiz — Mangalore Region</h3>
      <p className="text-gray-200 text-sm line-clamp-3">Secured 4th place in the Mangalore regional round of the TCS Quiz at Sahyadri College. Representing SJEC was an honor, and the experience was truly rewarding. Grateful for the opportunity and excited for more such experiences ahead </p>
    </div>
  </div>
</SwiperSlide>

    </Swiper>
    </div>
    );
};