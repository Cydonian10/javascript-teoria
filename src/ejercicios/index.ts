// const $menu = document.getElementById("menu")
// const $menuNav = document.querySelector(".menu-nav")

// $menu?.addEventListener("click",() => {
//   $menuNav?.classList.toggle("-translate-x-[100%]");
// })

import { toogleMenu } from "./01-menu"
import { alarma } from "./02-alrma"
import { moveBall, shortcuts } from "./03-teclado"
import { cuentaRegresiva } from "./04-cuenta-regresiva"
import { scrollTop } from "./05-scroll-top"
import { darkMode } from "./06-dark-mode"
import { responseMedia } from "./07-response"
import { deteccionRed } from "./08-red"
import { webCam } from "./09-web-cam"
import { filterImage } from "./10-filters"
import { sorteoDigital } from "./11-sorteo"
import { slider } from "./12-response-slider"
import { scrollSpy } from "./13-spy"
import { contactForm } from "./14-form"
import { fecthCrud } from "./15-fetch"

document.addEventListener("DOMContentLoaded",() => {
  toogleMenu("menu" , ".menu-nav")
  alarma()
  cuentaRegresiva()
  scrollTop()
  darkMode()
  responseMedia()
  webCam()
  filterImage()
  sorteoDigital()
  slider()
  scrollSpy()
  contactForm()
  fecthCrud()
})


document.addEventListener("keydown", (e:KeyboardEvent) => {
  shortcuts(e)
  moveBall(e)
})

deteccionRed()