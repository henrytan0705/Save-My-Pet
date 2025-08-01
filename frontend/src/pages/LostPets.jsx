import React from "react";
import PetGallery from "../components/PetGallery";

const LostPetsPage = () => {
  return (
    <div className="my-40 mx-[10%]">

          <div className="my-10">
              <PetGallery
                  title="Lost & Endangered Pets"
                  statusFilter={["Lost", "Endangered"]} 
                  showGridControls={true}
              />
          </div>
    </div>
  );
};

export default LostPetsPage;
