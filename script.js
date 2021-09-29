var x, y, vx, vy

function setup() {
  createCanvas(500, 400);  
  
  y = 320;
  x =  40; 
}

var lineY = 150;

function draw() {
  background(225);

  
  fill('green')
  rect(380,270,50,50); 
  rect(370,210,50,50);
  rect(300,250,50,50)
 
  fill('red') 
  circle(x,y,15);
  
  line(40,300,width,lineY);
  //if(upArrow){ lineY--; }
  //if(downArrow){ lineY++; }
  if (keyIsDown(UP_ARROW)) {
    lineY--;
  }

  if (keyIsDown(DOWN_ARROW)) {
    lineY++;
  }
  
 
}

