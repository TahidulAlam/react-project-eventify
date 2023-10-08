/* eslint-disable no-unused-vars */
import React from "react";
import CountUp from "react-countup";

const ServiceCounter = () => {
  return (
    <div>
      <div style={{ fontSize: "150px" }}>
        <CountUp start={20} end={150} duration={4} />
      </div>
    </div>
  );
};

export default ServiceCounter;
