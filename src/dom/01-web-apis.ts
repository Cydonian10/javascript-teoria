// web apis

import { Printer } from "../utils/Printer";

/**
 * Dom -> Documemnt Object  Model
 * Bom -> Browser Object Model
 * Cssom -> Css Objct Model
 */

/**
 * Web Apis
 */

/**
 * Eventos
 * Forms
 * Ajax- Fetch
 * History
 * Web Store
 * Geolocation
 * Drag & Drop
 * Indexd DB
 * Canvas
 * Match Media
 */


const hablar = () =>
  speechSynthesis.speak(new SpeechSynthesisUtterance("hola mundo como estas"));

hablar()

Printer.printerTitle("Elementos del Documento")

console.log(window.document);
console.log(document.head);
console.log(document.body);
console.log(document.documentElement); // etiqueta html
console.log(document.doctype);
console.log(document.title); // title
console.log(document.links);
console.log(document.getSelection()?.toString()); // para seleccionar
document.write("<h2>Hola mundo desde el dom mi clase</h2>")

/**
 * 63
 */