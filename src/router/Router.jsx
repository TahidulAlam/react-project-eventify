/* eslint-disable no-dupe-keys */
/* eslint-disable no-unused-vars */
import React from "react";
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/home/Home";
import About from "../pages/about/About";
import Contact from "../pages/contact/Contact";
import Blog from "../pages/blog/Blog";
import Login from "../pages/login/Login";
import Registration from "../pages/registration/Registration";
import EventDetails from "../pages/home/event/eventDetails/EventDetails";
import ServiceDetails from "../pages/home/service/serviceDetails/ServiceDetails";
import Events from "../pages/events/Events";
import Services from "../pages/services/Services";
import PrivateRoute from "./PrivateRoute";

const myRouter = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: async () => {
          const eventsResponse = await fetch(
            "../../src/assets/data/events-data.json"
          );
          const serviceResponse = await fetch(
            "../../src/assets/data/service-data.json"
          );

          const eventsData = await eventsResponse.json();
          const serviceData = await serviceResponse.json();

          return { eventsData, serviceData };
        },
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/event",
        element: <Events></Events>,
        loader: async () => {
          const eventsResponse = await fetch(
            "../../src/assets/data/events-data.json"
          );
          const eventsData = await eventsResponse.json();
          return { eventsData };
        },
      },
      {
        path: "/services",
        element: <Services></Services>,
        loader: async () => {
          const serviceResponse = await fetch(
            "../../src/assets/data/service-data.json"
          );
          const serviceData = await serviceResponse.json();
          return { serviceData };
        },
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/registration",
        element: <Registration></Registration>,
      },
      {
        path: "/eventdetails/:id",
        element: (
          <PrivateRoute>
            <EventDetails></EventDetails>
          </PrivateRoute>
        ),
        loader: () => fetch("../../src/assets/data/events-data.json"),
      },
      {
        path: "/servicedetails/:id",
        element: (
          <PrivateRoute>
            <ServiceDetails></ServiceDetails>
          </PrivateRoute>
        ),
        loader: () => fetch("../../src/assets/data/service-data.json"),
      },
    ],
  },
]);

export default myRouter;
