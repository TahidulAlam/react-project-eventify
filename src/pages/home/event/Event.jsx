/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import EventCard from "./EventCard";
import { AiOutlineFieldTime } from "react-icons/ai";

const Event = ({ eventData }) => {
  // console.log(eventData);
  return (
    <div>
      <div className="flex justify-center items-center p-10">
        <AiOutlineFieldTime className="text-6xl text-blue-800" />
        <a className="font-semibold text-3xl text-blue-800 backdrop-filter">
          Eventify Upcoming Events
        </a>
      </div>
      <div className="grid lg:grid-cols-3 grid-cols-1 md:grid-cols-2 gap-5 place-items-center w-[95%] mx-auto">
        {eventData?.map((ev, index) => (
          <EventCard key={index} evCarddata={ev}></EventCard>
        ))}
      </div>
    </div>
  );
};

export default Event;
