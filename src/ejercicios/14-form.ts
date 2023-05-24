export function contactForm() {

  const $form = document.querySelector(".form") as HTMLFormElement
  
  const $inputs = document.querySelectorAll(".form [required") as NodeListOf<HTMLInputElement>

  $inputs.forEach( el => {
    const $span = document.createElement("span")
    $span.id = el.name
    $span.classList.add("error-form","invisible","hidden2")
    $span.textContent = el.title
    el.insertAdjacentElement("afterend",$span)
  })

  $form?.addEventListener("submit",(e:Event) => {
    e.preventDefault()
    
    $inputs.forEach( el => {
      let pattern = el.pattern || el.dataset.pattern

      if(pattern) {
        console.log("el input tien patron");
        let regex = new RegExp(pattern)
        return !regex.exec(el.value)
          ? document.getElementById(el.name)?.classList.remove("hidden2", "invisible")
          : document.getElementById(el.name)?.classList.add("hidden2", "invisible");
      }

      if(!pattern) {
        console.log("el input no tiene patron");
      }
    })
  })
}