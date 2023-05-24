let mobileContent = `<a href="https://www.youtube.com/watch?v=6IwUl-4pAzc&list=PLvq-jIkSeTUZ6QgYYO3MwG9EMqC-KoLXA&index=91">Ver video</a>`;
let desktopContent = `<iframe width="560" height="315" src="https://www.youtube.com/embed/MKsDq9xGV4g" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`;

export function responseMedia() {
  const $youTube = document.getElementById("youtube") as HTMLDivElement;

  if (window.innerWidth > 1024) {
    $youTube.innerHTML = desktopContent;
  } else {
    $youTube.innerHTML = mobileContent;
  }

  window.addEventListener("resize", (e: Event) => {
    let widthWindow = (e.target as Window).innerWidth;
    if (widthWindow > 1024) {
      $youTube.innerHTML = desktopContent;
    } else {
      $youTube.innerHTML = mobileContent;
    }
  });
}
