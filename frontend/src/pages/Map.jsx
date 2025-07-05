import React from "react";
import MapDisplay from "../components/map/MapDisplay";
import PetList from "../components/map/PetList";
import MapFilters from "../components/map/MapFilters";
import MapLegend from "../components/map/MapLegend";

const Map = () => {
  return (
    <main className="pt-36 px-4 min-h-screen">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-6">
            {/* Pet List */}
            <section className="flex-1 min-w-[250px]">
                <PetList />
            </section>

            {/* Map Display */}
            <section className="flex-1 min-w-[300px]">
                <MapDisplay />
            </section>
        
            {/* Filters & Legend */}
            <aside className="flex-1 min-w-[200px]">
                <MapFilters />
                <MapLegend />
            </aside>
        </div>
    </main>
  );
};

export default Map;