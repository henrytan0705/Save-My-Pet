import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PetProfile from "../components/PetProfile";

const PetProfilePage = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />

            <div className="flex-grow my-40 mx-[10%]">
                <PetProfile />
            </div>

            <Footer />
        </div>
    );
};

export default PetProfilePage;