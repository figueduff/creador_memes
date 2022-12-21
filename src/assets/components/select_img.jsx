import React, { useState, useEffect, useRef } from "react";
import Mostrar_img from "./mostrar_img";

function Select_img() {
  const [img, setimg] = useState("");
  const [memes, setmemes] = useState([]);
  const imgseleccionada = useRef();

  // selecion de imagen
  function handleClick(e) {
    // const listOption = e.target.src; //con img
    const listOption = e.target.dataset.url;
    setimg(listOption);
  }

  // fetch de api imagenes
  const apiUrl = "https://api.memegen.link/templates";

  const datos = async () => {
    const response = await fetch(apiUrl);
    const datafull = await response.json();
    const data = datafull.filter((filtrar) => filtrar.lines == 2);
    setmemes(data);
  };

  useEffect(() => {
    datos();
  }, []);

  return (
    <>
      <div id="eleccionimg">
        <h5>Generador de Meme</h5>
        <div className="dropdown">
          <button
            className="btn dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false">
            Elegir imagen
          </button>
          <ul className="dropdown-menu dropdown-menu-center">
            {memes.map((op) => (
              <li
                className="dropdown-item"
                key={op.id}
                data-url={op.blank}
                onClick={handleClick}
                ref={imgseleccionada}>
                {/* <img src={op.blank} /> */}
                {op.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div>
        <Mostrar_img img={img} />
      </div>
    </>
  );
}

export default Select_img;
