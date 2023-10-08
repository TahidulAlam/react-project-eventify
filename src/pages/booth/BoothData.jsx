/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import BoothCard from "./BoothCard";

const BoothData = ({ data }) => {
  const [boothdata, setBoothdata] = useState({});
  const { exhibitionBoothDesign } = data;
  useEffect(() => {
    setBoothdata(exhibitionBoothDesign);
  }, [exhibitionBoothDesign]);
  return (
    <div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 w-[95%] mx-auto gap-5 place-content-center">
        {Array.isArray(boothdata) ? (
          boothdata?.map((item, index) => (
            <BoothCard key={index} dataBooth={item}></BoothCard>
          ))
        ) : (
          <div>No data available</div>
        )}
      </div>
    </div>
  );
};

export default BoothData;
