// script.js
document.getElementById("menu-toggle").addEventListener("click", function () {
    document.getElementById("navbar").querySelector("ul").classList.toggle("active");
});

  function toggleSubproductos() {
    const submenu = document.getElementById("subproductos");
    submenu.style.display = submenu.style.display === "flex" ? "none" : "flex";
  }

  function seleccionarProducto(nombre) {
    alert("Seleccionaste: " + nombre);
    // Podés reemplazar el alert por abrir un modal, redireccionar o mostrar info en pantalla
  }

let current = 0;
const images = document.querySelectorAll(".fade-img");

setInterval(() => {
  images[current].classList.remove("active");
  current = (current + 1) % images.length;
  images[current].classList.add("active");
}, 3000); // Cambia cada 3 segundos


