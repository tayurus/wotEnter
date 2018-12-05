
var speaker = document.querySelector('.speaker');

speaker.onclick = function(){
  var video = document.querySelector(".enter__video");
  if (video.muted){
    video.muted= false;
  }
  else {
    video.muted= true;
  }
}
