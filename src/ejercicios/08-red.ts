export function deteccionRed() {
  const $alertConnection = document.getElementById("alertConnection");
  
  window.addEventListener("online", () => {
    const $div = document.createElement("div");

    if(navigator.onLine) {
      $div.textContent = "Recuerastes la linea";
      $alertConnection?.append($div);
    } else {
      $div.textContent = "Perdiste la linea";
      $alertConnection?.append($div);
    }

    setTimeout(() => $alertConnection?.removeChild($div) ,2000)

  });

  window.addEventListener("offline", () => {
     const $div = document.createElement("div");

     if (navigator.onLine) {
       $div.textContent = "Recuerastes la linea";
       $alertConnection?.append($div);
     } else {
       $div.textContent = "Perdiste la linea";
       $alertConnection?.append($div);
     }

     setTimeout(() => $alertConnection?.removeChild($div), 2000);
  });
}
