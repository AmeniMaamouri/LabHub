// Play video
const myVideo = document.getElementById("video");
function playPause() {
  myVideo.play();
}
// Hide button play after on video start
const media = document.querySelector(".media");
const btnPlay = document.getElementById("btn-play");
media.addEventListener("click", () => {
  btnPlay.style.display = "none";
});
//Display video controls on hover
const videoControls = document.getElementById("video");
video.addEventListener(
  "click",
  function () {
    videoControls.controls = true;
  },
  false
);

/* On scroll to <<Expert in field>> section start the animation */
document.addEventListener('scroll', function (e) {
  var top = window.pageYOffset + window.innerHeight,
    isVisibleResearchersAndLabs = top > document.querySelector('.researchers-counter').offsetTop;
    isVisibleUniversitiesAndCountries = top > document.querySelector('.universities-counter').offsetTop;

  if (isVisibleResearchersAndLabs) {
    document.getElementById('expert-animation').classList.add('animation-researchers');
    document.getElementById('expert-lab-animation').classList.add('animation-labs');
  }
  if (isVisibleUniversitiesAndCountries) {
    document.getElementById('expert-universitites-animation').classList.add('animation-universities');
    document.getElementById('expert-countries-animation').classList.add('animation-countries');
  }
});