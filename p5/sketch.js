let cont =[];
let myFont;
let song;
let selected;
let slide;
let sn;

function preload () {

  myFont = loadFont('/fonts/Newfont-Regular.ttf');

  cont.push({
    dato_numero: "13;2% decrease per decade",
    dato_info: "rate of Change of the arCtic sea iCe",
    song: loadSound('Sounds/Sound1.mp3'),
    bg0: loadImage('Images/img1.jpg'),
    bg1: loadImage('Images/img2.jpg'),
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
    song: loadSound('Sounds/Sound2.mp3'),
    bg0: loadImage('Images/img1.jpg'),
    bg1: loadImage('Images/img3.jpg'),
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
    song: loadSound('Sounds/Sound3.mp3'),
    bg0: loadImage('Images/img1.jpg'),
    bg1: loadImage('Images/img4.jpg'),
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
    song: loadSound('Sounds/Sound4.mp3'),
    bg0: loadImage('Images/img1.jpg'),
    bg1: loadImage('Images/img5.jpg'),
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
    song: loadSound('Sounds/Sound5.mp3'),
    bg0: loadImage('Images/img1.jpg'),
    bg1: loadImage('Images/img6.jpg'),
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
    song: loadSound('Sounds/Sound6.mp3'),
    bg0: loadImage('Images/img1.jpg'),
    bg1: loadImage('Images/img7.jpg'),
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
    song: loadSound('Sounds/Sound7.mp3'),
    bg0: loadImage('Images/img1.jpg'),
    bg1: loadImage('Images/img8.jpg'),
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
    song: loadSound('Sounds/Sound8.mp3'),
    bg0: loadImage('Images/img1.jpg'),
    bg1: loadImage('Images/img9.jpg'),
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
    song: loadSound('Sounds/Sound9.mp3'),
    bg0: loadImage('Images/img1.jpg'),
    bg1: loadImage('Images/img10.jpg'),
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
    song: loadSound('Sounds/Sound10.mp3'),
    bg0: loadImage('Images/img1.jpg'),
    bg1: loadImage('Images/img11.jpg'),
    tint1: null,
    tint2: null,
    image: null,
    videoP: 'assets/Greenland mass variation.mp4',
    video: null,
    bg2: null,
    ct1: color(0,0,0),
    ct2: color(0,0,0)
  });

  sn = floor(random(0,cont.length));

  if (cont[sn].videoP != null ) {
    cont[sn].video = createVideo(cont[sn].videoP);
    cont[sn].video.hide();
    //cont[sn].video.loop();
  }

}

function setup() {
  //var i = floor(random(0,cont.length));


  selected = cont[sn];
  song = selected.song;
  slide = 0;
  //selected.video = createVideo(selected.video);
  /*for(var i = 0 ; i < cont.length ; i++ ) {
    if (cont[i].video != null ) {
      cont[i].video.hide();
    }
  }*/
  createCanvas(window.innerWidth, window.innerHeight);
  textFont(myFont);
  //if (selected.videoP != null ) {
    //if (selected.video != null){
      //selected.video.loop();
    //}
  //}
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

    if (selected.video != null) {
      image(selected.video,0,0,width,height);
    }
    if ( selected.tint2 != null ) {
      background(selected.tint2);
    }

    fill(selected.ct2);
    text(selected.dato_info, 0,0, width, height);
  }

}

function mousePressed() {

  let fs = fullscreen();
  if(!fs) {
    fullscreen(true);
  }

  if (selected.video != null) {
      selected.video.loop();
  }



  if (slide == 2) {
    slide++;
    song.setVolume(0.2);
  }

  if (slide == 1) {
    if (! song.isPlaying() ) {
      song.play();
    }
    song.setVolume(1);
    slide++;
  }

  if (slide >2 ) {
    slide = 1;
  }

  if (slide == 0 ) {
    slide++;
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
