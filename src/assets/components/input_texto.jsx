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
      <div data-html2canvas-ignore id="modificadores">
        <div>
        <label htmlFor="texto" className="form-label">
            Texto
          </label>
        <input
          placeholder="Ingrese texto"
          onChange={(e) => {
            settextoMeme(e.target.value);
          }}
          type="text"
        />
        </div>
        <div>
          <label htmlFor="color" className="form-label">
            Color
          </label>
          <input
            onChange={(e) => {
              setcolorTexto(e.target.value);
              console.log(colorTexto);
            }}
            type="color"
          />
        </div>
        <div>
        <label htmlFor="tamaniotexto" className="form-label">
          Tamaño
        </label>
        <input
          className="form-range"
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
        </div>
        <div>
        <label htmlFor="tipografia" className="form-label">
          Tipografia{" "}
        </label>
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
      </div>
      <Draggable bounds="figure" >
        <p className="texto_superior" style={estilos.estilo}>
          {textoMeme}
        </p>
      </Draggable>
    </>
  );
}

export default input_texto;
