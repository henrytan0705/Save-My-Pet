import React from "react";
import Hero from "../components/hero";
import LostPreviewGallery from "../components/LostPreviewGallery";

const HomePage = () => {
    return (
        <div className="w-full">
            <div className="flex flex-col justify-center">
                <Hero />
                <section className="w-full max-h-4xl; mx-auto py-8 px-4 ">
                    <h1 className="text-3xl font-bold">Missing Pet Spotlight</h1>
                    <h3 className="text-xl text-gray-600 mb-8">Help Find Our Furry Friends</h3>
                    <LostPreviewGallery />
                </section>

                <section className="max-w-7xl mx-auto py-8 px-4">
                    <h1 className="text-3xl font-bold">Found Pet Spotlight</h1>
                    <h2 className="text-2xl font-bold mb-4"></h2>
                    <LostPreviewGallery />
                </section>

                <section className="max-w-4xl mx-auto py-8 px-4">
                    <h2 className="text-2xl font-bold mb-4"></h2>
                    <p className="mt-4">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni qui
                        animi vero mollitia blanditiis doloribus facilis consectetur.
                    </p>
                </section>
            </div>
        </div>
    );
};

export default HomePage;