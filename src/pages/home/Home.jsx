import { useLoaderData } from "react-router-dom";
import Slider from "./slider/Slider";
import Event from "./event/Event";
import Service from "./service/Service";
import CountUp from "react-countup";
import Clients from "./clients/Clients";
import { AiOutlineFieldTime } from "react-icons/ai";
import useAuth from "../../hooks/useAuth";

const Home = () => {
  const { user } = useAuth();
  console.log(user);
  const serviceData = useLoaderData();
  const newEvents = serviceData.eventsData.events;
  const newService = serviceData.serviceData.services;

  return (
    <div>
      <Slider eventData={newEvents}></Slider>
      <div className="bg-slate-50">
        <div className="mt-5">
          <Event eventData={newEvents}></Event>
        </div>
        <div className="mt-5">
          <Service serviceData={newService}></Service>
        </div>
        <div className="mt-5 w-5/6 mx-auto">
          <div className="flex justify-center items-center p-10">
            <AiOutlineFieldTime className="text-6xl text-blue-800" />
            <a className="font-semibold text-3xl text-blue-800 backdrop-filter">
              Eventify Service holder
            </a>
          </div>
          <div className="grid grid-cols-3 text-5xl gap-5">
            <div className="flex justify-center items-center bg-white p-16 rounded-lg">
              <CountUp start={0} end={250} duration={3}></CountUp>
            </div>
            <div className="flex justify-center items-center bg-white p-16 rounded-lg">
              <CountUp start={0} end={250} duration={3}></CountUp>
            </div>
            <div className="flex justify-center items-center bg-white p-16 rounded-lg">
              <CountUp start={0} end={250} duration={3}></CountUp>
            </div>
          </div>
        </div>
        <div className="mt-5 w-5/6 mx-auto p-5  rounded-lg ">
          <div className="flex justify-center items-center p-10 ">
            <AiOutlineFieldTime className="text-6xl text-blue-800" />
            <a className="font-semibold text-3xl text-blue-800 backdrop-filter ">
              Eventify Clients
            </a>
          </div>
          <Clients></Clients>
        </div>
      </div>
    </div>
  );
};

export default Home;
