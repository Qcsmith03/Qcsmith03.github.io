// grid based game
// Quinten Smith
// global variables
let grid;
let gridSize = 50;
let cellWidth, cellHeight;
let playery=0;
let playerx=0;
let state;
let counter=0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  //starts screen of the game.
  state="startScreen";
  cellWidth = width/gridSize;
  cellHeight = height/gridSize;
  
  grid = createRandom2DArray(gridSize,gridSize);
  //you are the red block
  grid[playery][playerx] = 9;
}

function draw() {
  //draws the insturctions and point counter.
  if (state==="startScreen"){
    background(255);
    fill("black");
    textSize(20);
    text("Get the red to the blue. wasd to move. lmb to go through black blocks. g to start!", 50,100);
    text("Press r to restart and change the maze if no blue.", 70,150);
    text(counter,50,200);
  }
  else if (state === "game"){
    background(220);
    displayGrid();
    //when red is over blue you get a point
    if (grid[playery+1][playerx]===3){
      counter ++;
      grid = createRandom2DArray(gridSize,gridSize);
      state="startScreen";
      
    }
    //red next to blue you get a point
    if (grid[playery][playerx+1]===3){
      counter++;
      grid = createRandom2DArray(gridSize,gridSize);
      console.log("here!!!");
      state="startScreen";
      
    }
    
  }
    
}

function displayGrid() {
  for (let y=0; y<gridSize; y++) {
    for (let x=0; x<gridSize; x++) {
      //the colors on the grid
      if (grid[y][x] === 3) {
        fill("blue");
      }
      if (grid[y][x] === 9) {
        fill("red");
      }
      
      if (grid[y][x]===0){
        fill("white");
      }
      if (grid[y][x]===1){
        fill("black");
      }
      //the squares of the grid
      strokeWeight(3);
      rect(x*cellWidth, y*cellHeight, cellWidth, cellHeight);
      
      
    }
  }
}
//empty grid no use

// changes black to white and vise versa on a lmb click, used for getting through black blocks
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
  
}
// creates maze
function createRandom2DArray(rows,cols){
  let grid=[];
  for (let y=0;y<rows;y++){
    grid.push([]);
    for(let x=0;x<cols;x++){
      if (random(100)<50){
        grid[y].push(0);
      }
      else if (random(100)<0.1){
        grid[y].push(3);
      
      }
      else {
        grid[y].push(1);
      }
    }
  }
  return grid;
}
// start button, no blue squares button and the empty grid button, along with move wasd.
function keyPressed(){
  if (keyCode===82){ //key r creates maze
    setup();
  }
  
  if (key === "g"){// key g starts game
    state="game";
    grid[playery][playerx]=0;
    playery = 0;
    playerx = 0;
    grid[playery][playerx]=9;
  }
  
  // move the red square
  if (key === "s") {// down
    tryToMoveTo(playerx, playery+1);
  }
  else if (key === "w") {// up
    tryToMoveTo(playerx, playery-1);
  }
  else if (key === "a") {// left
    tryToMoveTo(playerx-1, playery);
  }
  else if (key === "d") {// right
    tryToMoveTo(playerx+1, playery);
  }
}
// code for the move keys
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