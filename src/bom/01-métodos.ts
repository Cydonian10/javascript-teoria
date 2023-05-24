
window.addEventListener("resize",() => {
  console.clear()
  console.log(window.innerWidth);
  console.log(window.innerHeight); // parte visible
  
  console.log(window.outerHeight); // total de pantalla
  console.log(window.outerWidth);
})


window.addEventListener("scroll", () => {
  console.clear();
  console.log(window.scrollY);
})

window.addEventListener("load", () => {
  console.log("laod",window.screenY);
})

document.addEventListener("DOMContentLoaded",() => {
    console.log(window.scrollY);
})