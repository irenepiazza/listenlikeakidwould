
var elemVideo = document.getElementById('js-video');
var elemCanvas = document.getElementById('js-canvas');
var elemPlayButton = document.getElementById('js-playButton');
var canvasDrawSkip = false;

function videoPlay() {
  // fpsを設定
  var fps = 24;
  var frameTime = 1000 / fps;

  // currentTimeを初期化
  var currentTime = 0;

  var timer = setInterval(function () {
    if (canvasDrawSkip === true) {
      return;
    }
  // canvasDrawのスキップを設定
    canvasDrawSkip = true;
    // currentTimeを加算
    currentTime += frameTime / 1000;


    // videoのcurrentTimeを設定
    if (elemVideo.duration < currentTime) {
      // currentTimeがvideoのdurationを超過した場合
      elemVideo.currentTime = elemVideo.duration;
      clearInterval(timer);
    } else {
      elemVideo.currentTime = currentTime;
    }
  }, frameTime);
}

function canvasDraw() {

  //elemCanvas.setAttribute('width', elemVideo.videoWidth);
  //elemCanvas.setAttribute('height', elemVideo.videoHeight);
  var ctx = elemCanvas.getContext('2d');
  ctx.drawImage(elemVideo, 0, 0, elemVideo.videoWidth, elemVideo.videoHeight);
  canvasDrawSkip = false;
}

window.addEventListener('load', function () {
  //elemPlayButton.addEventListener('click', videoPlay);
  elemVideo.addEventListener('loadeddata', canvasDraw);
  elemVideo.addEventListener('timeupdate', canvasDraw);
  elemVideo.load();
});
