const button = document.getElementById("exampleId");

button.addEventListener("click", function () {
  alert("Button Pressed!");
});

function toggleMenu() {
    const nav = document.getElementById("navbar");
    nav.classList.toggle("show");
}