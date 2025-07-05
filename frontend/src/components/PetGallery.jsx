import React, { useState, useEffect, useCallback } from "react";
import SearchBar from "../components/SearchBar";
import { FiFilter, FiChevronDown, FiX } from "react-icons/fi";

const PetGallery = ({
    title = "Pets",
    subtitle = "",
    isPreview = false,
    statusFilter = "lost",
    showGridControls = false,
    className = ""
}) => {
    const [pets, setPets] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [searchQuery, setSearchQuery] = useState("");
    const [filters, setFilters] = useState({
        sort: "recent",
        animalType: "",
        breed: "",
        location: "",
        microchipped: ""
    });

    const gridOptions = [
        { cols: 3, rows: 3, label: "3×3" },
        { cols: 3, rows: 6, label: "3×6" },
        { cols: 5, rows: 6, label: "5×6" }
    ];

    const [gridSize, setGridSize] = useState(gridOptions[0]);

    const PetCard = ({ pet }) => {
        const [isActive, setIsActive] = useState(false);
        const [isHovered, setIsHovered] = useState(false);
        const petStatus = pet.status || statusFilter;

        return (
            <div
                className="relative group overflow-hidden rounded-lg shadow-md hover:shadow-lg hover: scale-[1.02] transition-all duration-300 h-64"
                onClick={() => setIsActive(!isActive)}
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
                        className={`w-full h-full object-cover transition-opacity duration-300 ${isActive ? 'opacity-20' : (isHovered ? 'opacity-50' : 'opacity-100')
                            }`}
                    />
                </div>

                <div className={`absolute inset-0 py-2 px-4 flex flex-col justify-start ${isActive || isHovered ? 'opacity-80' : 'opacity-0'
                    } transition-opacity duration-300 bg-black bg-opacity-60 text-white overflow-auto`}>
                    <h3 className="text-xl font-bold mb-2">{pet.name}</h3>
                    <p className="text-sm mb-1">
                        <span className="font-semibold">Type:</span> {pet.animalType}
                    </p>
                    <p className="text-sm mb-1">
                        <span className="font-semibold">Breed:</span> {pet.breed}
                    </p>
                    <p className="text-sm mb-1">
                        <span className="font-semibold">Gender:</span> {pet.gender}
                    </p>
                    <p className="text-sm mb-1">
                        <span className="font-semibold">Microchipped:</span> {pet.microchipped}
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
                    <div className={`px-2 py-1 rounded text-sm font-medium text-white ${petStatus === 'lost' ? 'bg-red-500' : 'bg-blue-400'
                        }`}>
                        {petStatus.toUpperCase()}
                    </div>
                </div>
            </div>
        );
    };

    const fetchPets = useCallback(async () => {
        try {
            setLoading(true);
            const params = new URLSearchParams({
                status: statusFilter,
                ...(isPreview && { limit: 3 }),
                ...(searchQuery && { search: encodeURIComponent(searchQuery) }),
            });

  
            if (filters.sort) params.append('sort', filters.sort);
            if (filters.animalType) params.append('animalType', filters.animalType);
            if (filters.breed) params.append('breed', filters.breed);
            if (filters.location) params.append('location', filters.location);
            if (filters.microchipped) params.append('microchipped', filters.microchipped);

            const response = await fetch(`http://localhost:5000/api/posts?${params}`);
            if (!response.ok) throw new Error(`HTTP error: ${response.status}`);

            const data = await response.json();
            setPets(data);
        } catch (err) {
            console.error("Fetch error:", err);
            setError(err.message);
        } finally {
            setLoading(false);
        }
    }, [statusFilter, isPreview, searchQuery, filters]);

    useEffect(() => {
        fetchPets();
    }, [fetchPets]);

    // Calculate pets to show
    const petsToShow = isPreview ? pets : pets.slice(0, gridSize.cols * gridSize.rows);

    const renderPlaceholders = () => {
        const count = isPreview ? 3 : gridSize.cols * gridSize.rows;
        return Array.from({ length: count }).map((_, index) => (
            <div
                key={`placeholder-${index}`}
                className="relative group overflow-hidden rounded-lg shadow-md h-64 bg-gray-200 animate-pulse"
            >
                <div className="absolute bottom-2 left-2 right-2 flex justify-between">
                    <div className="bg-white bg-opacity-80 px-2 py-1 rounded text-sm font-medium text-gray-900">
                        Loading...
                    </div>
                    <div className={`px-2 py-1 rounded text-sm font-medium text-white ${statusFilter === 'lost' ? 'bg-red-500' : 'bg-blue-400'
                        }`}>
                        {statusFilter.toUpperCase()}
                    </div>
                </div>
            </div>
        ));
    };

    return (
        <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 ${className}`}>
            <h1 className="text-3xl font-bold">{title}</h1>
            {subtitle && <h3 className="text-xl text-gray-600 mb-4">{subtitle}</h3>}

            {!isPreview && (
                <SearchBar
                    onSearch={setSearchQuery}
                    onFilterChange={setFilters}
                    placeholder={`Search ${statusFilter} pets...`}
                />
            )}

            {showGridControls && (
                <div className="mb-6 flex flex-wrap gap-3">
                    {gridOptions.map((option) => (
                        <button
                            key={option.label}
                            onClick={() => setGridSize(option)}
                            className={`px-4 py-2 rounded-md ${gridSize.label === option.label
                                    ? "bg-indigo-600 text-white"
                                    : "bg-gray-200 text-gray-800 hover:bg-gray-300"
                                } transition-colors`}
                        >
                            {option.label}
                        </button>
                    ))}
                </div>
            )}

            <div
                className={`grid gap-6 ${isPreview
                        ? "grid-cols-1 md:grid-cols-3"
                        : gridSize.cols === 3
                            ? "grid-cols-1 sm:grid-cols-2 md:grid-cols-3"
                            : gridSize.cols === 5
                                ? "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"
                                : "grid-cols-1 sm:grid-cols-2 md:grid-cols-3"
                    }`}
            >
                {loading ? (
                    renderPlaceholders()
                ) : error || petsToShow.length === 0 ? (
                    renderPlaceholders()
                ) : (
                    petsToShow.map((pet, index) => (
                        <PetCard key={pet._id || index} pet={pet} />
                    ))
                )}
            </div>
        </div>
    );
=======
  title = "Pets",
  subtitle = "",
  isPreview = false,
  statusFilter = "lost", // or "found"
  showGridControls = false,
  className = "",
}) => {
  const [pets, setPets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  const gridOptions = [
    { cols: 3, rows: 3, label: "3×3 (9 pets)" },
    { cols: 3, rows: 6, label: "3×6 (18 pets)" },
    { cols: 5, rows: 6, label: "5×6 (30 pets)" },
  ];

  const [gridSize, setGridSize] = useState(gridOptions[0]);
  const API_ENDPOINT_URL = import.meta.env.VITE_API_ENDPOINT_URL;

  useEffect(() => {
    const fetchPets = async () => {
      try {
        setLoading(true);
        const url = `${API_ENDPOINT_URL}/api/posts?status=${
          statusFilter === "lost" ? "lost" : "found"
        }${isPreview ? "&limit=3" : ""}${
          searchQuery ? `&search=${encodeURIComponent(searchQuery)}` : ""
        }`;

        const response = await fetch(url);
        if (!response.ok) throw new Error(`HTTP error: ${response.status}`);

        const data = await response.json();
        setPets(data);
      } catch (err) {
        console.error("Fetch error:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPets();
  }, [statusFilter, isPreview, searchQuery]);
  // Calculate how many pets to show based on grid size
  const petsToShow = isPreview
    ? pets
    : pets.slice(0, gridSize.cols * gridSize.rows);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 ${className}`}>
      <h1 className="text-3xl font-bold">{title}</h1>
      {subtitle && <h3 className="text-xl text-gray-600 mb-4">{subtitle}</h3>}

      {/* Search input */}
      <label className="input bg-white my-5 border border-black mx-auto w-full md:w-1/2">
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
          placeholder="Search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </label>

      {/* Grid size selector - only shown on full pages */}
      {showGridControls && (
        <div className="mb-6 flex flex-wrap gap-3">
          {gridOptions.map((option) => (
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

// PetCard component remains the same as in your original code
const PetCard = ({ pet }) => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  return (
    <div
      className="relative group overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-all duration-300 h-64"
      onClick={handleClick}
    >
      <div className="w-full h-full">
        <img
          src={pet.img}
          alt={`${pet.name} the ${pet.breed}`}
          className={`w-full h-full object-cover transition-opacity duration-300 ${
            isActive ? "opacity-20" : "group-hover:opacity-20"
          }`}
        />
      </div>

      <div
        className={`absolute inset-0 p-4 flex flex-col justify-center ${
          isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"
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
          <span className="font-semibold">Gender:</span> {pet.gender}
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

      <div className="absolute bottom-2 left-2 bg-white bg-opacity-80 px-2 py-1 rounded text-sm font-medium text-gray-900">
        {pet.name}
      </div>
    </div>
  );
};

export default PetGallery;
