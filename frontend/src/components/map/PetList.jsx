import React, { useState, useEffect } from "react";

const API_ENDPOINT_URL = import.meta.env.VITE_API_ENDPOINT_URL;

const PetList = () => {
  const [pets, setPets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPets = async () => {
      try {
        setLoading(true);
        const url = `${API_ENDPOINT_URL}/api/posts`;
        const res = await fetch(url);
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data = await res.json();
        setPets(data);
      } catch (err) {
        console.error("Fetch error:", err);
        setError(err.message);    
      } finally { 
        setLoading(false);
      }
    };  

    fetchPets();
  }, []); 

  if (loading) return <p>Loading pets…</p>;
  if (error)   return <p className="text-red-500">Error: {error}</p>;

  return (
    <div className="space-y-4">
      {pets.map(pet => (
        <div
          key={pet._id}
          className="flex items-center p-2 border rounded cursor-pointer hover:bg-gray-50">
          <img
            src={pet.img}
            alt={pet.name}
            className="w-16 h-16 object-cover rounded mr-4"
          />
          <div>
            <h4 className="font-semibold">{pet.name}</h4>
            <p className="text-sm text-gray-600">{pet.animalType} — {pet.isLost ? 'Lost' : 'Found'}</p>
            <p className="text-xs">{pet.location}</p>
            <p className="text-xs italic">{pet.additionalInfo}</p>
          </div>                
        </div>  
      ))}
    </div>
  );
};

export default PetList;