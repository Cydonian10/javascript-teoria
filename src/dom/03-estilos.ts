const $linkDom = document.querySelector<HTMLAnchorElement>(".dom-link")

//console.log($linkDom?.style.backgroundColor);
//console.log(window.getComputedStyle($linkDom!));

$linkDom!.style.display = "block"
$linkDom!.style.textDecoration = "none"
$linkDom!.style.padding = "10px"
$linkDom!.style.marginTop = "10px"
$linkDom!.style.textAlign = "center"
$linkDom!.style.backgroundColor = "cyan"
$linkDom!.style.color = "slate"
$linkDom!.style.border = "1px solid cyan"
$linkDom!.style.borderRadius = "5px"


// variables css properitys css

const $html = document.documentElement
const $body = document.body;

let varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color")
let varYellowColor = getComputedStyle($html).getPropertyValue("--yellow-color")
console.log("Enviando =>",varDarkColor,varYellowColor);

$body.style.backgroundColor = varDarkColor;
$body.style.color = varYellowColor

$html.style.setProperty("--dark-color", "#555");
varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color");
$body.style.backgroundColor = varDarkColor;

/**
 * Csss y clases
 */

const $car = document.querySelector<HTMLDivElement>(".car");

console.log($car);
console.log($car?.className);
console.log($car?.classList);
console.log($car?.classList.contains("rotate-45"));
$car?.classList.add("rotate-45");
console.log($car?.classList.contains("rotate-45"));

$car?.classList.remove("rotate-45");
$car?.classList.toggle("rotate-45");
$car?.classList.toggle("rotate-45");
$car!.classList.add("rotate-45", "sepia");