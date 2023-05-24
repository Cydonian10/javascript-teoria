//window.prompt("Aviso")
//window.confirm("asdf")

const $abrirBtn =  document.querySelector("#abrir-btn")
const $cerrarBtn =  document.querySelector("#cerrar-btn")
const $imprimirBtn =  document.querySelector("#imprimir-btn")


$abrirBtn?.addEventListener("click",() => {
  window.open(
    "https://www.google.com/search?q=psg+vs&oq=psg+vs&aqs=chrome.0.69i59.1150j0j1&sourceid=chrome&ie=UTF-8"
  );
})
$cerrarBtn?.addEventListener("click", () => {
  window.close()
});
$imprimirBtn?.addEventListener("click", () => {
  window.print()
});

console.log(location); //url
console.log(URL);
console.log(history);
console.log(navigator);