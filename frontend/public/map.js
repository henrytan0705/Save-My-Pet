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
});



