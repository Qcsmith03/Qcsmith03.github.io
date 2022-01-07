// bubble sort
// Quinten Smith

let somelist = [5,15,3,8,9,1,20,7];


function selectionSort(aList){
  let swapLoctaion = aList.length - 1;
  
  // could use a for loop
  while (swapLoctaion > 0){
    let highestLocation = 0;

    //one pass
    for (let currentLocaton = 0; currentLocaton <= swapLoctaion; currentLocaton++){
      if (aList[currentLocaton] > aList[highestLocation]){
        highestLocation = currentLocaton;
      }
    }
    //swap
    let temp= aList[swapLoctaion];
    aList[swapLoctaion] = aList[highestLocation];
    aList[highestLocation] = temp;

    //decrease the swap location by 1
    swapLoctaion--;

    //to show each pass
    console.log(aList);
  }
  return aList;
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  console.log(selectionSort(somelist));
}

function draw() {
  
  
}
