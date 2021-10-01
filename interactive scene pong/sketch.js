// extra for expert is the scroll wheel. it will increase size.

let x = 15;
let y = 150;
let x2 = 375;
let y2 = 150;
let radius = 10;
let dx = 1;
let dy = 1;
let z = 200;
let z2 = 100;
let hit = false;

function setup() {
  createCanvas(400, 400);
  
}

function draw() {
  background(0);
  shapedraw();
  movepong();
  moveandbounce();
  speedincrease();
  
}

function shapedraw() {
  rect(x, y, 10, 70);
  rect(x2, y2, 10, 70);
  circle(z, z2, radius);
}
function moveandbounce() {
  z += dx;
  z2 += dy;

  if (z > 400) {
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
    y -= 5;
  }

  if (keyIsDown(83)) {
    // s is down
    y += 5;
  }
  if (keyIsDown(UP_ARROW)) {
    // w is up
    y2 -= 5;
  }

  if (keyIsDown(DOWN_ARROW)) {
    // s is down
    y2 += 5;
  }
}
function game() {
  console.log("p1 win");
  z=200;
  z2 = 100;
  dx=1;
  radius =10;
}
function game2(){
  console.log("p2 win");
  z=200;
  z2 = 100;
  dx=1;
  radius = 10;
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