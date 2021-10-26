// grid based game
// Quinten Smith

let grid;
let gridSize = 50;
let cellWidth, cellHeight;
let playery=0;
let playerx=0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  cellWidth = width/gridSize;
  cellHeight = height/gridSize;
  //grid = createEmpty2DArray(gridSize,gridSize);
  
  grid = createRandom2DArray(gridSize,gridSize);
  
  grid[playery][playerx] = 9;
}

function draw() {
  background(220);
  displayGrid();
  
}
function displayGrid() {
  for (let y=0; y<gridSize; y++) {
    for (let x=0; x<gridSize; x++) {
      if (grid[y][x] === 4) {
        fill("green");
      //fill(random(255),random(255),random(255));
      }
      if (grid[y][x] === 3) {
        fill("blue");
      }
      if (grid[y][x] === 9) {
        fill("red");
      }
      // if (grid[y][x]===2){
      //   fill("yellow");
      // }
      if (grid[y][x]===0){
        fill("white");
      }
      if (grid[y][x]===1){
        fill("black");
      }
      
      strokeWeight(3);
      rect(x*cellWidth, y*cellHeight, cellWidth, cellHeight);
      if (grid[y][x]===4){
        fill("white");
        textSize(cellWidth/4);
        textAlign(CENTER,CENTER);
        text("click z to start the game. get the red to the blue. wasd to move. lmb to go through black blocks", x*cellWidth +cellWidth/2,y*cellHeight+cellHeight/2);
      }
      
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
    grid[celly][cellx]=0;  
  }
  else if (grid[celly][cellx]===0){
    grid[celly][cellx]=1;
  }
  // else if (grid[celly][cellx]===9){
  //   grid[celly][cellx]=2;
  // }
  // else if (grid[celly][cellx]===2){
  //   grid[celly][cellx]=3;
  // }
  // else if (grid[celly][cellx]===3){
  //   grid[celly][cellx]=4;
  // }
  // else if (grid[celly][cellx]===4){
  //   grid[celly][cellx]=9;
  // }
}
function createRandom2DArray(rows,cols){
  let grid=[];
  for (let y=0;y<rows;y++){
    grid.push([]);
    for(let x=0;x<cols;x++){
      if (random(100)<49){
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
  if (key==="z"){
    start();
  }
  
  if (key === "s") {
    tryToMoveTo(playerx, playery+1);
  }
  else if (key === "w") {
    tryToMoveTo(playerx, playery-1);
  }
  else if (key === "a") {
    tryToMoveTo(playerx-1, playery);
  }
  else if (key === "d") {
    tryToMoveTo(playerx+1, playery);
  }
}
function tryToMoveTo(newX, newY) {
  //make sure you're on the grid
  if (newX >= 0 && newY >= 0 && newX < gridSize && newY < gridSize) {
    if (grid[newY][newX] === 0) { //if new spot is empty
      //reset current player spot to empty
      grid[playery][playerx] = 0;
    
      playerx = newX;
      playery = newY;
    
      //set new player spot to red
      grid[playery][playerx] = 9;
    }
  }
}
function start(){
  
}