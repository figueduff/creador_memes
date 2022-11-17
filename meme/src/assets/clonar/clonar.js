
const contenedorTexto = document.querySelector('.img_container')
const boton = document.querySelector('#boton');
const frase = document.querySelector('#texto_clon')
boton.addEventListener('click', () => {
    const textohecho = frase.cloneNode(true);
    contenedorTexto.appendChild(textohecho);
    console.log(contenedorTexto)
})
