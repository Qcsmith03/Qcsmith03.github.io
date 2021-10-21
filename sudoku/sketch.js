// sudoku demo
// Quinten Smith

let intialGrid= [
  [2,0,5,0,0,7,0,0,6],
  [4,0,0,9,6,0,0,2,0],
  [0,0,0,0,8,0,0,4,5],
  [9,8,0,0,7,4,0,0,0],
  [5,7,0,8,0,2,0,6,9],
  [0,0,0,6,3,0,0,5,7],
  [7,5,0,0,2,0,0,0,0],
  [0,6,0,0,5,1,0,0,2],
  [3,0,0,4,0,0,5,0,8],
];

let gridDimensions=9;
let cellSize;
let grid;

function setup() {
  if (windowWidth < windowHeight){
    createCanvas(windowWidth*0.8, windowWidth*0.8);
  }
  else{
    createCanvas(windowHeight*0.8,windowHeight*0.8);
  }
  cellSize=(width-2)/gridDimensions;
  grid=intialGrid;
}

function draw() {
  background(220);
  displayGrid();
}
function displayGrid(){
  for (let i=0; i<gridDimensions;i++){
    for (let j=0;j<gridDimensions;j++){
      fill ("white");
      strokeWeight(1);
      rect(j*cellSize,i*cellSize,cellSize,cellSize);
      

      //show the number
      if (grid[i][j]!==0){
        fill("black");
        textSize(cellSize*0.75);
        textAlign(CENTER,CENTER);
        text(grid[i][j], j*cellSize +cellSize/2,i*cellSize+cellSize/2);
      }
    
    }
  }
  drawCageLines();
}

function drawCageLines(){
  strokeWeight(4);
  for (let location=0; location <=9; location += 3){
    line(0, cellSize*location, width, cellSize*location);
    line(cellSize*location, 0, cellSize*location, height);
  }
}