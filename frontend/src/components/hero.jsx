import React from "react";
import heroImage from "../assets/hero.png";
const Hero = () => {
    return (
        <div className="hero relative mt-0 overlfow-hidden">
            <img
                src={heroImage }
                alt="Hero"
                className="w-full min-h-[1000px] object-cover round-none"
            />
            {/*Text Overlay*/}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
                <h1 className="text-4x1 font-bold mb-4">Find and Report</h1>
                <h1 className="text-4x1 font-bold mb-4">Lost & Found Pets</h1>
                <h3 className="text-2x1">Social Media Posts for your lost friend all in one place</h3>
            </div>
        </div>
    );
};
export default Hero; 