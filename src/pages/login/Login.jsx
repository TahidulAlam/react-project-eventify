/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import {
  isValidEmail,
  isValidPassword,
} from "../../components/validation/validation";

import SocialAuth from "../../components/socialAuth/SocialAuth";

const Login = () => {
  const { signIn } = useAuth();
  const handleSignIn = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    if (isValidEmail(email)) {
      signIn(email, password)
        .then(() => alert("log in successfullly"))
        .catch((err) => console.log(err));
    } else {
      return alert("not a valid input");
    }
  };
  return (
    <div>
      <div
        className="relative flex flex-col justify-center min-h-screen
      overflow-hidden bg-slate-100"
      >
        <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl">
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
              />
            </div>
            <div className="mb-2">
              <label
                htmlFor="password"
                className="block text-sm font-semibold text-gray-800"
              >
                Password
              </label>
              <input
                type="password"
                name="password"
                className="block w-full px-4 py-2 mt-2 text-blue-700 bg-white border rounded-md focus:border-slate-400 focus:ring-slate-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
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
