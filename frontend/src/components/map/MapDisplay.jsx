import React, { useEffect, useRef, useState } from "react";
import L, { map } from "leaflet";
import "leaflet/dist/leaflet.css";

const MapDisplay = ({pets = [], selectedPet, filters, onSelectPet}) => {
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
    overlaysRef.current.forEach((o) => o.remove());
    overlaysRef.current = [];

    // add markers as dictated by filters
    pets.forEach((pet) => {
        const [lat, lng] = pet.coordinates || [];
        if (lat ==null || lng == null) return; 

        const isVisible =
          (pet.status === "Endangered" && filters.inDanger) ||
          ((pet.status === "Rescued" || pet.status === "Found") && filters.rescued) ||
          (pet.status === "Lost" && filters.missing);
        if (!isVisible) return;
        
        if (pet.status === "Lost") {
          const circle = L.circle([lat, lng], {
            radius: 300, // 300 meters
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
            marker.on("click", () => {onSelectPet(pet); });
            overlaysRef.current.push(marker);

        const blueIcon = L.icon({
          iconUrl: "https://maps.google.com/mapfiles/ms/icons/blue-dot.png",
          iconSize: [32, 32],
          iconAnchor: [16, 32],
        });
        const marker = L.marker([lat, lng], { icon: blueIcon }).addTo(map);
        marker._petId = pet._id;
        marker.bindPopup(`<strong>${pet.name}</strong><br/>${pet.location}`);
        overlaysRef.current.push(marker);
      } else {
        let color;
        switch (pet.status) {
          case "Endangered":
            color = "red";
            break;
          case "Rescued":
            color = "green";
            break;
          case "Found":
            color = "green";
            break;
          default:
            color = "purple";
            break;
        }

        const icon = L.icon({
          iconUrl: `https://maps.google.com/mapfiles/ms/icons/${color}-dot.png`,
          iconSize: [32, 32],
          iconAnchor: [16, 32],
        });

        const marker = L.marker([lat, lng], { icon }).addTo(map);
          marker._petId = pet._id;
          marker.bindPopup(`<b>${pet.name}</b><br/>${pet.location}`)
          marker.on("click", () => {onSelectPet(pet); });
          overlaysRef.current.push(marker);
        }
    });   
  }, [pets, filters]);     

  useEffect(() => {
    if (!selectedPet) return;
    overlaysRef.current.forEach((overlay) => {
      if (overlay._petId === selectedPet._id) {
        if (typeof overlay.openPopup === "function") {
          overlay.openPopup();
        }

        let latlng;
        if (typeof overlay.getLatLng === "function") {
          latlng = overlay.getLatLng();
        } else if (overlay.getBounds) {
          latlng = overlay.getLatLng();
        }
        if (latlng) {
          mapRef.current.setView(latlng, 14);
        }
      }
    });
  }, [selectedPet]);

  return (
    <div className="w-full h-[50vh] md:h-full">
      <div
        id="leaflet-map"
        className="w-full h-full rounded-md shadow-md z-0"
      ></div>
    </div>
  );
};

export default MapDisplay;
