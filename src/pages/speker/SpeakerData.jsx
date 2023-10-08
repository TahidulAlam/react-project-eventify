/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import SpeakerCard from "./SpeakerCard";

const SpeakerData = ({ data }) => {
  const [speakerdata, setSpeakerdata] = useState({});
  const { techConferenceSpeakerBooking } = data;
  useEffect(() => {
    setSpeakerdata(techConferenceSpeakerBooking);
  }, [techConferenceSpeakerBooking]);

  return (
    <div>
      <div className="grid grid-cols-3 gap-5 place-content-center w-[95%] mx-auto my-10">
        {Array.isArray(speakerdata) ? (
          speakerdata?.map((item, index) => (
            <SpeakerCard key={index} dataSpeaker={item}></SpeakerCard>
          ))
        ) : (
          <div>No data available</div>
        )}
      </div>
    </div>
  );
};

export default SpeakerData;
