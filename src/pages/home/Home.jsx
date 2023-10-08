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
      <div data-aos="flip-left" data-aos-duration="1000">
        <Slider eventData={newEvents}></Slider>
      </div>
      <div className="bg-slate-50">
        <div data-aos="zoom-in">
          <div className="mt-5">
            <div className="flex justify-center items-center p-10">
              <AiOutlineFieldTime className=" lg:text-6xl text-4xl text-blue-800" />
              <a className="font-semibold lg:text-3xl text-xl text-blue-800 backdrop-filter">
                Eventify Upcoming Event
              </a>
            </div>
            <Event eventData={newEvents}></Event>
          </div>
        </div>
        <div data-aos="zoom-in">
          <div className="mt-5">
            <div className="flex justify-center items-center p-10">
              <AiOutlineFieldTime className=" lg:text-6xl text-4xl text-blue-800" />
              <a className="font-semibold lg:text-3xl text-xl text-blue-800 backdrop-filter">
                Eventify Services
              </a>
            </div>
            <Service serviceData={newService}></Service>
          </div>
        </div>
        <div data-aos="zoom-in">
          <div className="mt-5 w-[95%] mx-auto">
            <div className="flex justify-center items-center p-10">
              <AiOutlineFieldTime className=" lg:text-6xl text-4xl text-blue-800" />
              <a className="font-semibold lg:text-3xl text-xl text-blue-800 backdrop-filter">
                Eventify Service holder
              </a>
            </div>
            <div className="grid lg:grid-cols-3 grid-cols-1 text-5xl gap-5">
              <div className="flex justify-center items-center bg-white p-16 rounded-lg flex-col gap-5">
                <h1 className="text-lg">Total Attendence</h1>
                <CountUp start={485} end={2850} duration={3}></CountUp>{" "}
              </div>
              <div className="flex justify-center items-center bg-white p-16 rounded-lg flex-col gap-5">
                <h1 className="text-lg">Total Campaign</h1>
                <CountUp start={860} end={1250} duration={3}></CountUp>{" "}
              </div>
              <div className="flex justify-center items-center bg-white p-16 rounded-lg flex-col gap-5">
                <h1 className="text-lg">Total Partner</h1>
                <CountUp start={700} end={250} duration={3}></CountUp>{" "}
              </div>
            </div>
          </div>
        </div>
        <div data-aos="zoom-in">
          <div className="mt-5 lg:w-[90%] w-[90%] mx-auto p-5  rounded-lg ">
            <div className="flex justify-center items-center p-10 ">
              <AiOutlineFieldTime className="lg:text-6xl text-4xl text-blue-800" />
              <a className="font-semibold lg:text-3xl text-xl text-blue-800 backdrop-filter ">
                Eventify Clients
              </a>
            </div>
            <Clients></Clients>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
