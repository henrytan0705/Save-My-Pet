// PetProfile.jsx
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
                setLoading(true);
                const response = await fetch(
                    `${import.meta.env.VITE_API_ENDPOINT_URL}/api/posts/${id}`
                );

                if (!response.ok) {
                    throw new Error(`HTTP error: ${response.status}`);
                }

                const data = await response.json();
                setPet(data);
            } catch (err) {
                console.error("Fetch error:", err);
                setError(err.message);
            } finally {
                setLoading(false);
            }
        } catch (err) {
            console.error("Full error:", err);
            setError(err.message);
        }
        };

        fetchPet();
    }, [id]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;
    if (!pet) return <div>Pet not found</div>;

    return (
        <div className="max-w-4xl mx-auto px-4 py-8">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="md:flex">
                    <div className="md:w-1/2">
                        <img
                            src={pet.img}
                            alt={pet.name}
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="p-8 md:w-1/2">
                        <h1 className="text-3xl font-bold mb-2">{pet.name}</h1>
                        <div className="mb-4">
                            <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold mr-2">
                                {pet.status}
                            </span>
                        </div>

                        <div className="grid grid-cols-2 gap-4 mb-6">
                            <div>
                                <h3 className="text-sm font-medium text-gray-500">Breed</h3>
                                <p className="text-lg">{pet.breed}</p>
                            </div>
                            <div>
                                <h3 className="text-sm font-medium text-gray-500">Type</h3>
                                <p className="text-lg">{pet.animalType}</p>
                            </div>
                            <div>
                                <h3 className="text-sm font-medium text-gray-500">Sex</h3>
                                <p className="text-lg">{pet.sex}</p>
                            </div>
                            <div>
                                <h3 className="text-sm font-medium text-gray-500">Microchipped</h3>
                                <p className="text-lg">{pet.microchipped}</p>
                            </div>
                        </div>

                        <div className="mb-6">
                            <h3 className="text-sm font-medium text-gray-500">Location</h3>
                            <p className="text-lg">{pet.location}</p>
                        </div>

                        <div className="mb-6">
                            <h3 className="text-sm font-medium text-gray-500">Additional Info</h3>
                            <p className="text-lg">{pet.additionalInfo}</p>
                        </div>

                        {/* Add more fields as needed from your seed data */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PetProfile;