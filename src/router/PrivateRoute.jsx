/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { ThreeCircles } from "react-loader-spinner";
import useAuth from "../hooks/useAuth";
const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const loaction = useLocation();
  if (loading) {
    return (
      <div className="flex justify-center h-screen items-center">
        <ThreeCircles
          height="100"
          width="100"
          color="blue"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
          ariaLabel="three-circles-rotating"
          outerCircleColor=""
          innerCircleColor=""
          middleCircleColor=""
        />
      </div>
    );
  }
  if (!user?.email) {
    return <Navigate state={loaction.pathname} to="/login"></Navigate>;
  }
  return children;
};

export default PrivateRoute;
