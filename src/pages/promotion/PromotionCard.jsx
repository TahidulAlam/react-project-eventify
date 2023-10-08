/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const PromotionCard = ({ dataPromotion }) => {
  console.log(dataPromotion);
  const { name, budget, description } = dataPromotion;
  return (
    <div>
      <div className="bg-white p-5 mb-3 rounded-lg">
        <h1 className="font-semibold text-3xl text-red-600 p-2">{name}</h1>
        <hr />
        <div className="p-4 h-36">
          <h1 className="p-4 font-semibold text-2xl">{budget}</h1>
          <h1>{description}</h1>
        </div>
        <div className="flex justify-center items-center">
          <button className="btn btn-outline text-blue-800 hover:bg-blue-800">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default PromotionCard;
