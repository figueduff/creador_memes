import Input_texto from "./input_texto";

function Mostrar_img(img) {
  return (
    <>
      <div className="img_container" id="img_container">
        <figure id="figure">
          <img
            id="ubicar"
            alt="imagen"
            src={
              img.img !== ""
                ? `${img.img}`
                : "img/no_img.webp"
            }
          />
        </figure>
        <h5 data-html2canvas-ignore className="mt-1">
          Arrastrar el texto para ubicarlo
        </h5>
        <Input_texto />
        <Input_texto />
      </div>
    </>
  );
}

export default Mostrar_img;
