let cont =[];
let myFont;
let song;
let selected;
let slide;
let sn;
var myAudioContext;
var mySource;
let target;
var userAgent;
var source;
var iphone;
var started = false;

// Last update timestamp
let then;

// Flag on if playing
let busy = false;

var played;
var myCanvas;

var start = function()
{
  if(played)
    return;
  played = true
  cont[sn].song.play();
  //messagediv.innerHTML = "Playing audio. <button style='font-size:inherit' onclick='audio.pause()'>Stop</button>"
  myCanvas.onclick = '';
}


// Advance video playhead before rendering
function update(now) {
  const step = now - (then || now)

  if (busy) {
    source.currentTime += step * 0.001

    // Reset
    if (source.currentTime >= source.duration) {
      source.currentTime = 0

      busy = false
    }
  }

  // Reset
  then = now;
}

function preload () {

  myFont = loadFont('fonts/Newfont-Regular.ttf');
  if (true) {
  cont.push({
    dato_numero: "13;2% decrease per decade",
    dato_info: "rate of Change of the arCtic sea iCe",
    songP:'Sounds/Sound1.mp3',
    song: null,
    bg0P: 'Images/img1.jpg',
    bg0: null,
    bg1P: 'Images/img2.jpg',
    tint1: null,
    tint2: null,
    image: null,
    videoP: 'assets/icemelting.mp4',
    video: null,
    bg2: null,
    ct1:color(0,0,0),
    ct2:color(255,255,255)
  });

  cont.push({
    dato_numero: "3;2 millimeters per year",
    dato_info: "rate of sea level rise",
    songP:'Sounds/Sound2.mp3',
    song: null,
    bg0P: 'Images/img1.jpg',
    bg0: null,
    bg1P: 'Images/img3.jpg',
    tint1: null,
    tint2: null,
    image: null,
    videoP: 'assets/Sea Level.mp4',
    video: null,
    bg2: null,
    ct1:color(0,0,0),
    ct2:color(255,255,255)
  });

  cont.push({
    dato_numero: "2016",
    dato_info: "warmest year on reCord",
    songP:'Sounds/Sound3.mp3',
    song: null,
    bg0P: 'Images/img1.jpg',
    bg0: null,
    bg1P: 'Images/img4.jpg',
    tint1: null,
    tint2: null,
    image: null,
    videoP: 'assets/earth warming.mp4',
    video: null,
    bg2: null,
    ct1:color(0,0,0),
    ct2:color(255,255,255)
  });


  cont.push({
    dato_numero: "407;61 parts per million",
    dato_info: "Carbon dioxide level",
    songP:'Sounds/sound4.mp3',
    song: null,
    bg0P: 'Images/img1.jpg',
    bg0: null,
    bg1P: 'Images/img5.jpg',
    tint1: null,
    tint2: null,
    image: null,
    videoP: 'assets/co2.mp4',
    video: null,
    bg2: null,
    ct1: color(0,0,0),
    ct2: color(255,255,255)
  });


  cont.push({
    dato_numero: "22:000/31:000",
    dato_info: "polar bears worldwide",
    songP:'Sounds/Sound5.mp3',
    song: null,
    bg0P: 'Images/img1.jpg',
    bg0: null,
    bg1P: 'Images/img6.jpg',
    tint1: null,
    tint2: null,
    image: null,
    videoP: 'assets/polarbears2.mp4',
    video: null,
    bg2: null,
    ct1: color(0,0,0),
    ct2: color(255,255,255)
  });


  cont.push({
    dato_numero: "30%",
    dato_info: "deCrease of global polar bear number by 2050",
    songP:'Sounds/Sound6.mp3',
    song: null,
    bg0P: 'Images/img1.jpg',
    bg0: null,
    bg1P: 'Images/img7.jpg',
    tint1:null,
    tint2: null,
    image: null,
    videoP: 'assets/polarbears1.mp4',
    video: null,
    bg2: null,
    ct1:color(0,0,0),
    ct2:color(255,255,255)
  });


  cont.push({
    dato_numero: "0;302=F",
    dato_info: "warming of top 700 meters of oCean since 1969",
    songP:'Sounds/sound7.mp3',
    song: null,
    bg0P: 'Images/img1.jpg',
    bg0: null,
    bg1P: 'Images/img8.jpg',
    bg1: null,
    tint1:null,
    tint2: null,
    image: null,
    videoP:'assets/Sea Level.mp4',
    video: null,
    bg2: null,
    ct1:color(0,0,0),
    ct2:color(255,255,255)
  });


  cont.push({
    dato_numero: "127;0 decreasing rate of change",
    dato_info: "Antartica mass variation since 2002",
    songP:'Sounds/sound8.mp3',
    song: null,
    bg0P: 'Images/img1.jpg',
    bg0: null,
    bg1P: 'Images/img9.jpg',
    bg1: null,
    tint1:null,
    tint2: null,
    image: null,
    videoP: 'assets/Antartica.mp4',
    video: null,
    bg2: null,
    ct1:color(0,0,0),
    ct2:color(255,255,255)
  });

  cont.push({
    dato_numero: "2050",
    dato_info: "New research predicts a doubling of surface melting",
    songP:'Sounds/Sound9.mp3',
    song: null,
    bg0P: 'Images/img1.jpg',
    bg0: null,
    bg1P: 'Images/img10.jpg',
    bg1: null,
    tint1:null,
    tint2: null,
    image: null,
    videoP: 'assets/icemelting2.mp4',
    video: null,
    bg2: null,
    ct1:color(0,0,0),
    ct2:color(255,255,255)
  });

  cont.push({
    dato_numero: "286;0 decreasing rate of change",
    dato_info: "Greenland mass variation since 2002",
    songP:'Sounds/Sound10.mp3',
    song: null,
    bg0P: 'Images/img1.jpg',
    bg0: null,
    bg1P: 'Images/img11.jpg',
    bg1: null,
    tint1: null,
    tint2: null,
    image: null,
    videoP: 'assets/Greenland mass variation.mp4',
    video: null,
    bg2: null,
    ct1: color(255,255,255),
    ct2: color(0,0,0)
  });
} // container for data

  sn = floor(random(0,cont.length));
  userAgent = window.navigator.userAgent;
  iphone = userAgent.match(/iPad/i) || userAgent.match(/iPhone/i);

  if (iphone) {
    // AUDIO FIX
    cont[sn].song = new Audio(cont[sn].songP);


//
//     window.AudioContext = window.AudioContext||window.webkitAudioContext;
//     myAudioContext = new AudioContext();
//
//     var request = new XMLHttpRequest();
//   request.open('GET', cont[sn].songP, true);
//   request.responseType = 'arraybuffer';
//
//   // Decode asynchronously
//   request.onload = function() {
//     myAudioContext.decodeAudioData(request.response, function(buffer) {
//       cont[sn].song = buffer;
//     }, onError);
//   }
//   request.send();
//
//
//
//
// //    cont[sn].song = new Audio(cont[sn].songP);
//   //  cont[sn].song.load();
//     cont[sn].song.loop( true );

  } else {
    // loadsound
    cont[sn].song = loadSound(cont[sn].songP);
  }
  // load images
  if (cont[sn].bg0P != null ) {
    cont[sn].bg0 = loadImage(cont[sn].bg0P);
  }
  if (cont[sn].bg1P != null) {
    cont[sn].bg1 = loadImage(cont[sn].bg1P);
  }

  // load video
  if (cont[sn].videoP != null ) {

    if (iphone) {
    // iPad or iPhone
      then = Date.now();
      source = document.createElement('video');
      source.setAttribute('src', cont[sn].videoP);

      /*source.addEventListener('loadstart', () => {
        // Safe to call
        window.requestAnimationFrame(repeat)
      })*/

      source.load();

    }
    else {
      cont[sn].video = createVideo(cont[sn].videoP);
      cont[sn].video.hide();
      //cont[sn].video.loop();
    }


  }

}

