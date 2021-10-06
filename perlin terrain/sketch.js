// terrain perlin
// Quinten Smith
// 10/6/2021

let rectHeights=[];
let numberOFRects;

function setup() {
  createCanvas(windowWidth, windowHeight);
  numberOFRects =width;
  generateTerrain();
}

function draw() {
  background(220);
  displayterrain();
}
function generateTerrain(){
  let time=0;
  for (let i=0;i<numberOFRects;i++){
    let theHeights =noise(time)*height;
    rectHeights.push(theHeights);
    time +=0.003;
  }
}
function displayterrain(){
  let thewidth= width/rectHeights.length;
  for (let i=0; i<rectHeights.length;i++){
    let theHeights = rectHeights[i];
    fill("black");
    rect(thewidth*i,height,10,-theHeights);
  }
}