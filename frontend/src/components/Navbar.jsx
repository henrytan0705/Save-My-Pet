import React, { useState } from "react";
import { Link } from "react-router";
import faviconImage from "../assets/favicon-cropped.png";

const Navbar = () => {
    const[isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    return (
        <nav className="bg-white shadow-md fixed top-0 left-0 right-0 z-50 w-full ">
            <div className="color: #000000; w-full flex text-right justify-end">
                <Link
                    to="/login"
                    className="text-gray-700 hover:text-red-500 transition mt-px-2 mx-2"
                >
                    Log In
                </Link>
            </div>
            <div className="max-w-7xl sm:px-2 lg:px-2 w-100%">
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

                    {/* Hamburger Button (Mobile Only) */}
                    <div className="md:hidden ml-auto mr-4">
                        <button
                            onClick={toggleMenu}
                            className="nav-button text-gray-700 hover:text-blue-500 focus:outline-none bg-transparent"
                            aria-label="Toggle menu"
                        >
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                {isMenuOpen ? (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                ) : (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                )}
                            </svg>
                        </button>
                    </div>

                    {/* Desktop Navigation (Hidden on Mobile) */}
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
                            className="report-link text-lg my-0 text-center inline-flex items-end content-end justify-items-center justify-center hover:text-red-500 transition border-1 border-black bg-white rounded-md px-2"
                        >
                            Save My Pet
                        </Link>
                    </div>
                </div>

                {/* Mobile Menu (Shows when hamburger is clicked) */}
                {isMenuOpen && (
                    <div className="md:hidden bg-white pb-4 space-y-2 flex flex-col justify-center text-center">
                        <Link
                            to="/aboutUs"
                            className="block py-2 text-gray-700 hover:text-red-500 transition"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            About Us
                        </Link>
                        <Link
                            to="/lostPets"
                            className="block py-2 text-gray-700 hover:text-red-500 transition"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Lost Pets
                        </Link>
                        <Link
                            to="/foundPets"
                            className="block py-2 text-gray-700 hover:text-red-500 transition"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Found Pets
                        </Link>
                        <Link
                            to="/Communities"
                            className="block py-2 text-gray-700 hover:text-red-500 transition"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Communities
                        </Link>
                        <Link
                            to="/contact"
                            className="block w-full py-2 hover:text-red-500 transition"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Contact
                        </Link>
                        <Link
                            to="/report"
                            className="report-link w-25 px-0 py-2 self-center text-gray-700 hover:text-red-500 transition border-1 border-black bg-white rounded-md mx-0"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Save My Pet
                        </Link>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
