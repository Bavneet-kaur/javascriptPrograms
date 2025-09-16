// function onePlusAvg(x, y) {
//   return 1 + (x + y) / 2;
// }
// let a = 1;
// let b = 2;
// let c = 3;
// console.log("One plus Average of a and b is", onePlusAvg(a, b));
// console.log("One plus Average of b and c is ", onePlusAvg(b, c));
// // Accessing a function without () returns the function and not the function result:
// console.log("One plus Average of b and c is ", onePlusAvg);
// // Accessing a function with incorrect parameters can return an incorrect answer:
// console.log("One plus Average of b and c is ", onePlusAvg());
// // onePlusAvg refers to the function object, and onePlusAvg() refers to the function result.
// console.log("----------------------")
// var greeting = "Hello!";

// function greetMe(name) {
//   var greeting = "Hey there!";
//   return greeting + " " + name;
// }
// console.log(greeting);

// let recursion = function (counter = 0) {
//   if (counter < 10) {
//     console.log(`The value of counter is ${counter}`);
//     return recursion(counter + 1);
//   }
// };
// const foodItem = {
//   name: "Pizza",
//   calories: 2035,
//   source: "Franco Costa Pizzeria",
// };
// recursion(5);
// foodItem.calAdvice = function () {
//   return this.calories > 500 ? "Too High :(" : "Good Enough!";
// };

// console.log(foodItem.calAdvice());
// callback functions
function mainFunction(callback) {
  console.log("Performing operation...");
  // Use setTimeout to simulate an asynchronous operation
  setTimeout(function() {
    callback("Operation - " + (3*3));
  }, 7000);
  console.log("Operation performed after setTimeout function-->performed before the multipication operation")
  }
  
  // Define the callback function
  function callbackFunction(result) {
  console.log("Result: " + result);
  }
  
  // Call the main function with the callback function
  mainFunction(callbackFunction);
  // using this keyword in functions
  function myfunc(){
    return this;
  }
  console.log(myfunc())