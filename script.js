var ballY, ballX, bg, bgMusic, pig, ball, arrow, pigHit, catapult;
var canvasWidth = 852;
var canvasHeight = 480;
var gameState = 0;
var gameStop = false;

var game = class {
  constructor(lives,state) {
    this.lives = lives;
    this.state = state;
  }

  removeLife(){
    this.lives -1;
  }
};
/**
 * Setup canvas and starting point
 */
function setup() {
  // Load music & images
  bg = loadImage('achtergrond.jpeg');
  bgMusic = loadSound('achtergrondmuziek.mp3');
  pigHit = loadSound('hit.mp3');
  ball = loadImage('bal.png');
  arrow = loadImage('pijl.png');
  catapult = loadImage('catapult.png');
  pig = loadImage('pig.png');

  createCanvas(canvasWidth, canvasHeight);
  ballY = 370;
  ballX = 45;
}

var vx = 0;
var vy = 0;
var gameLives = 3;
var ballSpeed = 5;
var lineStartX = 55;
var lineStartY = 400;
var lineEndX = canvasWidth;
var lineEndY = 190;
var targets = [
  [700, 400, 50, 50],
  [780, 400, 50, 50],
  [745, 340, 50, 50]
];


var targetObjects = [];

function draw() {
  if (gameState === 0) {
    startGame();
  } else if (gameState === 1) {
    playGame();
  } else if (gameState === 2) {
    finishGame();
  }
}

function startGame() {
  background(bg);
  textAlign(CENTER);
  textSize(26);
  text("Klik om te starten", width / 2, height / 2);
}

function playGame() {
  background(bg);

  // Stop game when dead
  if (gameLives < 1 || targets.length < 1) {
    gameState = 2;
  }

  // Game lives
  textAlign(LEFT);
  textSize(18);
  text("Levens: " + gameLives, 10, 20);
  // Birds
  targets.map((target, key) => {
    targetObjects.push(image(pig, target[0], target[1], target[2], target[3]));
  });
  // Ball
  image(ball, ballX, ballY, 72, 65);
  if (ballX < canvasWidth && !gameStop) {
    ballX += vx;
    ballY += vy;
  } else {
    if (gameStop == false) {
      gameLives -= 1;
    }
    gameStop = true;
    ballX = 45;
    ballY = 370;
    image(ball, ballX, ballY, 72, 65);
  }

  line(lineStartX, lineStartY, lineEndX, lineEndY);

  // Catapult
  image(catapult, -10, 350);

  // Key press down move line down
  if (keyIsDown(UP_ARROW)) {
    lineEndY--;
  }

  // Key press up move line up
  if (keyIsDown(DOWN_ARROW)) {
    lineEndY++;
  }
  checkCollisions(targets, ballX, ballY, targetObjects);

}


function finishGame() {
  background(bg);
  textAlign(CENTER);
  textSize(28);
  if (targets.length < 1) {
    text("GEWONNEN!\n\n Opnieuw beginnen", width / 2, height / 2);

  } else {
    text("GAME OVER\n\n Opnieuw beginnen", width / 2, height / 2);
  }
}


/**
 * If space bar pressed start moving the ball
 */
function keyPressed() {
  if (keyCode === 32 && gameState === 1) {
    vx = ballSpeed;
    // Get diff between top line and start line
    var lineWidth = lineEndX - lineStartX;
    var lineElevation = lineEndY - lineStartY;
    // Set lineElevation per ballSpeed
    vy = lineElevation / (lineWidth / ballSpeed);

    gameStop = false;
  }
}

function checkCollisions(targets, ballX, ballY, objects) {
  targets.map((target, key) => {
    if ((ballX > target[0] && ballX < (target[0] + 50)) && (((ballY > target[1] + 50) || (ballY > target[1]) || (ballY > target[1] - 50)) && ballY < (target[1] + 50))) {
      dropBird(key);
      pigHit.play();
    }
  });
}

function dropBird(key) {
  targets.splice(key, 1);
}

function mousePressed() {
  console.log(gameState);
  if (gameState === 0) {
    gameState += 1;
    bgMusic.setVolume(.2);
    bgMusic.play();

  } else if (gameState === 2) {
    bgMusic.stop();
    gameLives = 3;
    targets = [
      [700, 400, 50, 50],
      [780, 400, 50, 50],
      [745, 340, 50, 50]
    ];
    gameStop = true;
    ballX = 45;
    ballY = 370;
    gameState = 0;

  }

}