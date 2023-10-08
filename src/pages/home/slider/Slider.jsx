/* eslint-disable react/prop-types */
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./slider.css";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
// import Clock from "../../../components/timer/Clock";

const Slider = ({ eventData }) => {
  return (
    <div>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        // navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {eventData.map((slide, index) => (
          <SwiperSlide key={index}>
            <img
              style={{ zIndex: "100" }}
              className="block w-[95%] rounded-md md:w-3/4 lg:w-75% xl:w-75% mx-auto h-500px sm:h-auto md:h-auto  rounded-10"
              src={slide.image_link}
              alt=""
            />
            <div className="hero-overlay absolute bg-[#002B84] rounded-md lg:h-[400px] w-[85%] mx-auto "></div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
