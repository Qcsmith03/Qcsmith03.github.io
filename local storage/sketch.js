// local storage demo
// Quinten Smith

let clickCount =0;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  
  //current click
  textSize(45);
  fill("black");
  text(clickCount,width/2,height/2);
  //highest click
  fill("red");
  text(getItem("clickMax"),100,100);
}

function mousePressed(){
  clickCount++;
  if (clickCount > getItem("clickMax")){
    storeItem("clickMax", clickCount);
  }
}