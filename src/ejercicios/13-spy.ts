export function scrollSpy(){

  const $sections = document.querySelectorAll("section[data-scrool-spy]") as NodeListOf<HTMLDivElement>;

  const cb = (entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry) => {
      const element = (entry.target as HTMLDivElement).id
    ;
      if(entry.isIntersecting){
      document.querySelector(`#nav-mobile > ul > li[data-scrool-spy].${element}`)?.classList.add("bg-amber-500","text-slate-500");
      }else {
          document
            .querySelector(`#nav-mobile > ul > li[data-scrool-spy].${element}`)
            ?.classList.remove("bg-amber-500", "text-slate-500");
      }
    })

  };

  const observer = new IntersectionObserver( cb, {
    threshold:[0.9,1]
  })

  $sections.forEach( el => observer.observe(el))

}