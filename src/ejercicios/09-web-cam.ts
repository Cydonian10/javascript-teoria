export function webCam(){
  const $video = document.getElementById("webCam") as HTMLVideoElement;
  navigator.mediaDevices.getUserMedia({
    video:true,
    audio:false
  }).then(
    resp =>  {
       $video.srcObject = resp
       $video.play
    }
  ).catch( (e) =>{
    $video.insertAdjacentHTML(
      "beforebegin",
      `<p>Error de persmiso</p>`
    )
  })
}