import React from "react";
import Hero from "../components/hero";
import PetGallery from "../components/PetGallery";
import PreviewGalleryActions from "../components/PreviewGalleryActions";
import { Link } from "react-router";
import ManyPetsImage from "../assets/manypets.png"

const HomePage = () => {
    return (
        <div className="w-full">
            <div className="flex flex-col justify-center color: #213547;">
                <Hero />
                <section className=" max-w-7xl mx-auto lg:w-full lg:h-full py-8 px-4 ">
                    {/* Lost Pets Preview */}
                    <PetGallery
                        title="Missing Pets"
                        subtitle="Help Find Our Furry Friends"
                        statusFilter="lost"
                        isPreview={true}
                        className="bg-gray-50"
                    />
                    <PreviewGalleryActions showAllLink="/LostPets" />
                </section>

                <section className="max-w-7xl mx-auto lg:w-full lg:h-full py-8 px-4">

                    {/* Found Pets Preview */}
                    <PetGallery
                        title="Found Pets Spotlight"
                        subtitle="Let's Have these Pets in their Forever Home"
                        statusFilter="found"
                        isPreview={true}
                        className="bg-gray-50"
                    />
                    <PreviewGalleryActions showAllLink="/FoundPets" />
                </section>
                
                <section className=" lg:grid lg:grid-rows-2 lg:grid-cols-2 h-auto">
                    <div className="lg:row-span-3">
                    <img
                        src={ManyPetsImage}
                        alt="Image of pets being held"
                        className="w-full object-cover round-none "
                        />
                    </div>
                    <div className="flex flex-col py-4 px-4 min-h-50 md:h-full content-around ">
                        <h2 className="text-2xl text-center mb-2 font-bold">Let's Have these Pets in their Forever Home</h2>
                        <p className="text-center text-lg col-span-3 row-start-2 px-6 text-sm md:tex-base">If you have found a lost pet or would like to help relocate do not hesitate to </p>
                        <button className="flex self-center justify-center color-white bg-gray-900 mt-auto text-white">Save</button>
                        </div>
                    <div className="flex flex-col lg:col-start-2 py-4 px-4 min-h-50 md:h-full bg-[#EDF2F4]">
                        <h2 className="text-2xl text-center col-span-3 row-start-2 font-bold mb-2">Communities</h2>
                        <p className="text-center text-lg col-span-3 row-start-3 px-6 text-sm md:tex-base">Our communities page has even more resources, list of social media groups,
                                and lost pet tips, such as what to do if your pet is micro chipped and how to make
                            an eye-catching missing pet poster. </p>
                        <button className="text-white bg-gray-900 self-center text-center mt-auto">join</button>
                        </div>

                </section>

                <section className="w-full mx-auto py-8 px-4 flex flex-col w-full h-auto grow-2 bg-gray-800 text-white">
                    <h2 className="text-2xl font-bold mb-4 text-center">Stay Updated</h2>
                    <h4 className="text-center mb-4">If you would like to also stay updated on your local furry friends, subscribe to our newsletter.</h4>
                    <div className="flex flex-col justify-center justify-items-center text-center h-auto mb-5">
                        <input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="johnsmith@gmail.com"
                            required
                            className="block self-center min-w-0 grow  py-1.5 pr-3 pl-1 text-base text-gray-800 bg-[#BEBEBE] placeholder:text-black-100 focus:outline-none sm:text-sm/6"
                        />
                        <button className="color-white bg-gray-900 self-center text-center mt-5">Subscribe</button>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default HomePage;