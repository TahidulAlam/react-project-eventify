/* eslint-disable no-unused-vars */
import React from "react";
import Event from "../home/event/Event";
import Service from "../home/service/Service";
import { useLoaderData } from "react-router-dom";

const Services = () => {
  const serviceData = useLoaderData();
  const newService = serviceData.serviceData.services;

  return (
    <div className="bg-slate-100">
      <div className="">
        <Service serviceData={newService}></Service>
      </div>
    </div>
  );
};

export default Services;
