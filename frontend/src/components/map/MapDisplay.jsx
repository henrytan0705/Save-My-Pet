import React, { useEffect, useRef, useState } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const MapDisplay = ({pets = [], selectedPet}) => {
    const mapRef = useRef(null);
    const markersRef = useRef([]);

    useEffect(() => {
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
        const [lat, lng] = pet.coordinates || [];
        if (lat ==null || lng == null) return; 
            
        let color;
        switch (pet.status) {
          case "Endangered": color = "red";    break;
          case "Rescued":    color = "green";  break;
          case "Lost":       color = "blue";   break;
          case "Found":      color = "gray";   break;  // or pick another color
          default:           color = "purple"; break;
        }

        const icon = L.icon({
            iconUrl: `https://maps.google.com/mapfiles/ms/icons/${color}-dot.png`,
            iconSize: [32, 32],
            iconAnchor: [16, 32]
        });

        const marker = L.marker([lat, lng], { icon })
            .bindPopup(`<b>${pet.name}</b><br/>${pet.location}`)
            .addTo(mapRef.current);

        marker._petId = pet._id;
        markersRef.current.push(marker);
    });   
  }, [pets]);     

  useEffect(() => {
    if (!selectedPet) return;
    const marker = markersRef.current.find(m => m._petId === selectedPet._id);
    if (marker) {
        marker.openPopup();
        const { lat, lng } = marker.getLatLng();
        mapRef.current.setView([lat, lng], 14);
    }
  }, [selectedPet]);

  return (
    <div id="leaflet-map" className="w-full h-full rounded-md shadow-md z-0">
    </div>
  );
};

export default MapDisplay;