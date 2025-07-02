import React, { useState } from "react";
import Prince from "../assets/prince.jpeg"
import Randy from "../assets/unkown.jpeg"
import cocker from "../assets/cocker-spaniel.png"


const EmbedErrorBoundary = ({ children, fallback = <div>Failed to load embed</div> }) => {
    const [hasError, setHasError] = React.useState(false);

    if (hasError) {
        return fallback;
    }

    return (
        <div className="h-full" onError={() => setHasError(true)}>
            {children}
        </div>
    );
};

const petData = [
    {
        name: "Prince",
        location: "80 E 7th street, 10003",
        microchipped: "Yes",
        breed: "Ginger",
        animalType: "Cat",
        gender: "Unknown",
        additionalInfo: "Friendly orange tabby with white paws",
        img: Prince // Placeholder image
    },
    {
        name: "Randy",
        location: "East Village",
        microchipped: "Unknown",
        breed: "Cairn Terrier",
        animalType: "Dog",
        gender: "Unknown",
        additionalInfo: "Small scruffy dog, last seen wearing red collar",
        img: Randy // Placeholder image
    },
    {
        name: "Unknown",
        location: "Central Park",
        microchipped: "Unknown",
        breed: "Cocker Spaniel",
        animalType: "Dog",
        gender: "Female",
        additionalInfo: "Brown and white spaniel, appears well-groomed",
        img: cocker // Placeholder image
    }
];

const LostPreviewGallery = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {petData.map((pet, index) => (
                    <PetCard key={index} pet={pet} />
                ))}
            </div>
        </div>
    );
};

const PetCard = ({ pet }) => {
    const [isActive, setIsActive] = useState(false);

    const handleClick = () => {
        setIsActive(!isActive);
    };

    return (
        <div
            className="relative group overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 h-64 sm:h-80 md:h-64 lg:h-72 xl:h-80"
            onClick={handleClick}
        >
            {/* Image with responsive height */}
            <div className="w-full h-full">
                <img
                    src={pet.img}
                    alt={`${pet.name} the ${pet.breed}`}
                    className={`w-full h-full object-cover transition-opacity duration-300 ${isActive ? 'opacity-20' : 'group-hover:opacity-20'}`}
                />
            </div>

            {/* Information overlay (shown on hover or when active) */}
            <div className={`absolute inset-0 px-4 py-2 flex flex-col justify-start items-start ${isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'} transition-opacity duration-300 bg-black bg-opacity-60 text-white overflow-auto`}>
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
                <p className="text-xs italic">
                    {pet.additionalInfo}
                </p>
            </div>

            {/* Always visible name badge */}
            <div className="absolute bottom-0 left-2 bg-white bg-opacity-80 px-2 py-1 rounded text-sm font-medium text-gray-900">
                {pet.name}
            </div>
        </div>
    );
};

export default LostPreviewGallery;