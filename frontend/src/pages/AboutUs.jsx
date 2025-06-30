import React from 'react';
import petsImage from '../assets/pets.png';

const AboutUs = () => {
  return (
    <div className="bg-gray-50 min-h-screen px-6 py-12 text-center text-gray-800">
      <h1 className="text-4xl sm:text-5xl font-bold mb-10">
        About <span className="text-purple-600">Save My Pet</span>
      </h1>

      <section className="max-w-3xl mx-auto space-y-10 text-lg leading-relaxed">
        <p>
          Natural disasters can be devastating, and the emotional toll of being separated from a beloved pet during such crises is immense. 
          The unfortunate reality seen in events like the Los Angeles fires, where pet owners were forced to evacuate without their animals or 
          were unable to return to reunite with them, highlights a critical need. That’s where Save My Pet comes in.
        </p>

        <div>
          <h2 className="text-2xl font-semibold mb-2">Our Mission</h2>
          <p>
            We aim to provide a vital platform that connects lost pets with their worried owners. Save My Pet will facilitate reunification by 
            allowing users to post with pictures, detailed descriptions, and the last known location of found or missing pets. Our initial focus 
            will be on Manhattan, a city familiar to us and rich in data, allowing us to refine our services before expanding.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">How We Help</h2>
          <p>
            Save My Pet will facilitate reunification by allowing users to post with pictures, detailed descriptions, and the last known location 
            of found or missing pets. Our initial focus will be on Manhattan, a city familiar to us and rich in data, allowing us to refine our 
            services before expanding.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">Key Features</h2>
          <p>
            We’re building a robust platform with features designed to make the reunification process as smooth as possible.
          </p>
        </div>

        <img
          src={petsImage}
          alt="Pets illustration"
          className="w-40 sm:w-52 mx-auto mt-6 rounded-lg shadow-md"
        />
      </section>
    </div>
  );
};

export default AboutUs;


