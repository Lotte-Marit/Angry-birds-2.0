var x, y, vx, vy

function setup() {
  createCanvas(500, 400);
  
  
  y = 320;
  x =  40;
 
}



function draw() {
  background(225);

  
  fill('green')
  rect(380,270,50,50); 
  rect(370,210,50,50);
  rect(300,250,50,50)
 
  fill('red') 
  circle(x,y,15);
  
  line(40,300,250,150)
 
}

