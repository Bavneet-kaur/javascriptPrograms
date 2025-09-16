class Animal {
  sleep() {
    console.log("zzzzzzz");
  }
}
const spot = new Animal();
spot.sleep();

let x = this;
console.log("The 'Alone' this refers to: ", x);
// constructor method -- called automatically when a new object is created.
class Person {
  name; // this is a property of the class 'Person'
  /*--the name; declaration is optional: you could omit it, and the line this.name = name; 
  in the constructor will create the name property before initializing it. --*/
  constructor(name) {
    console.log("Constructor called.....")
    const prompt=require("prompt-sync")({sigint:true});
    let n = prompt("Enter your name: ");
    this.name = n;
  }

  introduceSelf() { // this is a method of class 'Person'
    console.log("Hi! I am ",this.name);
    console.log(`Hi! I am ${this.name}`);
  }
}
const intro = new Person();
intro.introduceSelf();
class Car{
  constructor(name,year){
    this.name = name;
    this.year = year;
  }
  old() {
    const date = new Date();
    return date.getFullYear - this.year
  }
}
const cc = new Car("Merc", 2011)
console.log("My"+" " + cc.name +" "+ "is"+" " + cc.old() +" "+ "years old")