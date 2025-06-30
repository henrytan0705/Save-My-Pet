import React from "react";
import petsImage from "../assets/pets.png";


const AboutUsPage = () => {
  return (
    <div className="bg-white text-center min-h-screen flex flex-col items-center justify-start px-4 sm:px-10 py-10">
      <h1 className="text-3xl sm:text-4xl font-semibold mb-6">About <span className="text-gray-800">Save My Pet</span></h1>
      
      <p className="max-w-3xl text-gray-700 mb-6">
        Natural disasters can be devastating, and the emotional toll of being separated from a beloved pet during such crises is immense.
        The unfortunate reality seen in events like the Los Angeles fires, where pet owners were forced to evacuate without their animals or
        were unable to return to reunite with them, highlights a critical need. That’s where Save My Pet comes in.
      </p>
  
      <h2 className="text-xl font-semibold mt-6 mb-2">Our Mission</h2>
      <p className="max-w-2xl text-gray-700 mb-4">
        We aim to provide a vital platform that connects lost pets with their worried owners. Save My Pet will facilitate reunification by allowing
        users to post with pictures, detailed descriptions, and the last known location of found or missing pets. Our initial focus will be on Manhattan,
        a city familiar to us and rich in data, allowing us to refine our services before expanding.
      </p>
  
      <h2 className="text-xl font-semibold mt-6 mb-2">How We Help</h2>
      <p className="max-w-2xl text-gray-700 mb-4">
        Save My Pet will facilitate reunification by allowing users to post with pictures, detailed descriptions, and the last known location of
        found or missing pets. Our initial focus will be on Manhattan, a city familiar to us and rich in data, allowing us to refine our services
        before expanding.
      </p>
  
      <h2 className="text-xl font-semibold mt-6 mb-2">Key Features</h2>
      <p className="max-w-2xl text-gray-700 mb-6">
        We're building a robust platform with features designed to make the reunification process as smooth as possible.
      </p>
  
      <img src={petsImage} alt="Pets illustration" className="w-40 sm:w-52 mx-auto mt-6" />
    </div>
  );  
};

export default AboutUsPage;

