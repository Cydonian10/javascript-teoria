export function fecthCrud() 
{
  const $form = document.querySelector(".crud-form") as HTMLFormElement
  async function getAll() {
    try {
      let resp = await fetch("http://localhost:3000/santos");
      let data = await resp.json()

      if(!resp.ok) throw({status:resp.status,statusText:resp.statusText})

      console.log(data);

    } catch (error) {
      const err = error as any
      let message = err.statusText || "Ocurrio un error"
      // pintar mensaje el html
    }
  }

  getAll()

  $form?.addEventListener("submit",(e:Event) => {
    e.preventDefault()
     const $formElem = e.target as HTMLFormElement
 // crear una image = URL.createObjectURL(file)
    if( e.currentTarget){
       const formData =  new FormData($formElem)
     console.log(  formData.get("name"),
       formData.get("constelacion"));
    }

    // let options:RequestInit = {
    //   method:"POST",
    //   headers: {
    //     "Content-type":"application/json; charset=utf-8"
    //   },
    //   body: JSON.stringify({
    //     nombre: "gabriel",
    //     constelacion :"askdjfasdkfj"
    //   })
    // }
  })
  
}