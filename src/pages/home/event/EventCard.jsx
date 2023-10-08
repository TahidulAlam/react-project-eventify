/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";

const EventCard = ({ evCarddata }) => {
  const { id, title, tagline, image_link, event_date, entry_fee, description } =
    evCarddata;
  return (
    <div>
      <div>
        <div className="card card-compact w-auto bg-base-100 h-[400px]">
          <figure>
            <img src={image_link} alt="event" />
          </figure>

          <div className="card-body">
            <div className="flex justify-between items-center">
              <h2 className="card-title">{title}</h2>
              <h1 className="whitespace-nowrap">{event_date}</h1>
            </div>
            <p>{description.slice(0, 100)}...</p>
            <div className="card-actions justify-end">
              <Link
                className="btn btn-outline bg-blue-800 text-white "
                to={`/eventdetails/${id}`}
              >
                Join Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
