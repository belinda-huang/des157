// JavaScript Document

console.log("this is a js comment");



var song, analyzer;

function preload() {
  song = loadSound('assets/blueFaces.mp3');
}

function setup() {
  var canvas = createCanvas(710, 200);
  canvas.parent('mySketch');
  song.loop();

  // create a new Amplitude analyzer
  analyzer = new p5.Amplitude();

  // Patch the input to an volume analyzer
  analyzer.setInput(song);
}

function draw() {
  background(0);

  // Get the average (root mean square) amplitude
  var rms = analyzer.getLevel();
  fill(141, 13, 149);
  stroke(204,34,134);
  strokeWeight(4);

  // Draw an ellipse with size based on volume
  ellipse(width/2, height/2, 10+rms*200, 10+rms*200);
}
