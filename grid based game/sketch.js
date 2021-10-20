// grid based game
// Quinten Smith

let grid;
let gridSize = 20;
let cellWidth, cellHeight;

function setup() {
  createCanvas(windowWidth, windowHeight);
  cellWidth = width/gridSize;
  cellHeight = height/gridSize;
  grid = createEmpty2DArray(gridSize,gridSize);

}

function draw() {
  background(220);
  displayGrid;
}
function displayGrid() {
  for (let y=0; y<gridSize; y++) {
    for (let x=0; x<gridSize; x++) {
      if (grid[y][x] === 0) {
        fill("white");
      }
      if (grid[y][x] === 1) {
        fill("black");
      }
      if (grid[y][x] === 9) {
        fill("red");
      }
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