/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import VanueData from "../../../vanue/VanueData";
import PromotionData from "../../../promotion/PromotionData";
import HackatonData from "../../../hackaton/HackatonData";
import GamingData from "../../../gaming/GamingData";
import SpeakerData from "../../../speker/SpeakerData";
import BoothData from "../../../booth/BoothData";

const ServiceDetails = () => {
  const [service, setService] = useState({});
  const paramId = useParams();
  const serviceDetails = useLoaderData();
  console.log(paramId);
  const arraryService = serviceDetails.services;
  console.log(arraryService);
  useEffect(() => {
    const singleServiceData = arraryService.find(
      (servData) => servData.id === paramId.id
    );
    setService(singleServiceData);
  }, [paramId, arraryService]);

  const { id } = service;
  return (
    <div className=" text-blue-800 bg-slate-100">
      <h1 className="text-center font-bold py-4 lg:text-4xl text-2xl text-blue-800">
        {service.title}
      </h1>
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-3 place-content-start w-[95%] mx-auto my-5">
        <div>
          <img className="rounded-lg" src={service.image} alt="" />
        </div>
        <div>
          <div className="text-start">
            <p className="text-slate-700 p-1 text-xl font-semibold">
              {service.description}
            </p>
            <p className="text-slate-700 p-1">{service.details}</p>
            <div className="text-start">
              <div className="p-3">
                <p className="">Cost: {service.price}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        {id === "1" ? (
          <VanueData data={service}></VanueData>
        ) : id === "2" ? (
          <PromotionData data={service}></PromotionData>
        ) : id === "3" ? (
          <HackatonData data={service}></HackatonData>
        ) : id === "4" ? (
          <GamingData data={service}></GamingData>
        ) : id === "5" ? (
          <SpeakerData data={service}></SpeakerData>
        ) : id === "6" ? (
          <BoothData data={service}></BoothData>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default ServiceDetails;
