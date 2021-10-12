var audio = new Audio('data/img/audio.mp3');

class Block {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.w = 50;
    this.h = 50;
    this.c = "green";
  }

  draw() {
    fill(this.c);
    rect(this.x, this.y, this.w, this.h);
  }

  checkCollision() {
    if (x > this.x && y > this.y) {
      this.c = "red";
      //audio.play();
      //document.getElementById('data/img/yourAudioTag.mp3').play();
      // gameState = 2;
    }
  }
}

var x, y, vx, vy;
var rects = [];

function setup() {
  createCanvas(500, 400);


  rects.push(new Block(200, 250));
  rects.push(new Block(300, 350));
  rects.push(new Block(250, 300));
  rects.push(new Block(300, 250));
  rects.push(new Block(200, 350));


  y = 320;
  x = 40;

  console.log(rects);

}

var vx = 0;
var vy = 0;

var gameState = 0; // 0 = menu, 1 = game, 2 = gameover

var start = 0;

function draw() {

  text("gameState" + gameState, 25, 25);

  if (gameState == 0) {
    menu();
  }

  if (gameState == 1) {
    game();
    start = 1
  }

  if (gameState == 2) {
    gameOver();
  }

}

var x = 0 

function menu() {
  background("#ababab");
  text("MENU", 25, 45);
  text("1. start", 25, 65);
  text("2. game over", 25, 85);
  text("3. terug naar menu", 25, 105);
}

function game() {
 
  background(225);

  fill('green')

  rects.forEach((b) => {
    b.draw();
    b.checkCollision();
  })

  fill('red');
  circle(x, y, 15);

  x += vx;
  y += vy;


  line(55, 310, mouseX, mouseY);
}

function gameOver() {
  background("green");
  text("GAME OVER", 25, 45);
  x = 0;
}

function keyPressed() {

  if (keyCode == 49) {
    gameState = 1;
  }

  if (keyCode == 50) {
    gameState = 2;
  }

  if (keyCode == 51) {
    gameState = 0;
  }
}

function mouseClicked() {
  if (start == 1) {
    vx = 3;
  }

  let xdist = mouseX - x;
  let ydist = y - mouseY;

  let speed = xdist / vx;
  vy = (ydist / speed) * -1;
}
