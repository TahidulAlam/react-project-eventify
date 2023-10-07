/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import EventCard from "./EventCard";

const Event = ({ eventData }) => {
  // console.log(eventData);
  return (
    <div>
      <h1 className="text-center font-poppins font-bold text-3xl mt-14 p-10">
        Popular Event
      </h1>
      <div className="grid lg:grid-cols-3 grid-cols-1 md:grid-cols-2 gap-5">
        {eventData?.map((ev, index) => (
          <EventCard key={index} evCarddata={ev}></EventCard>
        ))}
      </div>
    </div>
  );
};

export default Event;
