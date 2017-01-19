//belinda huang 2017-01-18
//draw points according to y-height of cursor
//changes color upon mouse press

int yvals[];
int yshade;
int arrayindex = 0;

void setup(){
  size(800, 250);
  noSmooth();
  yvals = width;
}

void draw(){
  background(0);

  // marquee
  for(int i = 1; i < width; i++){
    yvals[i-1] = yvals[i];
  }

  // height input
  yvals[width-1] = mouseY;

  // color change
  if(mousePressed){
    yshade = 255;
  } else {
    yshade = 60;
  }

  // center line
  stroke(20);
  line(0, height/2, width, height/2);

  // where da points at
  for(int i=1; i<width; i++){
    stroke(yshade);
    point(i, yvals[i]/1);
  }
}