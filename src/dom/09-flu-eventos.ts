/**
 * Flujo de eventos
 */

const $uno = document.querySelector(".uno")
const $dos = document.querySelector(".dos")
const $tres = document.querySelector(".tres")
const $flujoEventos = document.querySelector(".eventos-flujo")


const $divsFlujo = document.querySelectorAll(".evento-flujo div") as NodeListOf<HTMLDivElement>


$divsFlujo.forEach( el => {
  el.addEventListener("click",(e:Event) => {
    const ElementDiv = e.target as HTMLDivElement
    console.log(`Hola ${ElementDiv.className}`);
    e.stopPropagation()
  }
  // {
  //   capture:false,
  //   once:true // una sola vez
  // }
  )
})