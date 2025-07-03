import React from "react";
import { Link } from "react-router";
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
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/3 text-center text-white mt-auto mb-auto">
                <h1 className=" md:text-4x1 font-bold mb-4">Save All Pets</h1>
                <h3 className="text-2x1 mb-35">Social Media Posts for your lost friend all in one place</h3>
                { /*Button overlay*/}
                <Link
                    to="/report"
                    className="report-link text-2xl/2sm md:text-5xl text-center inline-flex items-end justify-items-center justify-center hover:text-red-500 transition border-1 border-black bg-white rounded-2xl py-8 px-4"
                >
                    Save My Pet
                </Link>
            </div>

        </div>
    );
};
export default Hero; 