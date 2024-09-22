window.addEventListener("DOMContentLoaded", async (event) => {
    const URL = "https://jsonplaceholder.typicode.com/users";
    const $lista = document.querySelector(".lista"); // Asegúrate de que la clase sea correcta

    try {
        const response = await fetch(URL);
        const data = await response.json();

        const listaElementos = data.map((item) => {
            return `<article class="contacto">
                <article class="contacto_datos">
                    <p>Nombre: <span>${item.name}</span></p>
                    <p>Correo: <span>${item.email}</span></p>
                </article>
                <article class="contacto_detalle">
                    <p>Dirección: <span>${item.address.street} | ${item.address.suite}</span></p>
                    <p>Teléfono: <span>${item.phone}</span></p>
                </article>
            </article>`;
        });

        $lista.innerHTML = listaElementos.join("");
    } catch (error) {
        console.log("Error en la API: " + error);
    }
});
