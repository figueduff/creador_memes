import Input_texto from "./input_texto";

function Mostrar_img(img) {
  return (
    <>
      <div className="img_container" id="img_container">
          <figure id="figure">
            <img
              className="imagen"
              src={
                img.img !== ""
                  ? `https://api.memegen.link/images/${img.img}.png`
                  : "img/no_img.webp"
              }
            />
          </figure>
      <Input_texto />
      <Input_texto />
      </div>
    </>
  );
}

export default Mostrar_img;
