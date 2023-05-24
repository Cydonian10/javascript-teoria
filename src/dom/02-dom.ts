const links = document.getElementsByTagName("a") // html collections
const cards = document.getElementsByClassName("card") // html collections
const inputName = document.getElementsByName("nombre") // nodeListoF
const menu = document.getElementById("menu") // Etiqueta html

const menu2 = document.querySelector("a") 
const links2 = document.querySelectorAll("#menu a")  //  nodelistof<HtmlElement>


/**
 * Atributos y Data-atributos
 */

console.log(document.documentElement.getAttribute("lang")); // set Atribute

/**
 * Atribute link
 */
const $domLink = document.querySelector<HTMLAnchorElement>(".dom-link");
console.log($domLink?.getAttribute("href"));


document.documentElement.setAttribute("lang","es-MX") //Set Atribute
console.log(document.documentElement.getAttribute("lang"));

$domLink?.setAttribute("target","_blank")
$domLink?.removeAttribute("target")

/**
 * Data atributes
 */

console.log($domLink?.getAttribute("data-description"));
console.log($domLink?.dataset); // una mapa de los atributos creados
console.log($domLink?.dataset.description);
$domLink?.setAttribute("data-description","Modelo de objeto del documento modificado")
