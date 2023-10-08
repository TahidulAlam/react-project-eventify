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
            <img src={slide.image_link} alt="" />
            {/* <div className="absolute z-50">
              <div className="flex flex-col items-center justify-center  gap-2 glass rounded-lg p-5">
                <div>
                  <div className="mx-auto">
                    <img
                      style={{ height: "300px", width: "500px" }}
                      src={slide.image_link}
                      alt=""
                    />
                    <Clock deadline={slide.event_date}></Clock>
                  </div>
                </div>

                <h1 className="font-semibold text-4xl text-white ">
                  {slide.title}
                </h1>
                <button className="btn btn-outline bg-white">Join Now</button>
              </div>
            </div> */}

            <div className="hero-overlay absolute bg-[#002B84] rounded-md h-[400px] w-[85%] mx-auto "></div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
