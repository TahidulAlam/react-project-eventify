/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Clock from "../../../../components/timer/Clock";

const EventDetails = () => {
  const [eventdetails, setEventdetails] = useState({});
  const paramsId = useParams();
  const eventDataDetails = useLoaderData();
  const arrayEvents = eventDataDetails.events;
  useEffect(() => {
    const singleEventData = arrayEvents.find(
      (seData) => seData.id === paramsId.id
    );

    setEventdetails(singleEventData);
  }, [paramsId, arrayEvents]);
  const {
    event_date,
    title,
    image_link,
    tagline,
    description,
    registration_last_date,
    location,
    entry_fee,
  } = eventdetails;
  return (
    <div className=" text-blue-800">
      <h1 className="text-center font-bold py-4 text-4xl text-blue-800">
        {title}
      </h1>
      <div className="flex flex-row items-center justify-center">
        <h1 className="text-center font-semibold text-xl">Event CountDown :</h1>
        <Clock deadline={event_date}></Clock>
      </div>

      <div className="grid grid-cols-2 gap-3 place-content-start w-[95%] mx-auto my-5">
        <div>
          <img className="rounded-lg" src={image_link} alt="" />
        </div>
        <div>
          <div className="text-start">
            <h1 className="font-bold text-3xl text-start">{tagline}</h1>
            <p className="text-slate-700 p-1">{description}</p>
            <div className="text-start">
              <div className="p-3">
                <p className="font-semibold text-lg text-yellow-400">
                  Event Date : {event_date}
                </p>
                <p className="text-blue-950">
                  Registration Last Date : {registration_last_date}
                </p>
                <p className="">Location : {location}</p>
                <p className="">Entry Fee: {entry_fee}</p>
              </div>
              <div className="flex items-start justify-start ">
                {/* <button className=""></button> */}
                <button
                  className="btn btn-outline btn-lg text-white hover:text-blue-800 hover:bg-white bg-blue-800  hover:border-blue-800 "
                  onClick={() =>
                    document.getElementById("my_modal_5").showModal()
                  }
                >
                  Registration Now
                </button>
                <dialog
                  id="my_modal_5"
                  className="modal modal-bottom sm:modal-middle"
                >
                  <div className="modal-box">
                    <h1 className="text-center font-bold py-4 text-4xl text-blue-800">
                      {title}
                    </h1>
                    <div className="modal-action">
                      <form method="dialog">
                        <button className="btn">Close</button>
                      </form>
                    </div>
                  </div>
                </dialog>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
