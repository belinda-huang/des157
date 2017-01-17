// belinda huang, 20170112
// draw an ellipse that follows cursor and changes color

void setup() {
  size(800,250);
  background(0);
}

void draw() {
  if (mousePressed){
    fill(0);
  }
  else {
    fill(255);
  }
  ellipse(mouseX,mouseY,50,50);
}