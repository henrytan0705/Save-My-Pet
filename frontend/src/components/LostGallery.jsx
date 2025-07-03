// components/AdjustableGallery.jsx
import React, { useState } from "react";

// Extended mock data with more placeholder pets
const petData = [
    {
        name: "Prince",
        location: "80 E 7th street, 10003",
        microchipped: "Yes",
        breed: "Ginger",
        animalType: "Cat",
        gender: "Unknown",
        additionalInfo: "Friendly orange tabby with white paws",
        img: "https://placekitten.com/400/300"
    },
    {
        name: "Randy",
        location: "East Village",
        microchipped: "Unknown",
        breed: "Cairn Terrier",
        animalType: "Dog",
        gender: "Unknown",
        additionalInfo: "Small scruffy dog, last seen wearing red collar",
        img: "https://placedog.net/400/300"
    },
    {
        name: "Luna",
        location: "Williamsburg",
        microchipped: "Yes",
        breed: "Husky",
        animalType: "Dog",
        gender: "Female",
        additionalInfo: "Blue-eyed husky with gray/white fur",
        img: "https://placedog.net/401/300"
    },
    {
        name: "Mittens",
        location: "Upper West Side",
        microchipped: "No",
        breed: "Calico",
        animalType: "Cat",
        gender: "Female",
        additionalInfo: "Tri-color cat, very shy but sweet",
        img: "https://placekitten.com/401/300"
    },
    {
        name: "Rocky",
        location: "Harlem",
        microchipped: "Yes",
        breed: "Pitbull",
        animalType: "Dog",
        gender: "Male",
        additionalInfo: "Brown pitbull with white chest, very friendly",
        img: "https://placedog.net/402/300"
    },
    {
        name: "Whiskers",
        location: "Astoria",
        microchipped: "Unknown",
        breed: "Siamese",
        animalType: "Cat",
        gender: "Male",
        additionalInfo: "Vocal cat with blue eyes and pointed markings",
        img: "https://placekitten.com/402/300"
    },
    {
        name: "Max",
        location: "Brooklyn Heights",
        microchipped: "Yes",
        breed: "Golden Retriever",
        animalType: "Dog",
        gender: "Male",
        additionalInfo: "Friendly golden with slightly wavy fur",
        img: "https://placedog.net/403/300"
    },
    {
        name: "Bella",
        location: "SoHo",
        microchipped: "No",
        breed: "Persian",
        animalType: "Cat",
        gender: "Female",
        additionalInfo: "Fluffy white Persian cat",
        img: "https://placekitten.com/403/300"
    },
    {
        name: "Charlie",
        location: "Chelsea",
        microchipped: "Yes",
        breed: "Beagle",
        animalType: "Dog",
        gender: "Male",
        additionalInfo: "Tri-color beagle with long ears",
        img: "https://placedog.net/404/300"
    },
    // Additional entries to fill larger grids
    {
        name: "Oreo",
        location: "Financial District",
        microchipped: "No",
        breed: "Tuxedo",
        animalType: "Cat",
        gender: "Male",
        additionalInfo: "Black and white cat with perfect tuxedo markings",
        img: "https://placekitten.com/404/300"
    },
    {
        name: "Daisy",
        location: "Greenpoint",
        microchipped: "Yes",
        breed: "Dachshund",
        animalType: "Dog",
        gender: "Female",
        additionalInfo: "Miniature dapple dachshund",
        img: "https://placedog.net/405/300"
    },
    {
        name: "Shadow",
        location: "Long Island City",
        microchipped: "Unknown",
        breed: "Black Lab",
        animalType: "Dog",
        gender: "Male",
        additionalInfo: "All black lab with yellow collar",
        img: "https://placedog.net/406/300"
    },
    {
        name: "Milo",
        location: "Park Slope",
        microchipped: "Yes",
        breed: "Tabby",
        animalType: "Cat",
        gender: "Male",
        additionalInfo: "Brown tabby with M-shaped forehead marking",
        img: "https://placekitten.com/405/300"
    },
    {
        name: "Lucy",
        location: "DUMBO",
        microchipped: "No",
        breed: "Poodle",
        animalType: "Dog",
        gender: "Female",
        additionalInfo: "White miniature poodle, recently groomed",
        img: "https://placedog.net/407/300"
    },
    {
        name: "Simba",
        location: "Upper East Side",
        microchipped: "Yes",
        breed: "Maine Coon",
        animalType: "Cat",
        gender: "Male",
        additionalInfo: "Large orange Maine Coon with tufted ears",
        img: "https://placekitten.com/406/300"
    },
    {
        name: "Bailey",
        location: "West Village",
        microchipped: "Yes",
        breed: "Cocker Spaniel",
        animalType: "Dog",
        gender: "Female",
        additionalInfo: "Golden cocker spaniel with floppy ears",
        img: "https://placedog.net/408/300"
    },
    {
        name: "Loki",
        location: "Bushwick",
        microchipped: "No",
        breed: "Bengal",
        animalType: "Cat",
        gender: "Male",
        additionalInfo: "Spotted Bengal cat, very active",
        img: "https://placekitten.com/407/300"
    },
    {
        name: "Zoe",
        location: "Tribeca",
        microchipped: "Yes",
        breed: "Shih Tzu",
        animalType: "Dog",
        gender: "Female",
        additionalInfo: "Small Shih Tzu with underbite",
        img: "https://placedog.net/409/300"
    }
];

const gridOptions = [
    { cols: 3, rows: 3, label: "3×3 (9 pets)" },
    { cols: 3, rows: 6, label: "3×6 (18 pets)" },
    { cols: 5, rows: 6, label: "5×6 (30 pets)" }
];

const AdjustableGallery = () => {
    const [gridSize, setGridSize] = useState(gridOptions[0]);

    // Calculate how many pets to show based on grid size
    const petsToShow = petData.slice(0, gridSize.cols * gridSize.rows);

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <h1 className="text-3xl font-bold">Missing Pets</h1>
            <h3 className="text-xl text-gray-600 mb-4">Help Find Our Furry Friends</h3>

            {/* Grid size selector */}
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

            {/* Responsive grid */}
            <div
                className={`grid gap-6 ${gridSize.cols === 3
                    ? "grid-cols-1 sm:grid-cols-2 md:grid-cols-3"
                    : gridSize.cols === 5
                        ? "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"
                        : "grid-cols-1 sm:grid-cols-2 md:grid-cols-3"
                    }`}
            >
                {petsToShow.map((pet, index) => (
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
            className="relative group overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-all duration-300 h-64"
            onClick={handleClick}
        >
            <div className="w-full h-full">
                <img
                    src={pet.img}
                    alt={`${pet.name} the ${pet.breed}`}
                    className={`w-full h-full object-cover transition-opacity duration-300 ${isActive ? 'opacity-20' : 'group-hover:opacity-20'}`}
                />
            </div>

            <div className={`absolute inset-0 p-4 flex flex-col justify-center ${isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'} transition-opacity duration-300 bg-black bg-opacity-60 text-white overflow-auto`}>
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

            <div className="absolute bottom-2 left-2 bg-white bg-opacity-80 px-2 py-1 rounded text-sm font-medium text-gray-900">
                {pet.name}
            </div>
        </div>
    );
};

export default AdjustableGallery;