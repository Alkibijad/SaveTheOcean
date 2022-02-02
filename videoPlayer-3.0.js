createDom();
function createDom() {
  let mainContainer = document.querySelector("#main-container");
  let text = "";
  for (let i = 0; i < links.length; i++) {
    text += `<div id="${i}" class="video-container">
        ${links[i]}
        <div class="videoPlayer-Icons">
          <i id="btnPlay" class="fas fa-play"></i>
          <i id="btnLoad" class="fas fa-sync-alt"></i>
        </div>
      </div>`;
    mainContainer.innerHTML = text;
  }
  
}

function VideoPlayer(id) {
    console.log(id);
  this.container = document.getElementById(id)
  this.btnPlay = this.container.querySelector("#btnPlay");
  this.btnLoad = this.container.querySelector("#btnLoad");
  this.video = this.container.querySelector("video");
  this.init = function () {
    this.btnPlay.addEventListener("click", this.playVideo.bind(this));
    this.btnLoad.addEventListener("click", () => {
      this.loadVideo();
    });
  };
  this.playVideo = function () {
      console.log(this);
      if (this.btnPlay.className == "fas fa-play") {
        this.btnPlay.className = "fas fa-pause";
      this.video.play();
    } else {
      this.video.pause();
      this.btnPlay.className = "fas fa-play";
    }
  };
  this.loadVideo = function () {
    this.video.load();
    this.btnPlay.className = "fas fa-play";
  };
}
let player0 = new VideoPlayer("0");
player0.init();
let player1 = new VideoPlayer("1");
player1.init();
let player2 = new VideoPlayer("2");
player2.init();
let player3 = new VideoPlayer("3");
player3.init();

