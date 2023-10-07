/* eslint-disable no-unused-vars */
import React from "react";
import Header from "../components/shared/header/Header";
import { Outlet } from "react-router-dom";
import Footer from "../components/shared/footer/Footer";

const MainLayout = () => {
  return (
    <div className="max-w-6xl mx-auto font-poppins">
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
