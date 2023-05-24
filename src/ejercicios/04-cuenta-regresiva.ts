export function cuentaRegresiva()
{
  const fechaLimite = new Date("May 22,2023 15:10:00").getTime()
  const $cuentaRegresiva = document.querySelector(".cuentaRegresiva")
  // console.log((fechaLimite - fecha) /( 1000 * 60 * 60 * 24));
  
  let calcularTiempo =  setInterval(() => {
    let fecha = new Date().getTime()
    let limitTime = fechaLimite - fecha
    let days = Math.floor(limitTime / (1000 * 60 * 60 * 24));
    let hours = ("0" + Math.floor((limitTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).slice(-2);
    let minutes =( "0" + Math.floor( ( limitTime % (1000 * 60 * 60) ) / (1000 * 60) )).slice(-2)
    let segundos = ( "0" + Math.floor((limitTime % (1000 * 60 )) / 1000 )).slice(-2)

    $cuentaRegresiva!.innerHTML = `<h3>Faltan ${days} dias ${hours} horas ${minutes} minutos ${segundos} segundos</h3>`

    if ( limitTime < 0) {
      clearInterval(calcularTiempo);
      $cuentaRegresiva!.innerHTML = "<h3>Felicitaciones</h3>"
    }

  },1000)

  
}