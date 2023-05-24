const $figure = document.createElement("figure")
const $img = document.createElement("img")
const $figcaption = document.createElement("figcaption")

$figure.classList.add("card")
$figcaption.textContent = "Animal"
$img.setAttribute("src", "https://placeimg.com/200/200/animals");

$figure.append($img,$figcaption)

export const $cards = document.querySelector(".cards")

$cards?.appendChild($figure)

/**
 * Fragmentos
 */

const dias = ["lunes","martes","miercoles","jueves","viernes"]

const $ul = document.createElement("ul")
const $fragment = document.createDocumentFragment();

dias.forEach(( el ) => {
  const $li = document.createElement("li")
  $li.textContent = el
  $fragment.appendChild($li)
})

document.write("<h3>Dias de la semana</h3>")

$ul.appendChild($fragment)

document.body.appendChild($ul)