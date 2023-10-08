/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { BsCheckLg } from "react-icons/bs";
const GamingCard = ({ Gametourdata }) => {
  const { name, description, equipment, services } = Gametourdata;
  return (
    <div>
      <div className="bg-white p-5 flex flex-col h-full">
        <div className="bg-blue-800 rounded-lg flex-grow">
          <h1 className="font-semibold lg:text-2xl text-xl p-5 text-center text-white">
            {name}
          </h1>
        </div>
        <div className="flex flex-col gap-2 py-2 flex-grow">
          <h1 className="font-semibold ">Description:</h1>
          <h1 className="text-black">{description}</h1>
        </div>
        <div className="flex flex-col gap-3 flex-grow">
          <h1 className="font-semibold">Equipment:</h1>
          <h1 className="flex items-center gap-2">
            <BsCheckLg /> {equipment[0]}
          </h1>
          <h1 className="flex items-center gap-2">
            {" "}
            <BsCheckLg /> {equipment[1]}
          </h1>
          <h1 className="flex items-center gap-2">
            <BsCheckLg /> {equipment[2]}
          </h1>
          <h1 className="flex items-center gap-2">
            <BsCheckLg /> {equipment[3]}
          </h1>
          <h1 className="flex items-center gap-2">
            <BsCheckLg /> {equipment[4]}
          </h1>
        </div>
        <div className="flex-grow">
          <h1 className="font-bold pt-2">Services</h1>
          <h1 className="flex items-center gap-2">
            <BsCheckLg /> {services[0]}
          </h1>
          <h1 className="flex items-center gap-2">
            {" "}
            <BsCheckLg /> {services[1]}
          </h1>
          <h1 className="flex items-center gap-2">
            <BsCheckLg /> {services[2]}
          </h1>
          <h1 className="flex items-center gap-2">
            <BsCheckLg /> {services[3]}
          </h1>
        </div>
        <div className="flex justify-center items-center flex-grow mt-3">
          <button className="btn btn-outline text-blue-800 hover:bg-blue-800">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default GamingCard;
