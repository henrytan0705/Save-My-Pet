import React from "react";
import { Link } from "react-router";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link
            to="/"
            className="text-xl font-bold text-gray-800 hover:text-red-500"
          >
            Save My Pet
          </Link>

          <div className="hidden md:flex space-x-4">
            <Link
              to="/howItWorks"
              className="text-gray-700 hover:text-red-500 transition"
            >
              How it Works?
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
              to="/login"
              className="text-gray-700 hover:text-red-500 transition"
            >
              Login
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
