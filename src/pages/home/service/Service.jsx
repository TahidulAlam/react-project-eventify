/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import ServiceCard from "./ServiceCard";

const Service = ({ serviceData }) => {
  return (
    <div>
      <div className="grid lg:grid-cols-3 grid-cols-1 md:grid-cols-2 gap-5 place-items-center  w-[95%] mx-auto">
        {serviceData?.map((svData, index) => (
          <ServiceCard key={index} svData={svData}></ServiceCard>
        ))}
      </div>
    </div>
  );
};

export default Service;
