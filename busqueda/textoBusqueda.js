// Filtro de busqueda de libros: pagina de buscar: Pagina Buscar

document.addEventListener("keyup", (e) => {
    if(e.target.matches(".filtroBusqueda")){
        document.querySelectorAll(".BusquedaDeLibro").forEach((libro) => {
            libro.textContent.toLocaleLowerCase().includes(e.target.value)?libro.classList.remove("filter"):libro.classList.add("filter");
        });
        if(e.key === "Escape"){
            e.target.value = "";
        }
        }
    });


// Resultado de busqueda "Texto" pagina de busqueda:

const busquedaIngresa = document.getElementById("inputBusqueda");
const resultado = document.getElementById("resultadoBusqueda");

busquedaIngresa.addEventListener("input", () => {
    resultado.textContent = busquedaIngresa.value;
});