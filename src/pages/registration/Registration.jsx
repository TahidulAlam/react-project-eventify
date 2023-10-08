/* eslint-disable no-unused-vars */
// import React, { useContext } from "react";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import {
  isValidEmail,
  isValidPassword,
} from "../../components/validation/validation";
import SocialAuth from "../../components/socialAuth/SocialAuth";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Registration = () => {
  const { createUser } = useAuth();
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };
  const handleCreateUser = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    if (isValidEmail(email) && isValidPassword(password)) {
      createUser(email, password)
        .then(() => toast.success("account create seccessfully"))
        .catch((err) => console.log(err));
    } else {
      return toast.error("invalid input");
    }
  };
  return (
    <div>
      <div
        className="relative flex flex-col justify-center min-h-screen
      overflow-hidden lg:bg-slate-100 md:bg-slate-100 bg-white"
      >
        <div className="w-full p-6 m-auto bg-white rounded-md lg:shadow-md md:shadow-md  lg:max-w-xl">
          <h1 className="text-3xl font-semibold text-center text-blue-700 underline">
            Sign Up
          </h1>
          <form className="mt-6" onSubmit={handleCreateUser}>
            <div className="mb-2">
              <label
                htmlFor="name"
                className="block text-sm font-semibold text-gray-800"
              >
                Name
              </label>
              <input
                type="name"
                name="name"
                className="block w-full px-4 py-2 mt-2 text-blue-700 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                placeholder="Enter your full Nsame"
              />
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-gray-800"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                className="block w-full px-4 py-2 mt-2 text-blue-700 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-2">
              <label
                htmlFor="password"
                className="block text-sm font-semibold text-gray-800"
              >
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  className="block w-full px-4 py-2 mt-2 text-blue-700 bg-white border rounded-md focus:border-slate-400 focus:ring-slate-300 focus:outline-none focus:ring focus:ring-opacity-40"
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="absolute inset-y-0 right-0 px-3 flex items-center focus:outline-none"
                >
                  {showPassword ? (
                    <FaEyeSlash className="text-gray-500" />
                  ) : (
                    <FaEye className="text-gray-500" />
                  )}
                </button>
              </div>
            </div>
          </form>

          <p className="mt-8 text-xs font-light text-center text-gray-700">
            {" "}
            Already Have an account?{" "}
            <Link
              to={"/login"}
              className="font-medium text-blue-600 hover:underline"
            >
              Log In
            </Link>
          </p>
          <SocialAuth></SocialAuth>
        </div>
      </div>
    </div>
  );
};

export default Registration;
