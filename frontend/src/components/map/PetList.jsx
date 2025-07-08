import React, { useState, useEffect, use } from "react";

const PetList = () => {
  const [pets, setPets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('/api/posts')
      .then(res => {
        if (!res.ok) {
          throw new Error(`Server error: ${res.status}`);
        }
        return res.json();
      })
      .then(data => {
        setPets(data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setError(err.message);
        setLoading(false);
      });
  }, []); 

  return (
    <div className="">
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
          </div>                
        </div>  
      ))}
    </div>
  );
};

export default PetList;