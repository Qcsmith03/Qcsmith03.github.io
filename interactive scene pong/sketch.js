// extra for expert is the scroll wheel. it will increase ball size.

let x = 15;
let y = 150;
let x2 = 1000;
let y2 = 150;
let radius = 10;
let dx = 5;
let dy = 5;
let z = 200;
let z2 = 100;
let hit = false;

function setup() {
  createCanvas(windowWidth-30, windowHeight-30);
  
}

function draw() {
  background(0);
  shapedraw();
  movepong();
  moveandbounce();
  speedincrease();
  pause();
}

function shapedraw() {
  rect(x, y, 10, 70);
  rect(x2, y2, 10, 70);
  circle(z, z2, radius);
}
function moveandbounce() {
  z += dx;
  z2 += dy;

  if (z > windowWidth) {
    game();
  }
  if (z < 0) {
    game2();
  }
  if (z2 + radius >= height || z2 - radius <= 0) {
    dy = -dy;
    
    
  }
  hit = collideRectCircle(x2, y2, 10, 70, z, z2, radius);
  if (hit === true){
    dx =-dx ;
  }
  hit = collideRectCircle(x, y, 10, 70, z, z2, radius);
  if (hit === true){
    dx =-dx ;
  }
 
    
}
function movepong() {
  if (keyIsDown(87)) {
    // w is up
    y -= 7;
  }

  if (keyIsDown(83)) {
    // s is down
    y += 7;
  }
  if (keyIsDown(UP_ARROW)) {
    // w is up
    y2 -= 7;
  }

  if (keyIsDown(DOWN_ARROW)) {
    // s is down
    y2 += 7;
  }
}
function game() {
  console.log("p1 win");
  z=200;
  z2 = 100;
  dx=1;
  radius =10;
  fill(255);
  textSize(50);
  text("p1 wins", windowWidth/2, 50);
}
function game2(){
  console.log("p2 win");
  z=200;
  z2 = 100;
  dx=1;
  radius = 10;
  fill(255);
  textSize(50);
  text("p2 wins", windowWidth/2, 50);
  
}
function mousePressed(){
  
  dx = dx+1;
}
function speedincrease(){
  if (hit===true){
    dx = dx +1;
  }
}
function mouseWheel(event){
  radius += 5;
  return false;
}
function pause(){
  if (keyIsDown(82)){
    dx = 0;
  }
}