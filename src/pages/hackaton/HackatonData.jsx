/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import HackatonCard from "./HackatonCard";

const HackatonData = ({ data }) => {
  const [datahackaton, setDatahackaton] = useState({});
  // console.log(data);
  const { hackathonSupport } = data;
  console.log(hackathonSupport);
  useEffect(() => {
    setDatahackaton(hackathonSupport);
  }, [hackathonSupport]);
  return (
    <div>
      <div className="grid lg:grid-cols-3 grid-col-1 w-[95%] mx-auto lg:gap-5 gap-3 lg:mb-10">
        {Array.isArray(datahackaton) ? (
          datahackaton?.map((item, index) => (
            <HackatonCard key={index} datahackathon={item}></HackatonCard>
          ))
        ) : (
          <div>No data available</div>
        )}
      </div>
    </div>
  );
};

export default HackatonData;
