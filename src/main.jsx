import React from "react";
import ReactDOM from "react-dom/client";
import Select_img from "./assets/components/select_img";
import html2canvas from "html2canvas";

const onClickExportar = function (evento) {
  alert("Se va a descargar su Meme");

  // html2canvas(document.querySelector("#figure")).then( (canvas) => {
  //   var img = canvas.toDataURL("image/png");
  //   var link = document.createElement("a");
  //   link.download = "Meme.jpg";
  //   link.href = img;
  //   link.click();
  // });

  html2canvas(document.querySelector("#img_container"), {
    allowTaint: true,
    useCORS: true,
  }).then((canvas) => {
    let img = canvas.toDataURL("image/png");
    let link = document.createElement("a");
    link.download = "Meme.jpg";
    link.href = img;
    link.click();
  });
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="container bg-light text-center">
    <Select_img />
    <button onClick={onClickExportar} class="btn btn-primary sm">Descargar Meme</button>
    </div>
  </React.StrictMode>
);
