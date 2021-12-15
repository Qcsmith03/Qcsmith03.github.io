// recursion demo
// Quinten Smith



function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(random(0),random(0),random(0),random(0));
  recursiveCircle(width/2,height/2,height,0);
}

function recursiveCircle(x,y,diameter){
  fill(random(255),random(255),random(255),random(255));
  circle(x,y,diameter);
  if (diameter > 20){
    
    recursiveCircle(x-(mouseX/2/width)*diameter,y-(mouseY/2/height)*diameter,diameter/2);
    recursiveCircle(x+(mouseX/2/width)*diameter,y+ (mouseY/2/height)*diameter,diameter/2);
    recursiveCircle(x-(mouseX/2/width)*diameter,y+(mouseY/2/height)*diameter,diameter/2);
    recursiveCircle(x+(mouseX/2/width)*diameter,y- (mouseY/2/height)*diameter,diameter/2);

  }

}