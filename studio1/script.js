//belinda huang 2017-01-18
//draw points according to y-height of cursor
//changes color upon mouse press
console.log("this is a js comment");

var yvals; //**WHAT IS JS CONVERSION
var yshade;
var arrayindex = 0;
var width = 800;
var height = 250;

function setup(){
  var myCanvas = createCanvas(800, 250);
  myCanvas.parent('mySketch');
  background(0); //newbackground
  yvals = [width]; //***
}

function draw(){
  background(0);

  // marquee
  for(var i = 1; i < width; i++){
    yvals[i-1] = yvals[i];
  }

  // height input
  yvals[width-1] = mouseY;

  // color change
  if(mouseIsPressed){
    yshade = 255;
  } else {
    yshade = 60;
  }

  // center line
  stroke(20);
  line(0, height/2, width, height/2);

  // where da points at
  for(var i=1; i<width; i++){
    stroke(yshade);
    point(i, yvals[i]/1);
  }
}
