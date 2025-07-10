import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const PetProfile = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [pet, setPet] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const emptyPet = {
        name: "Unknown Pet",
        status: "Unknown",
        animalType: "",
        breed: "",
        sex: "",
        microchipped: "",
        location: "",
        additionalInfo: "",
        img: "/default-pet.jpg",
        createdAt: new Date().toISOString()
    };

    useEffect(() => {
        const fetchPet = async () => {
            try {
                const apiUrl = `${import.meta.env.VITE_API_ENDPOINT_URL}/api/posts/${id}`;
                console.log('Fetching from:', apiUrl);

                const response = await fetch(apiUrl);
                console.log('Response status:', response.status);

                if (!response.ok) {
                    if (response.status === 404) {
                        console.warn('Pet not found, showing empty profile');
                        setPet(emptyPet);
                        return;
                    }
                    throw new Error(`HTTP error: ${response.status}`);
                }

                const data = await response.json();
                console.log('Received data:', data);
                setPet(data);
            } catch (err) {
                console.error("Fetch failed:", {
                    error: err.message,
                    url: `${import.meta.env.VITE_API_ENDPOINT_URL}/api/posts/${id}`,
                    time: new Date().toISOString(),
                    fullError: err
                });
                setError(err.message);
                // empty pet data when there's an error
                setPet(emptyPet);
            } finally {
                setLoading(false);
            }
        };

        fetchPet();
    }, [id]);

    // Status color mapping
    const statusColors = {
        lost: 'bg-red-100 text-red-800',
        found: 'bg-green-100 text-green-800',
        rescued: 'bg-blue-100 text-blue-800',
        endangered: 'bg-orange-100 text-orange-800',
        unknown: 'bg-gray-100 text-gray-800'
    };

    // Use the pet data or fallback to emptyPet
    const displayPet = pet || emptyPet;

    return (
        <div className="max-w-4xl mx-auto p-4">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="md:flex">
                    {/* Image Section */}
                    <div className="md:w-1/2">
                        <img
                            src={displayPet.img || '/default-pet.jpg'}
                            alt={displayPet.name}
                            className="w-full h-full object-cover"
                            onError={(e) => {
                                e.target.src = '/default-pet.jpg';
                            }}
                        />
                    </div>

                    {/* Info Section */}
                    <div className="p-8 md:w-1/2">
                        <div className="flex justify-between items-start mb-4">
                            <h1 className="text-3xl font-bold">{displayPet.name}</h1>
                            <button
                                onClick={() => navigate(-1)}
                                className="btn btn-sm btn-ghost"
                            >
                                ← Back
                            </button>
                        </div>

                        {/* Status Badge */}
                        <div className="mb-6">
                            <span className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${statusColors[displayPet.status?.toLowerCase()] || statusColors.unknown
                                }`}>
                                {displayPet.status?.toUpperCase() || "UNKNOWN"}
                            </span>
                        </div>

                        {/* Error message */}
                        {error && (
                            <div className="alert alert-error mb-6">
                                <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <span>Error loading pet data: {error}</span>
                            </div>
                        )}

                        {/* Pet Details */}
                        <div className="space-y-4">
                            <div>
                                <h3 className="text-sm font-medium text-gray-500">Type</h3>
                                <p className="text-lg">{displayPet.animalType || "Unknown"}</p>
                            </div>

                            {displayPet.breed && (
                                <div>
                                    <h3 className="text-sm font-medium text-gray-500">Breed</h3>
                                    <p className="text-lg">{displayPet.breed}</p>
                                </div>
                            )}

                            <div>
                                <h3 className="text-sm font-medium text-gray-500">Gender</h3>
                                <p className="text-lg">{displayPet.sex || "Unknown"}</p>
                            </div>

                            <div>
                                <h3 className="text-sm font-medium text-gray-500">Microchipped</h3>
                                <p className="text-lg">{displayPet.microchipped || "Unknown"}</p>
                            </div>

                            <div>
                                <h3 className="text-sm font-medium text-gray-500">Location</h3>
                                <p className="text-lg">{displayPet.location || "Unknown"}</p>
                            </div>

                            {displayPet.additionalInfo && (
                                <div>
                                    <h3 className="text-sm font-medium text-gray-500">Additional Info</h3>
                                    <p className="text-lg">{displayPet.additionalInfo}</p>
                                </div>
                            )}
                            {displayPet.medicalHistory && (
                                <div>
                                    <h3 className="text-sm font-medium text-gray-500">Medical History</h3>
                                    <p className="text-lg">{displayPet.medicalHistory}</p>
                                </div>
                            )}
                            <div>
                                <h3 className="text-sm font-medium text-gray-500">Last Updated</h3>
                                <p className="text-lg">
                                    {displayPet.createdAt
                                        ? new Date(displayPet.createdAt).toLocaleDateString()
                                        : "Unknown"}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PetProfile;