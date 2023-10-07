/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import ServiceCard from "./ServiceCard";

const Service = ({ serviceData }) => {
  return (
    <div>
      <h1 className="text-center font-poppins font-bold text-3xl mt-14 p-10">
        Our Service
      </h1>
      <div className="grid lg:grid-cols-3 grid-cols-1 md:grid-cols-2 gap-5">
        {serviceData?.map((svData, index) => (
          <ServiceCard key={index} svData={svData}></ServiceCard>
        ))}
      </div>
    </div>
  );
};

export default Service;
