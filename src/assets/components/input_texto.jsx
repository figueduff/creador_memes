import React, { useState } from "react";
import Draggable, { DraggableCore } from "react-draggable";

function input_texto() {
  const [textoMeme, settextoMeme] = useState();
  const [colorTexto, setcolorTexto] = useState("black");
  const [tamanioTexto, settamanioTexto] = useState("20");
  const [tipografiaTexto, settipografiaTexto] = useState("Anton");

  const estilos = {
    estilo: {
      color: colorTexto,
      fontSize: tamanioTexto + "px",
      fontFamily: tipografiaTexto,
      textTransform: "uppercase",
      textShadow: "0 0 3px #000000",
    },
  };

  return (
    <>
    <div data-html2canvas-ignore>
    <h3>Texto 1 - Arrastrar para ubicar</h3>
      <input
        onChange={(e) => {
          settextoMeme(e.target.value);
        }}
        type="text"
      />
      <input
        onChange={(e) => {
          setcolorTexto(e.target.value);
          console.log(colorTexto);
        }}
        type="color"
      />
      <input
        onChange={(e) => {
          settamanioTexto(e.target.value);
          console.log(tamanioTexto);
        }}
        type="range"
        min="20"
        max="40"
        value={tamanioTexto}
        step="1"
      />
      <select
        onChange={(e) => {
          settipografiaTexto(e.target.value);
          console.log(tipografiaTexto);
        }}>
        <option value="Anton">Anton</option>
        <option value="Roboto">Roboto</option>
        <option value="Crafty Girls">Crafty</option>
      </select>
      </div>
      <Draggable bounds="figure">
        <p className="texto_superior" id="texto_clon" style={estilos.estilo}>
          {textoMeme}
        </p>
      </Draggable>
    </>
  );
}

export default input_texto;
