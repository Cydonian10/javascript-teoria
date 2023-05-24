export function darkMode() {
  const $darkMode = document.querySelector("#btnDark") as HTMLButtonElement;
  const $selectors = document.querySelectorAll("[data-dark]");
  let moon = "🌙";
  let sun = "☀";
  let modeDark = localStorage.getItem("mode")

  if( modeDark === null) {
    modeDark = "sun"
  }

  $darkMode.textContent = modeDark === "moon" ? moon : sun;

   if ($darkMode.textContent === sun) {
     $selectors.forEach((el) => {
       el.classList.remove("dark-mode");
     });
   } else {
     $selectors.forEach((el) => {
       el.classList.add("dark-mode");
     });
   }

  $darkMode.addEventListener("click", () => {
    if ($darkMode.textContent === sun) {
      $darkMode.textContent = moon;

      $selectors.forEach((el) => {
        el.classList.add("dark-mode");
      });
      localStorage.setItem("mode","moon")
    } else {
      $darkMode.textContent = sun;
      $selectors.forEach((el) => {
        el.classList.remove("dark-mode");
        localStorage.setItem("mode","sun")
      });
    }
  });
}

//92
