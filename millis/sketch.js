let isred = false;
let lasttimeswitched = 0;
let plus;

function preload(){
  plus = loadImage("assets/plus png.png");
}

function setup() {
  createCanvas(400, 400);
}

function draw() {
  if (isred) {
    background("red");
  } 
  else {
    background("black");
  }
  image(plus,0,0);
  if (millis() > lasttimeswitched + 2000) {
    background("black");
    lasttimeswitched = millis();
    isred = !isred;
  }

  console.log(millis());
}
