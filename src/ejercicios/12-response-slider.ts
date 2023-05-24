export function slider() {
 const $btnprev = document.querySelector(".prev") 
 const $btnnext = document.querySelector(".next") 

 const $slides = document.querySelectorAll(".slider-slide");
 
 let i = 0;
 
 $btnprev?.addEventListener("click", () => {
  $slides[i].classList.remove("active");
  
  i = i - 1

  if( i < 0) {
    i = $slides.length - 1 ;
  }

  $slides[i].classList.add("active")
 })

 $btnnext?.addEventListener("click",() => {
  $slides[i].classList.remove("active");

  i = i + 1

  if(  i > ($slides.length - 1)){
    i = 0
  }
  $slides[i].classList.add("active");

 })

//  setInterval(() => {
//   $slides[i].classList.remove("active");

//   i = i + 1;

//   if (i > $slides.length - 1) {
//     i = 0;
//   }
//   $slides[i].classList.add("active");
//  },3000)
}