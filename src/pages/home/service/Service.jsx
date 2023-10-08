/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import ServiceCard from "./ServiceCard";
// import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
// import "swiper/css";
// import "swiper/css/pagination";
// import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { AiOutlineFieldTime } from "react-icons/ai";

const Service = ({ serviceData }) => {
  return (
    <div>
      <div className="flex justify-center items-center p-10">
        <AiOutlineFieldTime className="text-6xl text-blue-800" />
        <a className="font-semibold text-3xl text-blue-800 backdrop-filter">
          Eventify Services
        </a>
      </div>

      <div className="grid lg:grid-cols-3 grid-cols-1 md:grid-cols-2 gap-5 place-items-center  w-[95%] mx-auto">
        {serviceData?.map((svData, index) => (
          <ServiceCard key={index} svData={svData}></ServiceCard>
        ))}
      </div>
      {/* <Swiper
        slidesPerView={3}
        spaceBetween={30}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {serviceData?.map((svData, index) => (
          <SwiperSlide style={{ borderRadius: "20px" }} key={index}>
            <ServiceCard key={index} svData={svData}></ServiceCard>
          </SwiperSlide>
        ))}
      </Swiper> */}
      {/* <ServiceCard ></ServiceCard> */}
    </div>
  );
};

export default Service;
