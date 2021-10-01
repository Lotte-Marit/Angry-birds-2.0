var x, y, vx, vy

function setup() {
  createCanvas(500, 400);  
  
  y = 320;
  x =  40; 
}

var vx = 0;
var vy = 0;

var lineY = 190;

function draw() {
  background(225);

  
  fill('green')
  rect(380,270,50,50); 
  rect(370,210,50,50);
  rect(300,250,50,50);
 
  fill('red');
  circle(x,y,15);

  x += vx;
  y += vy;
  
  line(55,310,width,lineY);
  //if(upArrow){ lineY--; }
  //if(downArrow){ lineY++; }
  if (keyIsDown(UP_ARROW)) {
    lineY--;
  }

  if (keyIsDown(DOWN_ARROW)) {
    lineY++;
  }
}

function keyPressed() {
 if(keyCode == 32){
   vx = 3;
   vy = (height - lineY) /(width - 55) * -1;
 }
}

