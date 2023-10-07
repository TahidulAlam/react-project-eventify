/* eslint-disable react/prop-types */
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./slider.css";

// import required modules
import { Pagination, Navigation } from "swiper/modules";

const Slider = ({ eventData }) => {
  // console.log(eventData);
  return (
    <div>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {eventData.map((slide, index) => (
          <SwiperSlide key={index}>
            <img src={slide.image_link} alt="" />
            <div className="absolute z-50">
              <div className="flex flex-col items-center justify-center  gap-2 glass rounded-lg p-5">
                <div>
                  <div className="mx-auto">
                    <img
                      style={{ height: "300px", width: "500px" }}
                      src={slide.image_link}
                      alt=""
                    />
                  </div>
                </div>

                <h1 className="font-semibold text-4xl text-white ">
                  {slide.title}
                </h1>
                <button className="btn btn-outline bg-white">Join Now</button>
              </div>
            </div>

            <div className="hero-overlay absolute bg-blue-950 opacity-70 rounded-md h-[500px] w-[full]"></div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
