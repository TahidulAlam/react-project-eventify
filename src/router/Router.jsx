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
import Error from "../pages/error/Error";

const fetchData = async (url) => {
  const response = await fetch(url);
  return response.json();
};

const routeConfig = [
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: async () => {
          const [eventsData, serviceData] = await Promise.all([
            fetchData("events-data.json"),
            fetchData("service-data.json"),
          ]);

          return { eventsData, serviceData };
        },
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/blog",
        element: (
          <PrivateRoute>
            <Blog></Blog>,
          </PrivateRoute>
        ),
      },
      {
        path: "/event",
        element: <Events></Events>,
        loader: async () => {
          const eventsData = await fetchData("events-data.json");
          return { eventsData };
        },
      },
      {
        path: "/services",
        element: <Services></Services>,
        loader: async () => {
          const serviceData = await fetchData("service-data.json");
          return { serviceData };
        },
      },
      {
        path: "/contact",
        element: (
          <PrivateRoute>
            <Contact></Contact>,
          </PrivateRoute>
        ),
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
        loader: () => fetchData("/events-data.json"),
      },
      {
        path: "/servicedetails/:id",
        element: (
          <PrivateRoute>
            <ServiceDetails></ServiceDetails>
          </PrivateRoute>
        ),
        loader: () => fetchData("/service-data.json"),
      },
    ],
  },
];

const myRouter = createBrowserRouter(routeConfig);

export default myRouter;
