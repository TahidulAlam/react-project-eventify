/* eslint-disable no-unused-vars */
import React from "react";
import CountUp from "react-countup";

const ServiceCounter = () => {
  return (
    <div>
      <div style={{ fontSize: "150px" }}>
        <CountUp start={0} end={150} duration={3} />
        <CountUp start={0} end={250} duration={3} />
      </div>
    </div>
  );
};

export default ServiceCounter;
