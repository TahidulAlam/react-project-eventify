/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const SpeakerCard = ({ dataSpeaker }) => {
  const { speakerName, topic, availability, fee, image } = dataSpeaker;
  return (
    <div>
      <div className=" flex flex-col">
        <div className="bg-white rounded-lg py-3 text-center h-[400px]">
          <div className="photo-wrapper p-2">
            <img
              className="w-32 object-cover h-32 rounded-full mx-auto"
              src={image}
              alt="John Doe"
            />
          </div>
          <div className="p-2">
            <h3 className="text-center text-lg text-gray-900 font-medium leading-8">
              {speakerName}
            </h3>
            <div className="text-center text-gray-400 text-base font-semibold">
              <p>{topic}</p>
            </div>
            <table className="text-lg my-3">
              <tbody>
                <tr>
                  <td className="px-2 py-2 text-gray-500 font-semibold">Fee</td>
                  <td className="px-2 py-2">{fee}</td>
                  <td className="px-2 py-2">{availability}</td>
                </tr>
              </tbody>
            </table>

            <div className="text-center my-3">
              <button className="btn btn-outline">Contact now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpeakerCard;
