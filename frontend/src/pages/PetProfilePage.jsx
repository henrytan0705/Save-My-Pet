import React from "react";
import { useParams } from "react-router";
import PetProfile from "../components/PetProfile";

const PetProfilePage = () => {
    const { id } = useParams();

    return (
        <div className="my-40 mx-[10%]">
            <div className="my-10">
                <PetProfile id={id} />
            </div>
        </div>
    );
};

export default PetProfilePage;