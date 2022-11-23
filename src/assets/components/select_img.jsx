import React, { useState, useEffect } from "react";
import Mostrar_img from "./mostrar_img";

function Select_img() {
  const [img, setimg] = useState("");
  const [memes, setmemes] = useState([]);

  // selecion de imagen
  const imgSelecionada = (e) => {
    const listOption = e.target.list.querySelector(
      '[value="' + e.target.value + '"]'
    );
    setimg(listOption.dataset.url);
    console.log(listOption.dataset.url);
  };

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
      <h4>Elegir Imagen</h4>
      <input
        list="meme"
        onChange={imgSelecionada}
        placeholder="Elegir imagen"
      />
      <datalist id="meme">
        {memes.map((op) => (
          <option key={op.id} value={op.name} data-url={op.id}></option>
        ))}
      </datalist>
      <div>
      <Mostrar_img img={img} />
    </div>
    </>
  );
}

export default Select_img;
