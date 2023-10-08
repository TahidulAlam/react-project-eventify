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
      <div className="grid grid-cols-3 w-[95%] mx-auto gap-5 mb-10">
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
