export function filterImage() {

  const $inputSearch = document.querySelector("#search") as HTMLInputElement;
  const $cards = document.querySelectorAll(".card")

  $inputSearch?.addEventListener("keyup", (e) => {
    const elementInput = e.target as HTMLInputElement

    $cards.forEach( el => {
      if (el.textContent?.toLocaleLowerCase().includes(elementInput.value) )
      {
        el.classList.remove("opacity-0","order-1")
      }else {
        el.classList.add("opacity-0","order-1")
      }
    
    })
    
  })
}