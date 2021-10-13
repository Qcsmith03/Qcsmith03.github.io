// 2d array demo
// Quinten Smith

let gridsize = 100;
let grid;
let sound;
function preload(){
  sound=loadSound("assets/atmosbasement.mp3_.flac");
}
function setup() {
  createCanvas(windowWidth, windowHeight);
  grid =createRandom2DArray(gridsize,gridsize);

}

function draw() {
  background(220);
  displayGrid();
}
function mousePressed(){
  sound.play();
  let cellWidth= width/gridsize;
  let cellHeight = height/gridsize;
  
  let cellx = Math.floor(mouseX/cellWidth);
  let celly= Math.floor(mouseY/cellHeight);

  if(grid[celly][cellx]===1){
    grid[celly][cellx]=0;  
  }
  else if (grid[celly][cellx]===0){
    grid[celly][cellx]=1;
  }
}
function displayGrid(){
  let cellWidth= width/gridsize;
  let cellHeight = height/gridsize;

  for (let y=0;y<gridsize;y++){
    for (let x=0;x<gridsize;x++){
      if(grid[y][x]===0){
        fill("white");
      }
      else if (grid[y][x]===1){
        fill("black");
      }
      rect(x*cellWidth,y*cellHeight,cellWidth,cellHeight);
    }
  }
}

function createEmpty2DArray(rows,cols){
  let grid=[];
  for (let y=0;y<rows;y++){
    grid.push([]);
    for(let x=0;x<cols;x++){
      grid[y].push(0);
    }
  }
  return grid;
}

function createRandom2DArray(rows,cols){
  let grid=[];
  for (let y=0;y<rows;y++){
    grid.push([]);
    for(let x=0;x<cols;x++){
      if (random(100)<50){
        grid[y].push(0);
      }
      else {
        grid[y].push(1);
      }
    }
  }
  return grid;
}
function keyPressed(){
  if (keyCode===82){
    setup();
  }
}