// function playIOS() {
//   console.log("playios");
//   if (started != true ) {
//
//   //song._looping = true;
//   song.play();
//   //console.log(song);
//   started = true;
//   }
// }

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  target = document.querySelector('canvas').getContext('2d');
  //target = document.getElementById('defaultCanvas0').getContext('2d');

  selected = cont[sn];
  song = selected.song;
  slide = 0;
  textFont(myFont);

if (iphone) {
   // iPad or iPhone

   var el = document.getElementsByTagName("canvas")[0];
    el.addEventListener("touchstart", mouseClicked, false);
    //el.addEventListener("touchstart", playIOS, false);
    //var bod = document.getElementsByTagName("body")[0];
    //bod.addEventListener('ended', playIOS, false);
      // AUDIO FIX
      played = false;
  myCanvas = document.getElementsByTagName("canvas")[0];
  myCanvas.onclick = function()
  {
    start()
  }
  myCanvas.addEventListener('touchstart', start, false)

  }
}



function draw() {

  if (slide == 0 ) {
    background(0);
    textSize(32);
    fill(255);
    if (selected.bg0 != null) {
      background(selected.bg0);
      background(0,100);
    }
    textAlign(CENTER, CENTER);
    text('LISTEN LIKE A KID WOULD', 0,0, width, height);

  } else if (slide == 1) {
    //tint(selected.tint1,100);
    background(selected.bg1);
    if ( selected.tint1 != null ) {
      background(selected.tint1);
    }

    fill(selected.ct1);
    text(selected.dato_numero, 0,0, width, height);

  } else if (slide >= 2) {

    background(0);
    if (selected.bg2 != null) {
      background(selected.bg2);
    }

    if (selected.image != null) {
      image(selected.image,0,0,width,height);
    }

    if (iphone) {
      // iPad or iPhone
      //console.log("video fix for ios");
      busy = true;
      update(Date.now());
      target.drawImage(source, 0, 0,width,height);
    } else {
      if (selected.video != null) {
        image(selected.video,0,0,width,height);
      }
    }

    if ( selected.tint2 != null ) {
      background(selected.tint2);
    }

    fill(selected.ct2);
    text(selected.dato_info, 0,0, width, height);
  }

}


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function mouseClicked() {

  if (slide == 2) {
    slide=1;
    if (!iphone) {
      song.setVolume(0.2);
    }
  } else if (slide == 1) {
    if (!iphone) {
      if (! song.isPlaying() ) {
        song.play();
      }
      song.setVolume(1);
    }
    slide++;
  } else if (slide == 0 ) {

    //console.log(userAgent);
    if (iphone) {
      if (true){
        start();
         // iPad or iPhone
         //playIOS();
         /*console.log("audio fix for ios");
         if('webkitAudioContext' in window) {
            myAudioContext = new webkitAudioContext();
            //var audioSource = song;//myAudioContext.createBufferSource();
            //mySource = audioSource;
            //bufferSound();
            //mySource.connect(myAudioContext.destination);
            song.connect(myAudioContext.destination);
        }*/
      }
    }
    else {
      ( !fullscreen() ? fullscreen(true) : null )
      if (selected.video != null) {
        selected.video.loop();
      }
    }

    slide++;
  }
}

function repeat(t) {
  update(t)
  window.requestAnimationFrame(repeat)
}
