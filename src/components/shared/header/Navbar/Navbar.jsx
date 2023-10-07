/* eslint-disable no-unused-vars */
import React from "react";
import { Link, NavLink } from "react-router-dom";
import { AiOutlineFieldTime } from "react-icons/ai";
const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-blue-800 z-50 max-w-6xl mx-auto text-white">
        <div className="navbar w-[50%] flex-row lg:justify-start">
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
                  className={({ isActive }) =>
                    isActive ? "text-blue-700 bg-white" : " "
                  }
                >
                  News
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/event"}
                  className={({ isActive }) =>
                    isActive ? "text-blue-700 bg-white" : " "
                  }
                >
                  Event
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/service"}
                  className={({ isActive }) =>
                    isActive ? "text-blue-700 bg-white" : " "
                  }
                >
                  Service
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/blog"}
                  className={({ isActive }) =>
                    isActive ? "text-blue-700 bg-white" : " "
                  }
                >
                  Blog
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/contact"}
                  className={({ isActive }) =>
                    isActive ? "text-blue-700 bg-white" : " "
                  }
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
        <div className="navbar w-[50%] flex-row lg:justify-around justify-end">
          <ul className="menu menu-horizontal hidden lg:flex px-1 ">
            <li>
              <NavLink to={"/"}>home</NavLink>
            </li>
            <li>
              <NavLink to={"/about"}>about</NavLink>
            </li>
            <li>
              <NavLink to={"/event"}>Event</NavLink>
            </li>
            <li>
              <NavLink to={"/service"}>Service</NavLink>
            </li>
            <li>
              <NavLink to={"/blog"}>Blog</NavLink>
            </li>
            <li>
              <NavLink to={"/contact"}>Contact</NavLink>
            </li>
          </ul>
          <Link
            className="btn btn-outline bg-white text-blue-700"
            to={"/login"}
          >
            Log In
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;