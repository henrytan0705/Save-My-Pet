import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const PetProfile = () => {
    const { id } = useParams();
    const [pet, setPet] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPet = async () => {
            try {
                const apiUrl = `${import.meta.env.VITE_API_ENDPOINT_URL}/api/posts/${id}`;
                console.log('Fetching from:', apiUrl);

                const response = await fetch(apiUrl);
                console.log('Response status:', response.status);

                if (!response.ok) throw new Error(`HTTP error: ${response.status}`);

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
            } finally {
                setLoading(false);
            }
        };

        fetchPet();
    }, [id]);

    if (loading) return <div className="text-center py-8">Loading pet profile...</div>;
    if (error) return <div className="text-red-500 text-center py-8">Error: {error}</div>;
    if (!pet) return <div className="text-center py-8">Pet not found</div>;

    // Status color mapping
    const statusColors = {
        lost: 'bg-red-100 text-red-800',
        found: 'bg-green-100 text-green-800',
        rescued: 'bg-blue-100 text-blue-800',
        endangered: 'bg-orange-100 text-orange-800'
    };

    return (
        <div className="max-w-4xl mx-auto p-4">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="md:flex">
                    {/* Image Section */}
                    <div className="md:w-1/2">
                        <img
                            src={pet.img || '/default-pet.jpg'}
                            alt={pet.name}
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Info Section */}
                    <div className="p-8 md:w-1/2">
                        <h1 className="text-3xl font-bold mb-4">{pet.name}</h1>

                        {/* Status Badge */}
                        <div className="mb-6">
                            <span className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${statusColors[pet.status.toLowerCase()] || 'bg-gray-100 text-gray-800'}`}>
                                {pet.status.toUpperCase()}
                            </span>
                        </div>

                        {/* Pet Details */}
                        <div className="space-y-4">
                            <div>
                                <h3 className="text-sm font-medium text-gray-500">Type</h3>
                                <p className="text-lg">{pet.animalType}</p>
                            </div>

                            <div>
                                <h3 className="text-sm font-medium text-gray-500">Breed</h3>
                                <p className="text-lg">{pet.breed}</p>
                            </div>

                            <div>
                                <h3 className="text-sm font-medium text-gray-500">Gender</h3>
                                <p className="text-lg">{pet.sex}</p>
                            </div>

                            <div>
                                <h3 className="text-sm font-medium text-gray-500">Microchipped</h3>
                                <p className="text-lg">{pet.microchipped}</p>
                            </div>

                            <div>
                                <h3 className="text-sm font-medium text-gray-500">Location</h3>
                                <p className="text-lg">{pet.location}</p>
                            </div>

                            <div>
                                <h3 className="text-sm font-medium text-gray-500">Additional Info</h3>
                                <p className="text-lg">{pet.additionalInfo}</p>
                            </div>

                            <div>
                                <h3 className="text-sm font-medium text-gray-500">Last Seen</h3>
                                <p className="text-lg">{new Date(pet.createdAt).toLocaleDateString()}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PetProfile;