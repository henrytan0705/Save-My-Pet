import React from "react";
import { Link } from "react-router";
import faviconImage from "../assets/favicon-cropped.png";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 right-0 z-50 w-100% ">
      <div className="color: #000000; w-100% flex text-right justify-end">
        <Link
          to="/login"
          className="text-gray-700 hover:text-red-500 transition mt-px-2 mx-2"
        >
          Log In
        </Link>
      </div>
      <div className="max-w-7xl sm:px-2 lg:px-0 w-100%">
        <div className="flex flex-row items-center h-16 w-full grow-3">
          <Link
            to="/"
            className="text-xl font-bold text-gray-800 hover:text-red-500 w-900px grow-2 inline-flex items-center"
          >
            <img
              src={faviconImage}
              alt="favicon"
              className="w-60px h-[60px] object-cover round-none"
            />
            Save My Pet
          </Link>

          <div className="hidden md:flex space-x-4 justify-end justify-items-end content-end items-end">
            <Link
              to="/aboutUs"
              className="text-gray-700 hover:text-red-500 transition"
            >
              About Us
            </Link>
            <Link
              to="/lostPets"
              className="text-gray-700 hover:text-red-500 transition"
            >
              Lost Pets
            </Link>
            <Link
              to="/foundPets"
              className="text-gray-700 hover:text-red-500 transition"
            >
              Found Pets
            </Link>
            <Link
              to="/Communities"
              className="text-gray-700 hover:text-red-500 transition"
            >
              Communities
            </Link>
            <Link
              to="/contact"
              className="text-gray-700 hover:text-red-500 transition"
            >
              Contact
            </Link>
            <Link
              to="/report"
              className="report-link text-lg my-0 text-center inline-flex items-end content-end justify-items-center justify-center  hover:text-red-500 transition border-1 border-black bg-white rounded-md px-2"
            >
              Save My Pet
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
