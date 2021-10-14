// game of life

let grid;
let gridsize=10;


function setup() {
  createCanvas(windowWidth, windowHeight);
  grid=createEmptyGrid(gridsize,gridsize);
}

function draw() {
  background(220);
  
}
function createEmptyGrid(rows,cols){
  grid.push(0,0);
}