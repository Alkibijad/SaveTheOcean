
let videoPlayer = {
  btnPlay: document.querySelector("#btnPlay"),
  btnLoad: document.querySelector("#btnLoad"),
  video: document.querySelector("video"),
  init: function () {
    videoPlayer.btnPlay.addEventListener("click",  videoPlayer.playVideo),
    videoPlayer.btnLoad.addEventListener("click", videoPlayer.loadVideo);
  },
  playVideo: function () {
    if (btnPlay.className == "fas fa-play") {
      videoPlayer.video.play();
      btnPlay.className = "fas fa-pause";
    } else {
      videoPlayer.video.pause();
      btnPlay.className = "fas fa-play";
    }
  },
  loadVideo: function () {
    videoPlayer.video.load();
    btnPlay.className = "fas fa-play";
  },
};
videoPlayer.init()
