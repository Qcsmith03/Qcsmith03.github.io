// extra for expert is the scroll wheel. it will increase ball size.
// dx and dy are the x and y speed
let leftPadalX = 15;
let leftPadalY = 150;
let rightPadalX = 1550;
let rightPadalY = 150;
let radius = 10;
let dx = 5;
let dy = 5;
let ballx = 200;
let bally = 100;
let hit = false;
let textTime = 0;

function setup() {
  createCanvas(windowWidth-30, windowHeight-30);
  
}
//draw setup
function draw() {
  background(0);
  shapeDraw();
  movePong();
  moveAndBounce();
  speedIncrease();
  pause();
  
  //rules
  if (millis() < textTime + 5000){
    fill(255);
    textSize(25);
    text("play on full screen,r is pause, lmb moves ball right, scroll wheel is to increase ball size", 10, 50);
  }
  console.log(millis);
}
//draws padals and ball
function shapeDraw() {
  rect(leftPadalX, leftPadalY, 10, 70);
  rect(rightPadalX, rightPadalY, 10, 70);
  circle(ballx, bally, radius);
}
//moves ball and brings back to start point, as well as the collision of padal and ball.
function moveAndBounce() {
  ballx += dx;
  bally += dy;

  if (ballx > windowWidth) {
    game();
  }
  if (ballx < 0) {
    game2();
  }
  if (bally + radius >= height || bally - radius <= 0) {
    dy = -dy;
    
    
  }
  hit = collideRectCircle(rightPadalX, rightPadalY, 10, 70, ballx, bally, radius);
  if (hit === true){
    dx =-dx ;
  }
  hit = collideRectCircle(leftPadalX, leftPadalY, 10, 70, ballx, bally, radius);
  if (hit === true){
    dx =-dx ;
  }
 
    
}
//moves the right and left padal.
function movePong() {
  if (keyIsDown(87)) {
    // w is up
    leftPadalY -= 7;
  }

  if (keyIsDown(83)) {
    // s is down
    leftPadalY += 7;
  }
  if (keyIsDown(UP_ARROW)) {
    // up arrow is up
    rightPadalY -= 7;
  }

  if (keyIsDown(DOWN_ARROW)) {
    // down arrow is down
    rightPadalY += 7;
  }
}

//brings ball to original postion and says player one wins
function game() {
  console.log("p1 win");
  ballx=200;
  bally = 100;
  dx=1;
  radius =10;
  
  fill(255);
  textSize(100);
  text("p1 wins", windowWidth/2, 75);
  
}

// brings ball to original and says player 2 wins
function game2(){
  console.log("p2 win");
  ballx=200;
  bally = 100;
  dx=1;
  radius = 10;
  fill(255);
  textSize(100);
  text("p2 wins", windowWidth/2, 75);
}

//increase speed on mouse press
function mousePressed(){
  
  dx = dx+1;
  
}

// increases speed on colliision
function speedIncrease(){
  if (hit===true){
    dx = dx +1;
  }
}

// increases the size of the ball
function mouseWheel(event){
  radius += 5;
  return false;
}

// press r to stop the x movment of the ball
function pause(){
  if (keyIsDown(82)){
    dx = 0;
    
  }
}