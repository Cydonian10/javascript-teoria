

export function toogleMenu(btn: string, navbar: string) {
  const $menu = document.getElementById(btn)
  const $menuNav = document.querySelector(navbar)
  const $links = document.querySelectorAll(".menu-nav a");

  $menu?.addEventListener("click",() => {
    $menuNav?.classList.toggle("-translate-x-[100%]");
  })

  // $links.forEach( el => {
  //   el.addEventListener("click", () => {
  //     $menuNav?.classList.toggle("-translate-x-[100%]");
  //   })
  // })
}
