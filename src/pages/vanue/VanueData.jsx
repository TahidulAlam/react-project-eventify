/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import VanueCard from "./VanueCard";

const VanueData = ({ data }) => {
  const { eventVenueRental } = data;
  console.log(eventVenueRental);
  return (
    <div>
      <div className="grid lg:grid-cols-3 grid-cols-1 gap-5 m-4 text-center ">
        {Object.keys(eventVenueRental).map((city) => (
          <div key={city} className="bg-slate-100 p-5">
            <h2 className="font-semibold text-center text-xl p-2">{city}</h2>
            {eventVenueRental[city].map((venue, index) => (
              <VanueCard key={index} vanueData={venue}></VanueCard>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default VanueData;
