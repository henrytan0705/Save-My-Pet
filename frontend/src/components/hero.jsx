import React from "react";
import { Link } from "react-router";
import heroImage from "../assets/hero.png";
import contactHeroImage from "../assets/contact-hero.png"; // Import the contact page hero image

const Hero = ({ page = "home" }) => {
  const imageToUse = page === "contact" ? contactHeroImage : heroImage;
  const textColor = page === "contact" ? "text-indigo-800" : "text-white";
  
  return (
    <div className="hero relative mt-0 overlfow-hidden">
      <img
        src={imageToUse}
        alt="Hero"
        className="w-full min-h-[1000px] object-cover round-none"
      />
      {/*Text Overlay*/}
      <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/3 text-center ${textColor} mt-auto mb-auto`}>
        <h1 className={`md:text-5x1 font-bold text-shadow-lg ${textColor}`}>Save All Pets</h1>
        <h3 className={`text-3x1 mb-140 md:mb-70 text-shadow-lg ${textColor}`}>
          Social Media Posts for your lost friend all in one place
        </h3>
        {page !== "contact" && (
          <Link
            to="/report"
            className="report-link text-2xl/2sm md:text-5xl text-center inline-flex items-end justify-items-center justify-center hover:text-red-500 transition border-1 border-black bg-white rounded-2xl py-8 px-4"
          >
            Save My Pet
          </Link>
        )}
      </div>
    </div>
  );
};

export default Hero;