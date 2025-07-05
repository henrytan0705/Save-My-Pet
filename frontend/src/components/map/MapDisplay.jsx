import React, { useEffect, useRef, useState } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const MapDisplay = () => {
    const mapRef = useRef(null);
    const [pets, setPets] = useState([]);

    useEffect (() => {
        fetch("/mockPets.json")
            .then((res) => res.json())
            .then((data) => setPets(data.pets))
    }, []);

useEffect(() => {
  // check if map already present
  let map = mapRef.current;
  if (!map) {
    // initialize (just once)
    map = L.map("leaflet-map").setView([40.7831, -73.9712], 12);
    L.tileLayer(
      "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      { attribution: '© OpenStreetMap contributors' }
    ).addTo(map);
    mapRef.current = map;
  }

  // when pets change, add markers
  pets.forEach((pet) => {
    const color = 
      pet.status === "In Danger" ? "red" :
      pet.status === "Rescued"    ? "green" :
      pet.status === "Missing"    ? "blue" :
                                    "gray";
    const icon = L.icon({
      iconUrl: `https://maps.google.com/mapfiles/ms/icons/${color}-dot.png`,
      iconSize: [32, 32],
    });
    L.marker([pet.lat, pet.lng], { icon })
     .addTo(map)
     .bindPopup(`<b>${pet.name}</b><br/>${pet.description}`);
  });
}, [pets]);

  return (
    <div id="leaflet-map" className="w-full h-[400px] rounded-md shadow-md z-0">
    </div>
  );
};

export default MapDisplay;