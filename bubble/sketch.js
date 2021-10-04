// bubble demo
// Quinten Smith
// 9/24/2021
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


let thebubbles = [];
function setup() {
  createCanvas(windowWidth, windowHeight);
  let bubble ={
    x: random(width),
    y: height,
    radius: random(20,50),
    dx:0,
    dy:-3,
    theColor: color(random(255),random(255),random(255)),
  };
  thebubbles.push(bubble);
}

function draw() {
  background(220);
  bubbleup();
  displaybubble();
}
function bubbleup(){
  for (let bubble of thebubbles){
    bubble.y += bubble.dy;
    //jitter sideways
    bubble.x += random(-5,5);
  }
 
}
function displaybubble(){
  for (let bubble of thebubbles){
    noStroke();
    fill(bubble.theColor);
    circle(bubble.x, bubble.y, bubble.radius*2);
  }
  
}
function spawnbubble(){
  let bubble ={
    x: random(width),
    y: height,
    radius: random(20,50),
    dx:0,
    dy:-3,
    theColor: color(random(255),random(255),random(255)),
  };
  thebubbles.push(bubble);
}
function mousePressed(){
  spawnbubble();
}
