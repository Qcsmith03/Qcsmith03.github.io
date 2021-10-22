// grid based game
// Quinten Smith

let grid;
let gridSize = 2;
let cellWidth, cellHeight;

function setup() {
  createCanvas(windowWidth, windowHeight);
  cellWidth = width/gridSize;
  cellHeight = height/gridSize;
  grid = createRandom2DArray(gridSize,gridSize);

}

function draw() {
  background(220);
  displayGrid();
}
function displayGrid() {
  for (let y=0; y<gridSize; y++) {
    for (let x=0; x<gridSize; x++) {
      if (grid[y][x] === 0) {
        fill("green");
        //fill(random(255),random(255),random(255));
      }
      if (grid[y][x] === 1) {
        fill("blue");
      }
      if (grid[y][x] === 9) {
        fill("red");
      }
      if (grid[y][x]===2){
        fill("yellow");
      }
      strokeWeight(3);
      rect(x*cellWidth, y*cellHeight, cellWidth, cellHeight);
    }
  }
}

function createEmpty2DArray(rows, cols) {
  let board = [];
  for (let y=0; y<rows; y++) {
    board.push([]);
    for (let x=0; x<cols; x++) {
      board[y].push(0);
    }
  }
  return board;
}
function mousePressed(){
  let cellWidth= width/gridSize;
  let cellHeight = height/gridSize;
  
  let cellx = Math.floor(mouseX/cellWidth);
  let celly= Math.floor(mouseY/cellHeight);

  if(grid[celly][cellx]===1){
    grid[celly][cellx]=9;  
  }
  else if (grid[celly][cellx]===0){
    grid[celly][cellx]=1;
  }
  else if (grid[celly][cellx]===9){
    grid[celly][cellx]=2;
  }
  else if (grid[celly][cellx]===2){
    grid[celly][cellx]=0;
  }

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
  if (keyCode===69){
    grid =createEmpty2DArray(gridSize,gridSize);
  }
}