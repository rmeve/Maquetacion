const bloque = document.querySelector(".bloque");

bloque.addEventListener("mouseenter", () => {
    bloque.style.backgroundcolor = "red";
})


bloque.addEventListener("mouseleave", () => {
    bloque.style.backgroundcolor = "blue";
});