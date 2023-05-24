const $alertBtn = document.getElementById("alert") as HTMLButtonElement
const $removeBtn = document.getElementById("remove-alert") as HTMLButtonElement;

$alertBtn.addEventListener("click",(e:any) => {
  console.log("hola");
  //const event = e.target as HTMLButtonElement
  console.log(e.target);
  holaMundo( "gabriel" , e)
})

function holaMundo(value:string,e:any) {
  console.log("esta enfermo o que");
  alert("hola mundo" + " " + value)
}

/**
 * Remover Eventos
 */

function removerClick(e:Event) {
  let btnEvent = e.target as HTMLButtonElement
  alert("Removiendo Alert")
  $removeBtn.removeEventListener("click", removerClick)
  btnEvent.disabled = true
}

$removeBtn.addEventListener("click", removerClick);