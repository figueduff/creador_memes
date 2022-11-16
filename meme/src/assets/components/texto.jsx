import React, { useState } from "react";

function texto(texto) {
  const [updateTexto, setUpdateTexto] = useState();

  console.log("llega a texto", texto.texto);
  return <p>test texto{updateTexto}</p>;
}

export default texto;
