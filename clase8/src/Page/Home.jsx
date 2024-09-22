import { useState } from "react";

import imagen1 from "../assets/imagen1.jpg";
import imagen2 from "../assets/imagen2.jpg";
import imagen3 from "../assets/imagen3.jpg";
import imagen4 from "../assets/imagen4.jpeg";

import "../styles/Page/home.css";

function Home() {
  const [imagenState, setImagenState] = useState(imagen3); 
  const listaImagenes = [imagen1, imagen2, imagen3, imagen4];

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  const handlerButton = () => {
    const aleatorio = getRandomInt(listaImagenes.length);
    setImagenState(listaImagenes[aleatorio]);
    console.log(aleatorio);
  };

  return (
    <main>
      <figcaption>
        <img src={imagenState} alt="Imagen mostrada" />
      </figcaption>

      <button onClick={handlerButton}>Cambiar imagen</button>
    </main>
  );
}

export default Home;
