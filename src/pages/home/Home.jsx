import { useLoaderData } from "react-router-dom";
import Slider from "./slider/Slider";
import Event from "./event/Event";
import Service from "./service/Service";

const Home = () => {
  const serviceData = useLoaderData();
  const newEvents = serviceData.eventsData.events;
  const newService = serviceData.serviceData.services;

  return (
    <div>
      <div className="max-w-6xl mx-auto">
        <Slider eventData={newEvents}></Slider>
        <div className="mt-5">
          <Event eventData={newEvents}></Event>
        </div>
        <div className="mt-5">
          <Service serviceData={newService}></Service>
        </div>
      </div>
    </div>
  );
};

export default Home;
