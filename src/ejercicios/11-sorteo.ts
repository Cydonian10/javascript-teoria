export function sorteoDigital(){
  const $btnSorteo = document.getElementById("btn-sorteo")
  const $players = document.querySelectorAll(".player")

  $btnSorteo?.addEventListener("click",() => {
   let random = Math.floor(Math.random() * $players.length);
   let winner = $players[random]

   alert(winner.textContent)
  })

  
}