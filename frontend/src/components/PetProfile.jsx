import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const PetProfile = () => {
    const { id } = useParams();
    const [pet, setPet] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const testId = "686f4d890d8481fb0da98e27"; 

    useEffect(() => {
        const fetchPet = async () => {
            try {
                const testId = "686f4d890d8481fb0da98e27"; // Hardcoded test ID
                const apiUrl = `${import.meta.env.VITE_API_ENDPOINT_URL}/api/posts/${testId}`;
                console.log('Fetching from:', apiUrl); // Debug URL

                const response = await fetch(apiUrl);

                console.log('Response status:', response.status); // Debug status
                if (!response.ok) throw new Error(`HTTP error: ${response.status}`);

                const data = await response.json();
                console.log('Received data:', data); // Debug response data
                setPet(data);
            } catch (err) {
                console.error("Fetch failed:", {
                    error: err.message,
                    url: `${import.meta.env.VITE_API_ENDPOINT_URL}/api/posts/686f1e7c6e452d7038641d90`,
                    time: new Date().toISOString(),
                    fullError: err // Include full error object
                });
                console.log('Using hardcoded ID:', "686f4d890d8481fb0da98e27");
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchPet();
    }, []); 

    if (loading) return <div className="text-center py-8">Loading pet profile...</div>;
    if (error) return <div className="text-red-500 text-center py-8">Error: {error}</div>;
    if (!pet) return <div className="text-center py-8">Pet not found</div>;

    return (
        <div className="max-w-4xl mx-auto p-4">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                {/*Profile Layout*/}
                <div className="md:flex">
                    <div className="md:w-1/2">
                        <img
                            src={pet.img || '/default-pet.jpg'}
                            alt={pet.name}
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="p-8 md:w-1/2">
                        <h1 className="text-3xl font-bold">{pet.name}</h1>
                        <div className="mb-4">
                            <span className={`inline-block px-3 py-1 rounded-full text-sm font-semibold mr-2 ${pet.status === 'Lost' ? 'bg-red-100 text-red-800' :
                                    pet.status === 'Found' ? 'bg-green-100 text-green-800' :
                                        'bg-blue-100 text-blue-800'
                                }`}>
                                {pet.status}
                            </span>
                        </div>

                        {/* Additional seed data info */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PetProfile;