import React, { useState, useEffect, useCallback } from "react";
import SearchBar from "../components/SearchBar";
import { FiFilter, FiChevronDown, FiX } from "react-icons/fi";

const PetGallery = ({
    title = "Pets",
    subtitle = "",
    isPreview = false,
    statusFilter = "lost",
    showGridControls = false,
    className = "",
}) => {
    const [pets, setPets] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [searchQuery, setSearchQuery] = useState("");
    const [debouncedSearchQuery, setDebouncedSearchQuery] = useState("");

    const gridOptions = [
        { cols: 3, rows: 3, label: "3×3 (9 pets)" },
        { cols: 3, rows: 6, label: "3×6 (18 pets)" },
        { cols: 5, rows: 6, label: "5×6 (30 pets)" }
    ];

    const [gridSize, setGridSize] = useState(gridOptions[0]);

    // Debounce effect
    useEffect(() => {
        const timerId = setTimeout(() => {
            setDebouncedSearchQuery(searchQuery);
        }, 500); 

        return () => {
            clearTimeout(timerId);
        };
    }, [searchQuery]);

    useEffect(() => {
        const fetchPets = async () => {
            try {
                setLoading(true);
                const url = `http://localhost:5000/api/posts?status=${statusFilter === 'lost' ? 'lost' : 'found'
                    }${isPreview ? '&limit=3' : ''}${debouncedSearchQuery ? `&search=${encodeURIComponent(debouncedSearchQuery)}` : ''
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
    }, [statusFilter, isPreview, debouncedSearchQuery]);

    // Calculate how many pets to show based on grid size
    const petsToShow = isPreview ? pets : pets.slice(0, gridSize.cols * gridSize.rows);

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

            {/* Responsive grid */}
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
                {petsToShow.map((pet, index) => (
                    <PetCard key={pet._id || index} pet={pet} />
                ))}
            </div>
        </div>
    );
};

export default PetGallery;
