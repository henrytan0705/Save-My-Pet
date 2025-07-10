import React, { useEffect, useRef, useState } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const MapDisplay = ({pets = [], selectedPet}) => {
    const mapRef = useRef(null);
    const overlaysRef = useRef([]);

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
    overlaysRef.current.forEach(o => o.remove());
    overlaysRef.current = [];

    // add markers as dictated by filters
    pets.forEach((pet) => {
        const [lat, lng] = pet.coordinates || [];
        if (lat ==null || lng == null) return; 
        
        if (pet.status === "Lost") {
          const circle = L.circle([lat, lng], {
            radius: 300, // 500 meters
            color: "blue",
            fillColor: "blue",
            fillOpacity: 0.2,
            weight: 2
          }).addTo(map);

          circle.petId = pet._id;
          circle.bindPopup(`<b>${pet.name}</b><br/>${pet.location}`);
          overlaysRef.current.push(circle);

          const blueIcon = L.icon({
            iconUrl: "https://maps.google.com/mapfiles/ms/icons/blue-dot.png",
            iconSize: [32, 32],
            iconAnchor: [16, 32]
          });
          const marker = L.marker([lat, lng], { icon: blueIcon }).addTo(map);
            marker._petId = pet._id;
            marker.bindPopup(`<strong>${pet.name}</strong><br/>${pet.location}`);
            overlaysRef.current.push(marker);

        } else {
          let color;
          switch (pet.status) {
            case "Endangered": color = "red";    break;
            case "Rescued":    color = "green";  break;
            case "Lost":       color = "blue";   break;
            case "Found":      color = "gray";   break;  // or pick another
            default:           color = "purple"; break;
        }

        const icon = L.icon({
            iconUrl: `https://maps.google.com/mapfiles/ms/icons/${color}-dot.png`,
            iconSize: [32, 32],
            iconAnchor: [16, 32]
        });

        const marker = L.marker([lat, lng], { icon }).addTo(map);
          marker._petId = pet._id;
          marker.bindPopup(`<b>${pet.name}</b><br/>${pet.location}`)
          overlaysRef.current.push(marker);
        }
    });   
  }, [pets]);     

  useEffect(() => {
    if (!selectedPet) return;
    const overlay = overlaysRef.current.find(o => o._petId === selectedPet._id);
    if (overlay) {
        overlay.openPopup();
        const latlng = overlay.getLatLng();
        mapRef.current.setView(letlng, 14);
    }
  }, [selectedPet]);

  return (
    <div id="leaflet-map" className="w-full h-full rounded-md shadow-md z-0">
    </div>
  );
};

export default MapDisplay;