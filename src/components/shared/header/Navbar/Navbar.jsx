/* eslint-disable no-unused-vars */
import React from "react";
import { Link, NavLink } from "react-router-dom";
import { AiOutlineFieldTime } from "react-icons/ai";
import useAuth from "../../../../hooks/useAuth";
import { signOut } from "firebase/auth";

const Navbar = () => {
  const { user, signInOut } = useAuth();
  // const handleSignOut = (signInOut) => {
  //   signOut(signInOut)
  //     .then(() => {
  //       console.log("sign out successfully");
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };
  return (
    <div>
      <div className="navbar bg-blue-800 z-50 max-w-7xl mx-auto text-white">
        <div className="navbar w-[40%] flex-row lg:justify-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-md dropdown-content mt-3 z-[1] p-2 rounded-box w-auto"
            >
              <li>
                <NavLink
                  to={"/news"}
                  activeClassName="bg-white text-blue-700"
                  className="text-white"
                >
                  News
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/event"}
                  activeClassName="bg-white text-blue-700"
                  className="text-white"
                >
                  Event
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/services"}
                  activeClassName="bg-white text-blue-700"
                  className="text-white"
                >
                  services
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/blog"}
                  activeClassName="bg-white text-blue-700"
                  className="text-white"
                >
                  Blog
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/contact"}
                  activeClassName="bg-white text-blue-700"
                  className="text-white"
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="flex gap-3">
            <AiOutlineFieldTime className="text-4xl text-white" />
            <a className="normal-case text-3xl text-white backdrop-filter">
              Eventify
            </a>
          </div>
        </div>
        <div className="navbar w-[60%] flex-row lg:justify-around justify-end">
          <ul className="menu menu-horizontal hidden lg:flex px-1">
            <li>
              <NavLink
                to={"/"}
                exact
                activeClassName="bg-white text-blue-700"
                className="text-white"
              >
                home
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/about"}
                activeClassName="bg-white text-blue-700"
                className="text-white"
              >
                about
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/event"}
                activeClassName="bg-white text-blue-700"
                className="text-white"
              >
                Event
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/services"}
                activeClassName="bg-white text-blue-700"
                className="text-white"
              >
                Services
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/blog"}
                activeClassName="bg-white text-blue-700"
                className="text-white"
              >
                Blog
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/contact"}
                activeClassName="bg-white text-blue-700"
                className="text-white"
              >
                Contact
              </NavLink>
            </li>
          </ul>
          {user?.email ? (
            <button
              className="btn btn-outline bg-white text-blue-700 w-40"
              onClick={signInOut}
            >
              <div className="avatar flex justify-center items-center gap-2">
                <div className="avatar rounded-full">
                  <div className="w-10">
                    <img src={user.photoURL} alt="" />
                  </div>
                </div>
                <h1 className="whitespace-nowrap">Log out</h1>
              </div>
            </button>
          ) : (
            <Link
              to={"/login"}
              className="btn btn-outline bg-white text-blue-700 w-40"
            >
              Log In
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
