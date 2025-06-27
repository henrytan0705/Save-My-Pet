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

    const markers = [];
  
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

                const marker = L.marker([pet.lat, pet.lng], { icon: icon})
                    .bindPopup(
                        `<strong>${pet.name}</strong><br>Status: ${pet.status}<br>${pet.description}`
                    )
                    .addTo(map);
                markers.push( {marker, status: pet.status })    
            });
    })
    .catch((err) => {
        console.error("Failed to load pet data", err);
    });

    const dangerCheckbox = document.getElementById("dangerOnly");
    const rescuedCheckbox = document.getElementById("rescuedOnly");
    const missingCheckbox = document.getElementById("missingOnly");
    const showAllCheckbox = document.getElementById("showAll");

    [dangerCheckbox, rescuedCheckbox, missingCheckbox, showAllCheckbox].forEach((box) =>
        box.addEventListener("change", updateFilters)
    );

    function updateFilters(){
        const showDanger = dangerCheckbox.checked;
        const showRescued = rescuedCheckbox.checked;
        const showMissing = missingCheckbox.checked;
        const showAll = showAllCheckbox.checked;

        if (showAll) {
            dangerCheckbox.checked = false;
            rescuedCheckbox.checked = false;
            missingCheckbox.checked = false;
        }

        markers.forEach (({ marker, status }) => {
            const shouldShow = 
            (!showDanger && !showRescued && !showMissing) ||
            (status === "In Danger" && showDanger) ||
            (status === "Rescued" && showRescued) ||
            (status === "Missing" && showMissing);

            if (shouldShow) {
                marker.addTo(map);
            }
            else {
                map.removeLayer(marker);
            }
        });
    }
});


     
                

