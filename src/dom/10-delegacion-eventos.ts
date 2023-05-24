export const $flujoEventos = document.querySelector(".evento-flujo") as HTMLDivElement;

console.log($flujoEventos);

$flujoEventos?.addEventListener("click",(e:Event)=> {
  // console.log("click",e.target);
  const element= e.target as HTMLDivElement

  if( element.matches(".uno")) {
    console.log("codigo se va desancadenar");
  }
})