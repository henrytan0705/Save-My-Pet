require("dotenv").config();
const mongoose = require("mongoose");
const Post = require("../models/Post");

const MONGODB_CONNECTION_URL =
  process.env.DB_CONNECTION_URL || "mongodb://localhost:27017/save-my-pet";

const seedData = [
    {
    _id: new mongoose.Types.ObjectId(),
    name: "Prince",
    location: "429 11th Ave, New York, NY 10001",
    microchipped: "Yes",
    breed: "Ginger",
    animalType: "Cat",
    sex: "Unknown",
    additionalInfo:
      "Friendly orange tabby with white paws found near the Javits Center",
    img: "https://images.pexels.com/photos/774731/pexels-photo-774731.jpeg",
    coordinates: [40.75778596116167, -74.00171315664157],
    status: "Rescued",
  },
    {
    _id: new mongoose.Types.ObjectId(),
    name: "Randy",
    location: "Grand Central Station, 10017",
    microchipped: "Unknown",
    breed: "Cairn Terrier",
    animalType: "Dog",
    sex: "Unknown",
    additionalInfo:
      "Small scruffy dog, last seen wearing red collar wandering through Grand Central",
    img: "https://placedog.net/400/300",
    coordinates: [40.752433361405046, -73.9782172540969],
    status: "Lost",
  },
    {
    _id: new mongoose.Types.ObjectId(),
    name: "Luna",
    location: "180 Greenwich St, New York, NY 10007",
    microchipped: "Yes",
    breed: "Husky",
    animalType: "Dog",
    sex: "Female",
    additionalInfo:
      "Blue-eyed husky with gray/white fur last seen near the World Trade Center",
    img: "https://placedog.net/401/300",
    coordinates: [40.71238588181593, -74.01316480405534],
    status: "Lost",
  },
    {
    _id: new mongoose.Types.ObjectId(),
    name: "Mittens",
    location: "1000 5th Ave, New York, NY 10028",
    microchipped: "No",
    breed: "Calico",
    animalType: "Cat",
    sex: "Female",
    additionalInfo:
      "Tri-color cat, very shy but sweet missing from MET Museum area",
    img: "https://images.pexels.com/photos/127028/pexels-photo-127028.jpeg",
    coordinates: [40.77992633343864, -73.9631030283719],
    status: "Lost",
  },
    {
    _id: new mongoose.Types.ObjectId(),
    name: "Rocky",
    location: "253 W 125th St, New York, NY 10027",
    microchipped: "Yes",
    breed: "Pitbull",
    animalType: "Dog",
    sex: "Male",
    additionalInfo:
      "Brown pitbull with white chest, very friendly found near the Apollo in Harlem",
    img: "https://placedog.net/402/300",
    coordinates: [40.81021626925731, -73.95005799845822],
    status: "Rescued",
  },
    {
    _id: new mongoose.Types.ObjectId(),
    name: "Whiskers",
    location: "116th and Broadway, New York, NY 10027",
    microchipped: "Unknown",
    breed: "Siamese",
    animalType: "Cat",
    sex: "Male",
    additionalInfo:
      "Vocal cat with blue eyes and pointed markings lost at Columbia University",
    img: "https://images.pexels.com/photos/2194261/pexels-photo-2194261.jpeg",
    coordinates: [40.80760370138715, -73.96255187364959],
    status: "Lost",
  },
    {
    _id: new mongoose.Types.ObjectId(),
    name: "Max",
    location: "200 Central Prk W, New York, NY 10024",
    microchipped: "Yes",
    breed: "Golden Retriever",
    animalType: "Dog",
    sex: "Male",
    additionalInfo:
      "Friendly golden with slightly wavy fur in need of rescue from the Natural History Museum, trapped in the Planetarium",
    img: "https://placedog.net/403/300",
    coordinates: [40.78157882433646, -73.9739091368122],
    status: "Endangered",
  },
    {
    _id: new mongoose.Types.ObjectId(),
    name: "Bella",
    location: "768 5th Ave, New York, NY 10019",
    microchipped: "No",
    breed: "Persian",
    animalType: "Cat",
    sex: "Female",
    additionalInfo: "Fluffy white Persian cat found at the Plaza Hotel",
    img: "",
    coordinates: [40.764953802831414, -73.97432252381552],
    status: "Found",
  },
    {
    _id: new mongoose.Types.ObjectId(),
    name: "Charlie",
    location: "405 Lexington Ave, New York, NY 10174",
    microchipped: "Yes",
    breed: "Beagle",
    animalType: "Dog",
    sex: "Male",
    additionalInfo:
      "Tri-color beagle with long ears scaling the Chrysler Building, needs rescue",
    img: "https://placedog.net/404/300",
    coordinates: [40.75168705114522, -73.97549741303442],
    status: "Endangered",
  },
  // Additional entries to fill larger grids
    {
    _id: new mongoose.Types.ObjectId(),
    name: "Oreo",
    location: "828 Broadway, New York, NY 10003",
    microchipped: "No",
    breed: "Tuxedo",
    animalType: "Cat",
    sex: "Male",
    additionalInfo:
      "Black and white cat with perfect tuxedo markings last seen in The Strand Bookstore",
    img: "https://images.pexels.com/photos/19607031/pexels-photo-19607031.jpeg",
    coordinates: [40.73342239713554, -73.99096678853836],
    status: "Lost",
  },
    {
    _id: new mongoose.Types.ObjectId(),
    name: "Daisy",
    location: "500 Pearl St, New York, NY 10007",
    microchipped: "Yes",
    breed: "Dachshund",
    animalType: "Dog",
    sex: "Female",
    additionalInfo:
      "Miniature dapple dachshund found at the Southern District Courthouse",
    img: "https://placedog.net/405/300",
    coordinates: [40.71419826689667, -74.00050802599444],
    status: "Found",
  },
    {
    _id: new mongoose.Types.ObjectId(),
    name: "Shadow",
    location: "175 5th Ave, New York, NY 10010",
    microchipped: "Unknown",
    breed: "Black Lab",
    animalType: "Dog",
    sex: "Male",
    additionalInfo:
      "All black lab with yellow collar found in front of the Flatiron Building",
    img: "https://placedog.net/406/300",
    coordinates: [40.741122338715456, -73.98962450697958],
    status: "Found",
  },
    {
    _id: new mongoose.Types.ObjectId(),
    name: "Milo",
    location: "20 W 34th St., New York, NY 10001",
    microchipped: "Yes",
    breed: "Tabby",
    animalType: "Cat",
    sex: "Male",
    additionalInfo:
      "Brown tabby with M-shaped forehead marking found at the Empire State Building",
    img: "",
    coordinates: [40.748430115352164, -73.98570938340211],
    status: "Found",
  },
    {
    _id: new mongoose.Types.ObjectId(),
    name: "Lucy",
    location: "695 Park Ave, New York, NY 10065",
    microchipped: "No",
    breed: "Poodle",
    animalType: "Dog",
    sex: "Female",
    additionalInfo:
      "White miniature poodle, recently groomed lost near Hunter College",
    img: "https://placedog.net/407/300",
    coordinates: [40.767843289210894, -73.96453164933192],
    status: "Lost",
  },
    {
    _id: new mongoose.Types.ObjectId(),
    name: "Simba",
    location: "New York, NY 10001",
    microchipped: "Yes",
    breed: "Maine Coon",
    animalType: "Cat",
    sex: "Male",
    additionalInfo: "Large orange Maine Coon with tufted ears lost near MSG",
    img: "https://images.pexels.com/photos/982314/pexels-photo-982314.jpeg",
    coordinates: [40.75076657184364, -73.99343228869748],
    status: "Lost",
  },
    {
    _id: new mongoose.Types.ObjectId(),
    name: "Bailey",
    location: "Little Island, New York, NY 10014",
    microchipped: "Yes",
    breed: "Cocker Spaniel",
    animalType: "Dog",
    sex: "Female",
    additionalInfo: "Golden cocker spaniel with floppy ears",
    img: "https://placedog.net/408/300",
    coordinates: [40.74213775724721, -74.01025985229535],
    status: "Found",
  },
    {
    _id: new mongoose.Types.ObjectId(),
    name: "Loki",
    location: "252 First Ave Loop, New York, NY 10009",
    microchipped: "No",
    breed: "Bengal",
    animalType: "Cat",
    sex: "Male",
    additionalInfo: "Spotted Bengal cat, very active found in StuyTown",
    img: "https://images.pexels.com/photos/16747555/pexels-photo-16747555.jpeg",
    coordinates: [40.73202020487943, -73.97785547831153],
    status: "Found",
  },
    {
    _id: new mongoose.Types.ObjectId(),
    name: "Zoe",
    location: "525 E 68th St, New York, NY 10065",
    microchipped: "Yes",
    breed: "Shih Tzu",
    animalType: "Dog",
    sex: "Female",
    additionalInfo:
      "Small Shih Tzu with underbite found at Presbyterian Hospital",
    img: "https://placedog.net/409/300",
    coordinates: [40.76438465511256, -73.95422815637781],
    status: "Found",
  },
];

mongoose.connect(MONGODB_CONNECTION_URL)
    .then(async () => {
        console.log("Connected to MongoDB, seeding...");
        await Post.deleteMany({});
        const result = await Post.insertMany(seedData);

        // Log all created IDs
        console.log("Created pets with these IDs:");
        result.forEach(pet => {
            console.log(`Name: ${pet.name}, ID: ${pet._id}`);
        });

        process.exit();
    })
    .catch((err) => {
        console.error("Seeding failed:", err);
        process.exit(1);
    });
