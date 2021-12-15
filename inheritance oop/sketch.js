// OOP inheritance demo
// Quinten Smith
// 9/24/2021

let car;


function setup() {
  createCanvas(windowWidth, windowHeight);
  car = new Car("civic");
}

class Vehicle{
  constructor(name,type){
    this.name = name;
    this.type = type;
  }
  getName(){
    return this.name;
  }
  getType(){
    return this.type;
  }
}

class Car extends Vehicle {
  constructor(name){
    super(name,"car");
  }
  getName(){
    return "this car is a " + super.getName();
  }
}