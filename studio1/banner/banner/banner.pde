// belinda huang, 20170112
// draw an ellipse that follows cursor and changes color

void setup() {
  size(800,250);
  colorMode(HSB);
}

void draw() {
  background(0,0,0,50); //re-draw background every frame
  noStroke();
  
  if (mousePressed){
    fill(0);
  }
  else {
    fill(255);
  }
  ellipse(mouseX,mouseY,50,50);
}