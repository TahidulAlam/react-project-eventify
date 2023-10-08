/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const VanueCard = ({ vanueData }) => {
  console.log(vanueData);
  return (
    <div>
      <div className="p-10 bg-white flex flex-col gap-2 mb-3 rounded-lg">
        <div>
          <h1 className="text-2xl p-5">
            Vanue Name :{" "}
            <span className="font-semibold text-slate-700 ">
              {vanueData.venueName}
            </span>{" "}
          </h1>
          <h1 className="p-1">
            Capacity:{" "}
            <span className="font-semibold text-slate-700">
              {vanueData.capacity}
            </span>{" "}
          </h1>
          <h1 className="p-1">
            Location:{" "}
            <span className="font-semibold text-slate-700 ">
              {" "}
              {vanueData.location}
            </span>
          </h1>
          <h1 className="p-1">
            Price:{" "}
            <span className="font-semibold text-slate-700">
              {" "}
              {vanueData.priceRange}
            </span>
          </h1>
          <button className="btn btn-sm btn-accent my-3">Book Now</button>
        </div>
      </div>
    </div>
  );
};

export default VanueCard;
