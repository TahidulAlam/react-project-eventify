import React from "react";
import { Toaster } from "react-hot-toast";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import myRouter from "./router/Router";
import AuthProvider from "./provider/AuthProvider";
import "aos/dist/aos.css"; // Import the AOS CSS
import AOS from "aos";
AOS.init();
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={myRouter} />
      <Toaster />
    </AuthProvider>
  </React.StrictMode>
);
