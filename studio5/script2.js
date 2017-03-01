// JavaScript Document

document.addEventListener("DOMContentLoaded", function() {
      console.log("DOM fully loaded and parsed");

    var mic, fft;

    function setup() {
       var canvas = createCanvas(900,300);
       canvas.parent('mySketch');
       noFill();

       mic = new p5.AudioIn();
       mic.start();
       fft = new p5.FFT();
       fft.setInput(mic);
    }

    function draw() {
       background(200);

       var spectrum = fft.analyze();

       beginShape();
       for (i = 0; i<spectrum.length; i++) {
        vertex(i, map(spectrum[i], 0, 255, height, 0) );
       }
       endShape();
    }

});
