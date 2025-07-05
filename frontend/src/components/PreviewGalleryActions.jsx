import React from "react";
import { Link } from "react-router";

const PreviewGalleryActions = ({ showAllLink }) => {
    const MapIcon = ({ className = "" }) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`h-10 w-10 ${className}`}
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

    const redirectToStaticPage = () => {
        window.location.href = "/map.html";
    };

    return (
        <div className="flex flex-row justify-evenly items-center max-w-7xl mx-auto px-4 py-4 bg-gray-50">
            {/* Map Icon */}
            <button
                onClick={redirectToStaticPage}
                className="flex items-center text-gray-700 hover:text-red-500 transition"
                title="Map"
            >
                <MapIcon className="mr-1" />
            </button>

            {/* Show All Button */}
            <Link
                to={showAllLink}
                className="px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300 transition-colors"
            >
                Show All
            </Link>

            {/* Save Lost Pet Button */}
            <Link
                to="/Report"
                className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
            >
                Save My Pet
            </Link>
        </div>
    );
};

export default PreviewGalleryActions;