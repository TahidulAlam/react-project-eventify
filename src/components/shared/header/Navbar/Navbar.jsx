/* eslint-disable no-unused-vars */
import React from "react";
import { Link, NavLink } from "react-router-dom";
import { AiOutlineFieldTime } from "react-icons/ai";
import useAuth from "../../../../hooks/useAuth";
import { signOut } from "firebase/auth";
const Navbar = () => {
  const { user, signInOut } = useAuth();
  return (
    <div>
      <div className="navbar bg-blue-800 z-50 max-w-7xl mx-auto text-white">
        <div className="navbar w-[30%] flex-row lg:justify-start">
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
              className="menu menu-lg dropdown-content mt-3 z-[120] p-2 bg-white rounded-box w-[250px]"
            >
              <li>
                <NavLink to={"/"} exact className="text-white">
                  home
                </NavLink>
              </li>
              <li>
                <NavLink to={"/about"} className="text-white">
                  about
                </NavLink>
              </li>
              <li>
                <NavLink to={"/event"} className="text-white">
                  Event
                </NavLink>
              </li>
              <li>
                <NavLink to={"/services"} className="text-white">
                  Services
                </NavLink>
              </li>
              <li>
                <NavLink to={"/blog"} className="text-white">
                  Blog
                </NavLink>
              </li>
              <li>
                <NavLink to={"/contact"} className="text-white">
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
          <div>
            <Link className="flex gap-3" to="/">
              <AiOutlineFieldTime className="text-4xl text-white" />
              <a className="normal-case text-3xl text-white backdrop-filter">
                Eventify
              </a>
            </Link>
          </div>
        </div>
        <div className="navbar w-[70%] flex-row lg:justify-around justify-end">
          <ul className="menu menu-horizontal hidden lg:flex px-1">
            <li>
              <NavLink to={"/"} exact className="text-white">
                home
              </NavLink>
            </li>
            <li>
              <NavLink to={"/about"} className="text-white">
                about
              </NavLink>
            </li>
            <li>
              <NavLink to={"/event"} className="text-white">
                Event
              </NavLink>
            </li>
            <li>
              <NavLink to={"/services"} className="text-white">
                Services
              </NavLink>
            </li>
            <li>
              <NavLink to={"/blog"} className="text-white">
                Blog
              </NavLink>
            </li>
            <li>
              <NavLink to={"/contact"} className="text-white">
                Contact
              </NavLink>
            </li>
          </ul>
          {user?.email ? (
            <div className="avatar flex justify-center items-center gap-2">
              <div className="avatar rounded-full border-white">
                <div className="w-10">
                  <img src={user.photoURL} alt={user.displayName} />
                </div>
              </div>
              <h1 className="whitespace-nowrap">{user.displayName}</h1>

              <button
                className="btn btn-outline bg-white text-blue-700"
                onClick={signInOut}
              >
                <h1 className="whitespace-nowrap">Log out</h1>
              </button>
            </div>
          ) : (
            <Link
              to={"/login"}
              className="btn btn-outline bg-white text-blue-700 "
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
