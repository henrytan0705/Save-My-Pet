import React, { useState } from "react";
import { Link } from "react-router";
import faviconImage from "../assets/favicon-cropped.png";

const Navbar = () => {
    const[isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    // Map icon SVG component
    const MapIcon = ({ className = "" }) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`h-5 w-5 ${className}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
            />
        </svg>
    );
    const SearchIcon = ({ className = "" }) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`h-5 w-5 ${className}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
        </svg>
    );
    const DogHouseIcon = ({ className = "" }) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`h-5 w-5 ${className}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
            />
        </svg>
    );
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
            <div className="sm:px-2 lg:px-2 w-100%">
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
                    <div className="mobile-nav-toggle ml-auto mr-4">
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
                    <div className="desktop-nav-links hidden space-x-4 justify-end">
                    <Link
                        to="/about"
                         className="text-gray-700 hover:text-red-500 transition flex flex-row items-center justify-center justify-items-center"
                    >
                        About Us
                    </Link>

                        <Link
                            to="/map"
                            className="text-gray-700 hover:text-red-500 transition flex flex-row items-center justify-center justify-items-center"
                        >
                            <MapIcon className="mr-1" />
                            <span>Map</span>
                        </Link>
                        <Link
                            to="/lostPets"
                            className="text-gray-700 hover:text-red-500 transition flex flex-row items-center justify-center justify-items-center"
                        >
                            <SearchIcon className="mr-1" />
                            <span>Lost Pets</span>
                        </Link>
                        <Link
                            to="/foundPets"
                            className="text-gray-700 hover:text-red-500 transition flex flex-row items-center justify-center justify-items-center"
                        >
                            <DogHouseIcon className="mr-1" />
                            <span>Found Pets</span>
                        </Link>
                        <Link
                            to="/Communities"
                            className="text-gray-700 hover:text-red-500 transition flex flex-row items-center justify-center justify-items-center"
                        >
                            Communities
                        </Link>
                        <Link
                            to="/contact"
                            className="text-gray-700 hover:text-red-500 transition flex flex-row items-center justify-center justify-items-center"
                        >
                            Contact
                        </Link>
                        <Link
                            to="/report"
                            className="report-link text-lg my-0 text-center inline-flex items-center content-end justify-items-center justify-center hover:text-red-500 transition border-1 border-black bg-white rounded-md px-2"
                        >
                            Save My Pet
                        </Link>
                    </div>
                </div>

                {/* Mobile Menu (Shows when hamburger is clicked) */}
                {isMenuOpen && (
                    <div className="mobile-nav-menu bg-white pb-4">
                        <Link
                            to="/about"
                            className="py-2 text-gray-700 hover:text-red-500 transition flex flex-row justify-center justify-items-center"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            About Us
                        </Link>

                        <Link
                            className="text-gray-700 hover:text-red-500 transition flex flex-row justify-center justify-items-center mr-2"
                            onClick={(e) => {
                                e.preventDefault();
                                redirectToStaticPage();
                                setIsMenuOpen(false);
                            }} title="Map">
                            <MapIcon className="mr-2" />
                            <span >Map</span>
 
                        </Link>
                        <Link
                            to="/lostPets"
                            className="py-2 text-gray-700 hover:text-red-500 transition flex flex-row justify-center justify-items-center"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            <SearchIcon className="mr-1" />
                            <span>Lost Pets</span>
                        </Link>
                        <Link
                            to="/foundPets"
                            className="py-2 text-gray-700 hover:text-red-500 transition flex flex-row justify-center justify-items-center"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            <DogHouseIcon className="mr-1" />
                            <span>Found Pets</span>
                        </Link>
                        <Link
                            to="/Communities"
                            className="py-2 text-gray-700 hover:text-red-500 transition flex flex-row justify-center justify-items-center"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Communities
                        </Link>
                        <Link
                            to="/contact"
                            className="w-full py-2 hover:text-red-500 transition flex flex-row justify-center justify-items-center"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Contact
                        </Link>
                        <Link
                            to="/report"
                            className="report-link w-25 px-0 py-2 self-center text-gray-700 hover:text-red-500 transition border-1 border-black bg-white rounded-md mx-0 flex flex-row justify-center justify-items-center "
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

