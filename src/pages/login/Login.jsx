/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import { toast } from "react-hot-toast";
import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import {
  isValidEmail,
  isValidPassword,
} from "../../components/validation/validation";

import SocialAuth from "../../components/socialAuth/SocialAuth";

const Login = () => {
  const { signIn } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };
  const handleSignIn = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    if (isValidEmail(email)) {
      signIn(email, password)
        .then(() => {
          toast.success("Sign In seccessfully");
          navigate(location.state ? location.state : "/");
        })
        .catch((err) => toast.error("invalid input"));
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
        <div className="w-full p-6 m-auto bg-white lg:shadow-md md:shadow-md rounded-md  lg:max-w-xl">
          <h1 className="text-3xl font-semibold text-center text-blue-700 underline">
            Sign in
          </h1>
          <form className="mt-6" onSubmit={handleSignIn}>
            <div className="mb-2">
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-gray-800"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                className="block w-full px-4 py-2 mt-2 text-blue-700 bg-white border rounded-md focus:border-slate-400 focus:ring-slate-300 focus:outline-none focus:ring focus:ring-opacity-40"
                placeholder="Enter your Email"
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
            <a href="#" className="text-xs text-blue-600 hover:underline">
              Forget Password?
            </a>
            <div className="mt-6">
              <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-blue-700 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
                Login
              </button>
            </div>
          </form>

          <p className="mt-8 text-xs font-light text-center text-gray-700">
            Don't have an account?{" "}
            <Link
              to={"/registration"}
              className="font-medium text-blue-600 hover:underline"
            >
              Sign up{" "}
            </Link>
          </p>
          <SocialAuth></SocialAuth>
        </div>
      </div>
    </div>
  );
};

export default Login;
