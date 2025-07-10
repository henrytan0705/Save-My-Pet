import React, { useState, useEffect } from "react";
import MapDisplay from "../components/map/MapDisplay";
import PetList from "../components/map/PetList";
import MapFilters from "../components/map/MapFilters";
import MapLegend from "../components/map/MapLegend";

const API = import.meta.env.VITE_API_ENDPOINT_URL;

const Map = () => {
  const [filters, setFilters] = useState({
    inDanger: true,
    rescued: true,
    missing: true,
  });

  const [pets, setPets] = useState([]);

  const [selectedPet, setSelectedPet] = useState(null);

  useEffect(() => {
    async function load() {
      try {
        const url = `${API}/api/posts`;
        const res = await fetch(url);
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const text = await res.text();

        // try to parse it as JSON
        try {
          const data = JSON.parse(text);
          setPets(data);
        } catch (err) {
          console.error("Invalid JSON from", url, "\nResponse:", text);
        }
      } catch (err) {
        console.error("Fetch error:", err);
      }
    }
    load();
  }, []);

  const visiblePets = pets.filter(pet => {
    if (pet.status === "Endangered" && !filters.inDanger) return false;
    if ((pet.status === "Rescued" || pet.status === "Found") && !filters.rescued) return false;
    if (pet.status === "Lost" && !filters.missing) return false;
    return true;
  });

  const handleFilterChange = e => {
    const { name, checked } = e.target;
    setFilters(f => ({...f, [name]: checked}));
  };

  return (

    <main className="pt-10 px-4 min-h-screen bg-gray-100">
      {/* Page Title */}
        <div><h1 className="text-center">Map</h1></div>
        {/* Container for map and petlist */}
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-6 md:h-[70vh]">
            {/* Pet List */}
            <section className="order-3 md:order-1 flex-1 min-w-[250px] overflow-y-auto md:max-h-full">
              <PetList
                pets={visiblePets}            
                selectedPet={selectedPet}     
                onSelectPet={pet => setSelectedPet(pet)} 
              />
            </section>

            {/* Map Display */}
            <section className="order-1 md:order-2 flex-1 md:flex-[2] min-w-[300px] h-[50vh] md:h-full">
                <MapDisplay 
                  pets={visiblePets}
                  selectedPet={selectedPet}
                  filters={filters}
                  onSelectPet={pet => setSelectedPet(pet)}
                />
            </section>
        
            {/* Filters & Legend */}
            <aside className="order-2 md:order-3 w-full md:w-1/4 space-y-6">
                <MapLegend />
                <MapFilters 
                  filters={filters}
                  onFilterChange={handleFilterChange}
                />
            </aside>
        </div>
    </main>
  );
};

export default Map;