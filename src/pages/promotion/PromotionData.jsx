/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import PromotionCard from "./PromotionCard";

const PromotionData = ({ data }) => {
  const [pdata, setPdata] = useState({});
  console.log(data);
  const { eventPromotionPackages } = data;
  useEffect(() => {
    setPdata(eventPromotionPackages);
  }, [eventPromotionPackages]);

  return (
    <div>
      <div className="grid lg:grid-cols-3 grid-cols-1 text-center p-5 rounded-xl gap-5">
        {Array.isArray(pdata) ? (
          pdata?.map((item, index) => (
            <PromotionCard key={index} dataPromotion={item}></PromotionCard>
          ))
        ) : (
          <div>No data available</div>
        )}
      </div>
    </div>
  );
};

export default PromotionData;
