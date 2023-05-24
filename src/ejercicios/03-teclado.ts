const $container = document.querySelector(".contenedor-ball");
const $ball = document.querySelector(".ball") as HTMLDivElement
let x:number = 0
let y:number = 0

export function shortcuts(e: KeyboardEvent) {
  // console.log(e);
  // console.log(e.code);
  // console.log(e.key);
  // console.log(e.shiftKey);
  // console.log(e.altKey);
  if (e.key === "a" && e.altKey) {
    alert("Primer evento con teclado");
  }
}

export function moveBall(e: KeyboardEvent) {
  let limitBall = $ball.getBoundingClientRect()
  let limitContainer = $container?.getBoundingClientRect()

    switch (e.key) {
      case "ArrowUp":
        e.preventDefault()
        if (limitBall.top > limitContainer!.top)
           y = y - 10
        break;
      case "ArrowDown":
        e.preventDefault()
        if (limitBall.bottom < limitContainer!.bottom)
          y = y + 10
        break;
      case "ArrowLeft":
        e.preventDefault()
        if (limitBall.left > limitContainer!.left)
          x = x - 10
        break;
      case "ArrowRight":
        e.preventDefault()
        if (limitBall.right < limitContainer!.right) 
          x = x + 10;
        break;
      default:
        break;
    }

    $ball.style.transform = `translate( ${x}px,${y}px )`
    

  // const $container = e.target as HTMLDivElement

  // if( $container.matches("contenedor-ball")) {
  //   console.log("contenedor");
  // }

  // if( $container.matches("ball")) {
  //   console.log("ball");
  // }
}
