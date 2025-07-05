import React, { useEffect, useRef, useState } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const MapDisplay = ({filters}) => {
    const mapRef = useRef(null);
    const markersRef = useRef([]);
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

    // remove old markers
    markersRef.current.forEach(marker => marker.remove());
    markersRef.current = [];

    // add markers as dictated by filters
    pets.forEach((pet) => {
        const shouldShow = 
            (pet.status === "In Danger" && filters.inDanger) 
            || (pet.status === "Rescued" && filters.rescued)
            || (pet.status === "Missing" && filters.missing);        
        
        if (!shouldShow) return;   
        
        const color = 
            pet.status === "In Danger" ? "red" 
                : pet.status === "Rescued" ? "green" 
                : pet.status === "Missing" ? "blue" 
                : "gray";

        const icon = L.icon({
            iconUrl: `https://maps.google.com/mapfiles/ms/icons/${color}-dot.png`,
            iconSize: [32, 32],
        });

        const marker = L.marker([pet.lat, pet.lng], { icon })
            .bindPopup(`<b>${pet.name}</b><br/>${pet.description}`)
            .addTo(map);

        markersRef.current.push(marker);
    });
    }, [pets, filters]);

  return (
    <div id="leaflet-map" className="w-full h-[400px] rounded-md shadow-md z-0">
    </div>
  );
};

export default MapDisplay;