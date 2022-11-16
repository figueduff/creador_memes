import React, { useState } from "react";

function input_texto() {
  const [textoMeme, settextoMeme] = useState();
  const [colorTexto, setcolorTexto] = useState("black");
  const [tamanioTexto, settamanioTexto] = useState("20");
  const [tipografiaTexto, settipografiaTexto] = useState("Impact");

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
        <h3>Agregar Texto</h3>
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
          <option value="Impact">Impact</option>
          <option value="Arial">Arial</option>
          <option value="Verdana">Verdana</option>
        </select>
      <p className="texto_superior" style={estilos.estilo}>
        {textoMeme}
      </p>
      {/* <Texto texto={textoMeme}/> */}
    </>
  );
}

export default input_texto;
