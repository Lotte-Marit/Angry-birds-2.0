class Block{
  constructor(x,y){
    this.x = x;
    this.y = y;
    this.w = 50;
    this.h = 50;
    this.c = "green";
  }

  draw(){
    fill(this.c);
    rect(this.x,this.y,this.w,this.h); 
  }

  checkCollision(){
    if(x > this.x ){
      this.c = "red";
    }
  }
}


var x, y, vx, vy;
var rect1, rect2, rect3;
var rects = [];

function setup() {
  createCanvas(500, 400);  
  rect1 = new Block(380, 270);
  rect2 = new Block(370,210);
  rect3 = new Block(300,250);
  
  rects.push(rect1);
  rects.push(rect2);
  rects.push(rect3);
  rects.push(new Block(200,250));
  rects.push(new Block(200,350));

  y = 320;
  x =  40; 

}

var vx = 0;
var vy = 0;

var lineY = 190;


function draw() {
  background(225);

  fill('green')

 rects.forEach((b)=>{
   b.draw();
   b.checkCollision();
 })
 
  fill('red');
  circle(x,y,15);

  x += vx;
  y += vy;
  
  line(55,310,mouseX,mouseY);
  //if(upArrow){ lineY--; }
  //if(downArrow){ lineY++; }
  if (keyIsDown(UP_ARROW)) {
    lineY--;
  }

  if (keyIsDown(DOWN_ARROW)) {
    lineY++;
  }

  if (circle(300,50)) {
    return
  }
}

function mouseClicked() {
  vx = 3;

  let xdist = mouseX - x;
  let ydist = y - mouseY;

  let speed = xdist / vx;
  vy = (ydist / speed) *-1;
}
