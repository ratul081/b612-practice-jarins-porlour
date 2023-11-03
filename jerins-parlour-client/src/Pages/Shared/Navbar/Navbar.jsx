import React from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../../assets/icons/logo.png";
const Navbar = () => {
  const location = useLocation();

  let backgroundColor;
  if (location.pathname === "/") {
    backgroundColor = "#FFF8F5";
  } else {
    backgroundColor = ""; // Default background color
  }
  const menuItems = (
    <>
      <li>
        <Link className="text-xl font-semibold">Home</Link>
      </li>
      <li>
        <Link className="text-xl font-semibold">Our Portfolio</Link>
      </li>
      <li>
        <Link className="text-xl font-semibold">Our Team </Link>
      </li>
      <li>
        <Link className="text-xl font-semibold">Contact Us</Link>
      </li>
    </>
  );
  return (
    <div style={{ backgroundColor }} className="navbar pt-4 pb-4">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
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
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            {menuItems}
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-xl">
          <img src={logo} className="w-32" alt=" " />
        </a>
      </div>
      <div className="navbar-center hidden lg:flex"></div>
      <div className="navbar-end">
        <ul className="flex gap-x-6 mx-8 px-1">{menuItems}</ul>
        <Link to="/login" className="btn btn-primary normal-case px-8">
          Login
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
