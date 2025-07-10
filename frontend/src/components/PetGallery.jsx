import React, { useState, useEffect, useCallback } from "react";
import { FiFilter, FiChevronDown, FiX } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const PetGallery = ({
  title = "Pets",
  subtitle = "",
  isPreview = false,
  statusFilter = "Lost", // Can be "Lost", "Endangered", or "Rescued"
  showGridControls = false,
  className = "",
  showSearchBar = true,
}) => {
  const [pets, setPets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [debouncedSearchQuery, setDebouncedSearchQuery] = useState(searchQuery);
  const searchInputRef = React.useRef(null);
  const navigate = useNavigate();
  const [filters, setFilters] = useState({
    sort: "recent",
    animalType: "",
    breed: "",
    location: "",
    microchipped: "",
  });
  const [debouncedFilters, setDebouncedFilters] = useState(filters);
  const [showFilters, setShowFilters] = useState(false);

  const gridOptions = [
    { cols: 3, rows: 3, label: "3×3" },
    { cols: 3, rows: 6, label: "3×6" },
    { cols: 5, rows: 6, label: "5×6" },
  ];

  const [gridSize, setGridSize] = useState(gridOptions[0]);

  // Status colors mapping
  const statusColors = {
    lost: "bg-red-500",
    endangered: "bg-orange-500",
    rescued: "bg-blue-400",
    found: "bg-green-500", // Added for "Found" status
  };

  // Debounce effect for search
  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedSearchQuery(searchQuery);
    }, 1000);

    return () => {
      clearTimeout(timerId);
    };
  }, [searchQuery]);
  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedFilters(filters);
    }, 500);

    return () => {
      clearTimeout(timerId);
    };
  }, [filters]);
  const fetchPets = useCallback(async () => {
    try {
      setLoading(true);
      const params = new URLSearchParams();

      // Handle status filter
      if (Array.isArray(statusFilter)) {
        statusFilter.forEach((status) => params.append("status", status));
      } else {
        params.append("status", statusFilter);
      }
      if (isPreview) params.append("limit", "3");
      if (debouncedSearchQuery)
        params.append("search", encodeURIComponent(debouncedSearchQuery));
      if (debouncedFilters.sort) params.append("sort", debouncedFilters.sort);
      if (debouncedFilters.animalType)
        params.append("animalType", debouncedFilters.animalType.toLowerCase());
      if (debouncedFilters.breed)
        params.append("breed", debouncedFilters.breed);
      if (debouncedFilters.location)
        params.append("location", debouncedFilters.location);
      if (debouncedFilters.microchipped)
        params.append("microchipped", debouncedFilters.microchipped);

      const response = await fetch(
        `${import.meta.env.VITE_API_ENDPOINT_URL}/api/posts?${params}`
      );
      if (!response.ok) throw new Error(`HTTP error: ${response.status}`);

      const data = await response.json();
      setPets(data);
    } catch (err) {
      console.error("Fetch error:", err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, [statusFilter, isPreview, debouncedSearchQuery, debouncedFilters]);

  useEffect(() => {
    fetchPets();
  }, [fetchPets]);

  const PetCard = ({ pet }) => {
    const [isActive, setIsActive] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const petStatus = pet.status || statusFilter;
    const statusKey = petStatus.toLowerCase();

    return (
      <div
        className="relative group overflow-hidden rounded-lg shadow-md hover:shadow-lg hover:scale-[1.02] transition-all duration-300 h-64"
        onClick={() => {
          // Changed to use navigation, will add tap to preview info later  -------------------------------CHANGE
          console.log("Navigating with pet ID:", pet._id); // Debug
          navigate(`/pets/${pet._id}`);
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => {
          setIsHovered(false);
          if (!isActive) setIsActive(false);
        }}
      >
        <div className="w-full h-full">
          <img
            src={pet.img}
            alt={`${pet.name} the ${pet.breed}`}
            className={`w-full h-full object-cover transition-opacity duration-300 ${
              isActive ? "opacity-20" : isHovered ? "opacity-50" : "opacity-100"
            }`}
          />
        </div>

        <div
          className={`absolute inset-0 py-2 px-4 flex flex-col justify-start ${
            isActive || isHovered ? "opacity-80" : "opacity-0"
          } transition-opacity duration-300 bg-black bg-opacity-60 text-white overflow-auto`}
        >
          <h3 className="text-xl font-bold mb-2">{pet.name}</h3>
          <p className="text-sm mb-1">
            <span className="font-semibold">Type:</span> {pet.animalType}
          </p>
          <p className="text-sm mb-1">
            <span className="font-semibold">Breed:</span> {pet.breed}
          </p>
          <p className="text-sm mb-1">
            <span className="font-semibold">Gender:</span>{" "}
            {pet.gender || pet.sex} {/* Handle both gender and sex fields */}
          </p>
          <p className="text-sm mb-1">
            <span className="font-semibold">Microchipped:</span>{" "}
            {pet.microchipped}
          </p>
          <p className="text-sm mb-2">
            <span className="font-semibold">Location:</span> {pet.location}
          </p>
          <p className="text-xs italic">{pet.additionalInfo}</p>
        </div>

        <div className="absolute bottom-2 left-2 right-2 flex justify-between">
          <div className="bg-white bg-opacity-80 px-2 py-1 rounded text-sm font-medium text-gray-900">
            {pet.name}
          </div>
          <div
            className={`px-2 py-1 rounded text-sm font-medium text-white ${
              statusColors[statusKey] || "bg-gray-500"
            }`}
          >
            {petStatus.toUpperCase()}
          </div>
        </div>
      </div>
    );
  };

  const handleFilterChange = (key, value) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  const clearFilters = () => {
    setFilters({
      sort: "recent",
      animalType: "",
      breed: "",
      location: "",
      microchipped: "",
    });
  };

  // Calculate how many pets to show based on grid size
  const petsToShow = isPreview
    ? pets
    : pets.slice(0, gridSize.cols * gridSize.rows);

  if (loading) return <div>Loading...</div>;
  if (error) {
    return (
      <div
        className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 ${className}`}
      >
        {/* Centered Title Section */}
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold">{title}</h1>
          {subtitle && (
            <h3 className="text-xl text-gray-600 mt-2">{subtitle}</h3>
          )}
        </div>

        {/* Error message*/}
        <div
          className={`bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-6 ${
            isPreview ? "mx-auto max-w-md" : ""
          }`}
          role="alert"
        >
          <p className="font-bold">Error loading pets</p>
          <p>{error}</p>
        </div>

        {/* Empty gallery state + adjusts for preview mode */}
        <div
          className={`grid gap-6 ${
            isPreview
              ? "grid-cols-1 md:grid-cols-3"
              : gridSize.cols === 3
              ? "grid-cols-1 sm:grid-cols-2 md:grid-cols-3"
              : gridSize.cols === 5
              ? "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"
              : "grid-cols-1 sm:grid-cols-2 md:grid-cols-3"
          }`}
        >
          {[...Array(isPreview ? 3 : gridSize.cols * gridSize.rows)].map(
            (_, index) => (
              <div
                key={index}
                className={`relative overflow-hidden rounded-lg shadow-md h-64 bg-gray-100 flex items-center justify-center ${
                  isPreview
                    ? "hover:shadow-lg hover:scale-[1.02] transition-all duration-300"
                    : ""
                }`}
              >
                <div className="text-gray-400 text-center p-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-12 w-12 mx-auto mb-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  <p>Could not load pet</p>
                  {isPreview && index === 2 && (
                    <p className="text-xs mt-2">
                      Preview only - more pets available
                    </p>
                  )}
                </div>
              </div>
            )
          )}
        </div>
      </div>
    );
  }

  return (
    <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 ${className}`}>
      {/* Centered Title Section */}
      <div className="text-center mb-6">
        <h1 className="text-3xl font-bold">{title}</h1>
        {subtitle && <h3 className="text-xl text-gray-600 mt-2">{subtitle}</h3>}
      </div>

      {/* Centered Search Bar - only shown when not in preview mode or when explicitly enabled */}
      {(!isPreview || showSearchBar) && (
        <div className="flex justify-center mb-6">
          <label className="input bg-white border border-black w-full md:w-1/2">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </g>
            </svg>
            <input
              type="search"
              required
              placeholder="Search pets..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              ref={searchInputRef}
              key="search-input" // Add this key
            />
          </label>
        </div>
      )}

      {/* Control Buttons Row - hidden in preview mode */}
      {!isPreview && (
        <div className="flex flex-wrap justify-center gap-3 mb-6">
          {/* Filter Button */}
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="btn btn-outline flex items-center gap-2"
          >
            <FiFilter /> Filters
            <FiChevronDown
              className={`transition-transform ${
                showFilters ? "rotate-180" : ""
              }`}
            />
          </button>

          {/* Clear Filters Button */}
          {Object.values(filters).some(
            (val) => val !== "" && val !== "recent"
          ) && (
            <button
              onClick={clearFilters}
              className="btn btn-outline flex items-center gap-2"
            >
              <FiX /> Clear
            </button>
          )}

          {/* Grid Size Selector */}
          {showGridControls &&
            gridOptions.map((option) => (
              <button
                key={option.label}
                onClick={() => setGridSize(option)}
                className={`px-4 py-2 rounded-md ${
                  gridSize.label === option.label
                    ? "bg-indigo-600 text-white"
                    : "bg-gray-200 text-gray-800 hover:bg-gray-300"
                } transition-colors`}
              >
                {option.label}
              </button>
            ))}
        </div>
      )}

      {/* Filters dropdown - white text version */}
      {showFilters && !isPreview && (
        <div className="bg-gray-800 p-4 rounded-lg shadow-md mb-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 text-white">
          <div>
            <label className="block text-sm font-medium mb-1">Sort by</label>
            <select
              className="select select-bordered w-full bg-gray-700 text-white"
              value={filters.sort}
              onChange={(e) => handleFilterChange("sort", e.target.value)}
            >
              <option value="recent" className="text-white">
                Most Recent
              </option>
              <option value="oldest" className="text-white">
                Oldest
              </option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Animal Type
            </label>
            <select
              className="select select-bordered w-full bg-gray-700 text-white"
              value={filters.animalType}
              onChange={(e) => handleFilterChange("animalType", e.target.value)}
            >
              <option value="" className="text-white">
                All Types
              </option>
              <option value="dog" className="text-white">
                Dog
              </option>
              <option value="cat" className="text-white">
                Cat
              </option>
              <option value="bird" className="text-white">
                Bird
              </option>
              <option value="other" className="text-white">
                Other
              </option>
            </select>
          </div>

          {/* Breed Input */}
          <div>
            <label className="block text-sm font-medium mb-1">Breed</label>
            <input
              type="text"
              className="input input-bordered w-full bg-gray-700 text-white placeholder-gray-400"
              placeholder="Any breed"
              value={filters.breed}
              onChange={(e) => handleFilterChange("breed", e.target.value)}
              key="breed-filter"
            />
          </div>
          {/* Location Input */}
          <div>
            <label className="block text-sm font-medium mb-1">Location</label>
            <input
              type="text"
              className="input input-bordered w-full bg-gray-700 text-white placeholder-gray-400"
              placeholder="Any location"
              value={filters.location}
              onChange={(e) => handleFilterChange("location", e.target.value)}
              key="location-filter" // Add this
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Microchipped
            </label>
            <select
              className="select select-bordered w-full bg-gray-700 text-white"
              value={filters.microchipped}
              onChange={(e) =>
                handleFilterChange("microchipped", e.target.value)
              }
            >
              <option value="" className="text-white">
                Any
              </option>
              <option value="yes" className="text-white">
                Yes
              </option>
              <option value="no" className="text-white">
                No
              </option>
            </select>
          </div>
        </div>
      )}

      {/* Responsive grid */}
      <div
        className={`grid gap-6 ${
          isPreview
            ? "grid-cols-1 md:grid-cols-3"
            : gridSize.cols === 3
            ? "grid-cols-1 sm:grid-cols-2 md:grid-cols-3"
            : gridSize.cols === 5
            ? "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"
            : "grid-cols-1 sm:grid-cols-2 md:grid-cols-3"
        }`}
      >
        {petsToShow.map((pet, index) => (
          <PetCard key={pet._id || index} pet={pet} />
        ))}
      </div>
    </div>
  );
};

export default PetGallery;
