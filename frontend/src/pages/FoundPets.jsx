import React from "react";
import PetGallery from "../components/PetGallery";

const FoundPetsPage = () => {
  return (
    <div className="my-40 mx-[10%]">
          <div className="my-10">
              <PetGallery
                  title="Found & Rescued Pets"
                  statusFilter={["Rescued", "Found"]}
                  showGridControls={true}
              />
          </div>
    </div>
  );
};

export default FoundPetsPage;
