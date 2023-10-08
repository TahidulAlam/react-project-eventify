/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { BsCheckLg } from "react-icons/bs";
const HackatonCard = ({ datahackathon }) => {
  const { name, description, benefits } = datahackathon;
  return (
    <div>
      <div>
        <div className="bg-white p-5 rounded-lg h-[420px] mt-10 mb-10 flex flex-col">
          <h1 className="font-semibold bg-blue-800 rounded-lg text-xl text-white p-2 text-center">
            {name}
          </h1>
          <hr />
          <div className=" flex-1">
            {" "}
            {/* Apply flex-1 to make this div grow */}
            <p className="font-semibold p-4">
              Description:
              <span className="font-normal text-slate-800">{description}</span>
            </p>
            <div>
              <h1 className="font-semibold p-4">Benefits:</h1>
              <p className=" text-slate-800 flex">
                <BsCheckLg className="text-lg font-semibold" />
                {benefits[0]}
              </p>
              <p className=" text-slate-800 flex">
                <BsCheckLg className="text-lg font-semibold" /> {benefits[1]}
              </p>
              <p className=" text-slate-800 flex ">
                <BsCheckLg className="text-lg font-semibold" /> {benefits[2]}
              </p>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <button className="btn btn-outline text-blue-800 hover:bg-blue-800">
              Book Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HackatonCard;
