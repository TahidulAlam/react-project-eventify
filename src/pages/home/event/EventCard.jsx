/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const EventCard = ({ evCarddata }) => {
  //   console.log(evCarddata);
  const {
    title,
    tagline,
    image_link,
    event_date_time,
    entry_fee,
    description,
  } = evCarddata;
  console.log(title);
  return (
    <div>
      <div>
        <div className="card card-compact w-96 bg-base-100 shadow-xl h-[420px]">
          <figure>
            <img src={image_link} alt="event" />
          </figure>
          <div className="card-body">
            <div className="flex justify-between">
              <h2 className="card-title">{title}</h2>
              <h1 className="whitespace-nowrap">{event_date_time}</h1>
            </div>
            <p>{description.slice(0, 100)}...</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Join Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
