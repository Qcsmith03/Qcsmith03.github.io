// OOP button demo
// Quinten Smith

let bgButton;
let shapeButton;
let backgroundColor= "pink";
let isShapeDisplayed = false;

function setup() {
  createCanvas(windowWidth, windowHeight);
  bgButton=new Button(100,300,600,150,"red","blue");
  shapeButton = new Button (100,400,600,150,"yellow","green");
}

function draw() {
  background(backgroundColor);
  bgButton.display();
  shapeButton.display();

  if (isShapeDisplayed){
    fill("black");
    circle(600,200,100);
  }
}
function mousePressed(){
  if (bgButton.isPointInButton(mouseX, mouseY)){
    backgroundColor="orange";
  }
  if (shapeButton.isPointInButton(mouseX,mouseY)){
    backgroundColor="pink";
    isShapeDisplayed=!isShapeDisplayed;
  }
}

class Button{
  constructor(x,y,ButtonWidth,ButtonHeight, hoverColor, notHoverColor){
    this.x=x;
    this.y=y;
    this.Width = ButtonWidth;
    this.Height = ButtonHeight;
    this.notHoverColor = notHoverColor;
    this.HoverColor = hoverColor;
  }
  display(){
    if (this.isPointInButton(mouseX,mouseY)) {
      fill(this.HoverColor);
    }
    else {
      fill(this.notHoverColor);
    }
    rect(this.x, this.y, this.Width, this.Height);
  }
  isPointInButton(x,y){
    return x >= this.x && x <= this.x + this.Width &&
           y >= this.y && y <= this.y + this.Height;
  }
}