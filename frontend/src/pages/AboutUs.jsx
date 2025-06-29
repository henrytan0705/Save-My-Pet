import React from "react";

const AboutUsPage = () => {
  return (
    <div className="bg-gradient-to-b from-white to-blue-50 min-h-screen pt-24 pb-16 px-6 sm:px-10">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-4xl font-bold text-blue-800 mb-6 text-center">
          About <span className="text-pink-600">Save My Pet</span>
        </h1>

        <p className="text-gray-700 text-lg leading-relaxed mb-6 text-center">
          Save My Pet is a student-built platform designed to help reunite lost pets
          with their families during natural disasters and emergencies. We aim to make
          it easier for people to report, search, and respond to missing animals in their area.
        </p>

        <div className="border-t pt-6">
          <h2 className="text-2xl font-semibold text-blue-700 mb-3">🌟 Our Mission</h2>
          <p className="text-gray-700 mb-6">
            Our mission is to build a community-driven, technology-supported platform
            that connects lost pets with loving homes quickly and safely.
          </p>

          <h2 className="text-2xl font-semibold text-blue-700 mb-3">👥 Meet the Team</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>Leah Kelley</li>
            <li>Henry Tan </li>
            <li>Lenin Zuna</li>
            <li>Mahfuz Rana</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;

