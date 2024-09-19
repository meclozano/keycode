// Defino variables
let nombre = "Pepe";
let edad = 25;
let precio = 99.90;
let seriesFavoritas = ["Dark", "Mr Robot", "Castlevania"];
let peliculasFavoritas = [
    { nombre: "Inception", año: 2010, protagonistas: ["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Elliot Page"] },
    { nombre: "The Matrix", año: 1999, protagonistas: ["Keanu Reeves", "Laurence Fishburne", "Carrie-Anne Moss"] }
];

// Mostrar todos los valores por consola
console.log("Nombre:", nombre);
console.log("Edad:", edad);
console.log("Precio:", precio);
console.log("Series Favoritas:", seriesFavoritas);
console.log("Películas Favoritas:", peliculasFavoritas);

// Incremento la edad en 1 y volver a mostrarla
edad += 1;
console.log("Nueva Edad:", edad);

// Agrego una serie a la lista de series favoritas y volver a mostrarla
seriesFavoritas.push("Stranger Things");
console.log("Series Favoritas Actualizadas:", seriesFavoritas);
