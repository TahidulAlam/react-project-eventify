/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const PromotionCard = ({ dataPromotion }) => {
  console.log(dataPromotion);
  const { name, budget, description } = dataPromotion;
  return (
    <div>
      <div className="bg-white p-5 mb-3 rounded-lg">
        <h1 className="font-semibold text-xl text-red-600 p-2">{name}</h1>
        <hr />
        <div className="p-4 h-36">
          <h1>{budget}</h1>
          <h1>{description}</h1>
        </div>
      </div>
    </div>
  );
};

export default PromotionCard;
