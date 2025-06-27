const button = document.getElementById("exampleId");

function toggleMenu() {
    const nav = document.getElementById("navbar");
    nav.classList.toggle("show");
}

document.addEventListener("DOMContentLoaded", function () {
  const map = L.map("map").setView([40.7831, -73.9712], 12);
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution:
       '© <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
  }).addTo(map);   
  
  fetch("mockPets.json")
    .then((res) =>res.json())
    .then((data) => {
        data.pets.forEach((pet) => {
            let iconColor;
            if(pet.status === "In Danger") iconColor = "red";
            else if(pet.status === "Rescued") iconColor = "green";
            else if(pet.status === "Missing") iconColor = "blue";

            const icon = L.icon({
                iconUrl: `https://maps.google.com/mapfiles/ms/icons/${iconColor}-dot.png`,
                iconSize: [32, 32],
                iconAnchor: [16, 32],
                popupAnchor: [0, -32],
            });

            L.marker([pet.lat, pet.lng], { icon: icon})
                .addTo(map)
                .bindPopup(
                    `<strong>${pet.name}</strong><br>Status: ${pet.status}<br>${pet.description}`
            );
        });
    })
    .catch((err) => {
        console.error("Failed to load pet data", err);
    });
});


     
                

