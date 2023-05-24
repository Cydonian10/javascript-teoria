export function alarma() {

  const $start = document.querySelector("#start-reloj") as HTMLButtonElement
  const $stop = document.querySelector("#stop-reloj") as HTMLButtonElement
  const $relojHtml = document.querySelector(".reloj")

  let intervalReloj: any;

  $start?.addEventListener("click",()=> {

    intervalReloj =  setInterval(() => {
      let reloj = new Date().toLocaleTimeString();
      $relojHtml!.textContent = reloj;
    },1000)

    $start.disabled = true

  })

  $stop?.addEventListener("click",() => {
    $relojHtml!.textContent = ""
    clearInterval(intervalReloj);

    $start.disabled = false
  })

}