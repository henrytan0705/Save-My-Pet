import React from "react";
import PetGallery from "../components/PetGallery";

const FoundPetsPage = () => {
  return (
    <div className="my-40 mx-[10%]">
          <div className="my-10">
              <PetGallery
                  title="Found Pets"
                  statusFilter="found"
                  showGridControls={true}
              />
          </div>
    </div>
  );
};

export default FoundPetsPage;
