/**
 * Textos y htmls
 */

import { Printer } from "../utils/Printer"

const $whatsDom = document.getElementById("ques-es")

let text = `
    <p>
      El Modelo de Objetos del Documento (<b><i>DOM - Document Object Model </i></b>) es un                    
      API para documentos HTML y XML.
    </p>
    <p>
      Éste provée una representación estructural del documento, permitiendo modificar su contenido y presentación visual mediante código JS.
    </p>
    <p>
      <mark> El DOM no es parte de la especificación de JavaScript, es una API para los navegadores.</mark>
    </p>
`

$whatsDom!.textContent = "hola mundo" // solo texto
$whatsDom!.innerHTML = text
$whatsDom!.outerHTML = text // remplazo el contendio

/**
 * Recorriendo el dom
 */
Printer.printerTitle("Contenedor de cards")
const $cards = document.querySelector(".cards")
console.log($cards);
Printer.printerTitle("Elementos hijos")
console.log($cards?.children);
console.log($cards?.children[2]);
console.log($cards?.parentElement); //body
Printer.printerTitle("Node hijos")
console.log($cards?.firstElementChild);
console.log($cards?.lastElementChild); 
console.log($cards?.previousElementSibling); //  hemano anterios
console.log($cards?.nextElementSibling); // hemrano siguiente
console.log($cards!.closest("div")); // busca un ancestro cercano
