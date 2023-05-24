const $cards = document.querySelector<HTMLDivElement>(".cards")
const $template = (document.getElementById("template-card") as HTMLTemplateElement).content
const $fragment = document.createDocumentFragment()

const cardContent = [
  {title:"animal",image:"https://placeimg.com/200/200/animals"},
  {title:"naturaleza",image:"https://placeimg.com/200/200/nature"},
  {title:"techonlogia",image:"https://placeimg.com/200/200/tech"},
]

cardContent.forEach( el => {
  $template.querySelector("img")!.setAttribute("src",el.image)
  $template.querySelector("figcaption")!.textContent = el.title

  let $clone = document.importNode($template,true)
  $fragment.appendChild($clone)
})

$cards?.appendChild($fragment)