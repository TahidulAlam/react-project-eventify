/* eslint-disable no-unused-vars */
import React from "react";
import Event from "../home/event/Event";
import { useLoaderData } from "react-router-dom";

const Events = () => {
  const eventData = useLoaderData();
  const newEvents = eventData.eventsData.events;
  return (
    <div>
      <div className="bg-slate-100">
        <Event eventData={newEvents}></Event>
      </div>
    </div>
  );
};

export default Events;
