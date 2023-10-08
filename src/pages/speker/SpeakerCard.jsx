/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const SpeakerCard = ({ dataSpeaker }) => {
  const { speakerName, topic, availability, fee, image } = dataSpeaker;
  return (
    <div>
      <div className=" flex flex-col">
        <div className="bg-white rounded-lg py-3 text-center h-80 flex flex-col">
          <div className="photo-wrapper p-2 grow">
            <img
              className="w-32 object-cover h-32 rounded-full mx-auto"
              src={image}
              alt="John Doe"
            />
          </div>
          <div className="p-2 grow">
            <h3 className="text-center text-lg text-gray-900 font-medium leading-8">
              {speakerName}
            </h3>
            <div className="text-center text-gray-400 text-base font-semibold">
              <p>{topic}</p>
            </div>
          </div>
          <div className="text-center my-3 grow">
            <button className="btn btn-outline">Contact now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpeakerCard;
