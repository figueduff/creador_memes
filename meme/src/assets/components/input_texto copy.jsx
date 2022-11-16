import React from "react";
import { useState } from "react";

function input_texto() {
  const [textoMeme, settextoMeme] = useState();
  const [colorTexto, setcolorTexto] = useState("black");
  const [tamanioTexto, settamanioTexto] = useState("12px");
  const [anchoTexto, setanchoTexto] = useState();

  const levantaTexto = (e) => {
    settextoMeme(e.target.value);
  };

  const levantaColor = (e) => {
    setcolorTexto(e.target.value);
    console.log(colorTexto);
  };

  const levantaTamanio = (e) => {
    settamanioTexto(e.target.value);
    console.log(tamanioTexto);
  };

  const levantaAncho = (e) => {
    setanchoTexto(e.target.value);
    console.log(anchoTexto);
  };

  const estilos = {
    estilo: {
      // color: colorTexto,
      fontSize: tamanioTexto,
      fontfamily: "'Roboto', sans-serif",
    },
  };

  return (
    <div>
      <h3>Agregar Texto</h3>
      <input onChange={levantaTexto} type="text" />
      <input onChange={levantaColor} type="color" />
      <input
        onChange={levantaTamanio}
        type="range"
        min="12"
        max="30"
        step="1"
      />
      <p style={estilos.estilo}>{textoMeme}</p>
    </div>
  );
}

export default input_texto;
