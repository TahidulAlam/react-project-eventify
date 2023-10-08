/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import EventCard from "./EventCard";

const Event = ({ eventData }) => {
  return (
    <div>
      <div className="grid lg:grid-cols-3 grid-cols-1 md:grid-cols-2 gap-5 place-items-center w-[95%] mx-auto">
        {eventData?.map((ev, index) => (
          <EventCard key={index} evCarddata={ev}></EventCard>
        ))}
      </div>
    </div>
  );
};

export default Event;
