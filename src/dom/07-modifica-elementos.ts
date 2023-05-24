/**
 * Inser Adjacent
 */

// insertAdjacentElement(positon,el)
// insertAdjacentHtml(positon,el)
// insertAdjacentText(positin,text)

/**
 * Positionces
 */

// beforebegin( hermano anterios)
// afterbegin ( primer hijo)
// beforeend ( ultimo hijo)
// afterend ( hermano siguiente)

export const $cards = document.querySelector(".cards");

export const $figure = document.createElement("figure");
export const $img = document.createElement("img");
export const $figcaption = document.createElement("figcaption");

$figure.classList.add("card");
$figcaption.insertAdjacentText("afterbegin", "Prueba");
$img.setAttribute("src", "https://placeimg.com/200/200/animals");

$figure.append($img, $figcaption);


$cards?.insertAdjacentElement("afterend", $figure);

/**
 * $cards.prepend($newCard)
 * $cards.append($newCard)
 * $cards.before($newCard)
 * $cards.after($newCard)
 */