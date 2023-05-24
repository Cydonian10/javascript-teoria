export function scrollTop()
{
  const $scrollBtn = document.querySelector("#scroll-top") as HTMLButtonElement;

  window.addEventListener("scroll", () => {
    if( document.documentElement.scrollTop > 500) {
      $scrollBtn.classList.remove("hidden")
    }

    if( document.documentElement.scrollTop < 500) {
      $scrollBtn.classList.add("hidden")
    }
  })

  $scrollBtn.addEventListener("click",() => {
    window.scrollTo({
      top:0,
      behavior:"smooth"
    })
  })
}