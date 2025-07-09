import React, { useState, useEffect } from "react";
import { FiFilter, FiChevronDown, FiX } from "react-icons/fi";

const SearchBar = ({ onSearch, onFilterChange, placeholder = "Search" }) => {
    const [query, setQuery] = useState("");
    const [showFilters, setShowFilters] = useState(false);
    const [filters, setFilters] = useState({
        sort: "recent",
        animalType: "",
        breed: "",
        location: "",
        microchipped: ""
    });

    const animalTypes = ["Dog", "Cat", "Bird", "Rabbit", "Other"];
    const breeds = ["Labrador", "Persian", "German Shepherd", "Siamese", "Mixed"];
    const locations = ["Financial District", "Dumbo", "Harelem", "Upper East Side", "Upper West Side", "East Village",
     "West Village","Williamsburg", "SoHo", "GreenPoint", "Bushwick", "Tribeca"];

    useEffect(() => {
        const timerId = setTimeout(() => {
            onSearch(query);
            onFilterChange(filters);
        }, 500);

        return () => clearTimeout(timerId);
    }, [query, filters]);

    const handleFilterChange = (key, value) => {
        setFilters(prev => ({ ...prev, [key]: value }));
    };

    const clearFilter = (key) => {
        setFilters(prev => ({ ...prev, [key]: "" }));
    };

    return (
        <div className="mb-8 w-full">
            <div className="flex items-center gap-4">
                <label className="input bg-white border border-gray-300 rounded-lg flex items-center gap-2 px-4 py-3 w-full md:w-2/3 shadow-sm hover:shadow-md transition-shadow">
                    <svg
                        className="h-5 w-5 text-gray-400"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                    >
                        <circle cx="11" cy="11" r="8" />
                        <path d="m21 21-4.3-4.3" />
                    </svg>
                    <input
                        type="search"
                        className="flex-grow outline-none"
                        placeholder={placeholder}
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                    />
                </label>

                <button
                    onClick={() => setShowFilters(!showFilters)}
                    className="flex items-center gap-2 px-4 py-3 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
                >
                    <FiFilter className="h-5 w-5" />
                    <span>Filters</span>
                    <FiChevronDown className={`h-5 w-5 transition-transform ${showFilters ? "rotate-180" : ""}`} />
                </button>
            </div>

            {showFilters && (
                <div className="mt-4 p-6 bg-white rounded-lg shadow-md border border-gray-200">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Sort By</label>
                            <select
                                className="w-full p-2 border border-gray-300 rounded-md"
                                value={filters.sort}
                                onChange={(e) => handleFilterChange("sort", e.target.value)}
                            >
                                <option value="recent">Most Recent</option>
                                <option value="oldest">Oldest First</option>
                            </select>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Animal Type</label>
                            <div className="relative">
                                <select
                                    className="w-full p-2 border border-gray-300 rounded-md"
                                    value={filters.animalType}
                                    onChange={(e) => handleFilterChange("animalType", e.target.value)}
                                >
                                    <option value="">All Types</option>
                                    {animalTypes.map(type => (
                                        <option key={type} value={type}>{type}</option>
                                    ))}
                                </select>
                                {filters.animalType && (
                                    <button
                                        onClick={() => clearFilter("animalType")}
                                        className="absolute right-2 top-2 text-gray-500 hover:text-gray-700"
                                    >
                                        <FiX />
                                    </button>
                                )}
                            </div>
                        </div>

                        {/* Similar blocks for Breed, Location, and Microchipped */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Breed</label>
                            <div className="relative">
                                <select
                                    className="w-full p-2 border border-gray-300 rounded-md"
                                    value={filters.breed}
                                    onChange={(e) => handleFilterChange("breed", e.target.value)}
                                >
                                    <option value="">All Breeds</option>
                                    {breeds.map(breed => (
                                        <option key={breed} value={breed}>{breed}</option>
                                    ))}
                                </select>
                                {filters.breed && (
                                    <button onClick={() => clearFilter("breed")} className="absolute right-2 top-2 text-gray-500 hover:text-gray-700">
                                        <FiX />
                                    </button>
                                )}
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Microchipped</label>
                            <select
                                className="w-full p-2 border border-gray-300 rounded-md"
                                value={filters.microchipped}
                                onChange={(e) => handleFilterChange("microchipped", e.target.value)}
                            >
                                <option value="">Any</option>
                                <option value="yes">Yes</option>
                                <option value="no">No</option>
                            </select>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default SearchBar;