//* Functions 
// functions are fundamental building blocks in all programming.Functions enable better code organization, modularity, and efficiency.Functions are reusable block of code designed to perform a particular task.Functions execute when they are "called" or "invoked".

console.log("==========Function Declarations==========="); //named functions 
function control (){
  console.log("I've full control!")
}
control();
control();
for(let i = 1; i <= 5; i++){
  control();
}
//* Function Expression 
console.log("==========Function Expression==========="); //anonymous functions
const greet = function() { //greet is the name of the function
  console.log("Hello from expression!");
};
greet(); 

//* Arrow Functionsx 
console.log("==========Arrow Functions==========="); //fat-arrow functions
const g = () => console.log("Hello from arrow!");
g();

function onePlusAvg(x, y) {
  return 1 + (x + y) / 2;
}
let a = 1;
let b = 2;
let c = 3;
console.log("One plus Average of a and b is", onePlusAvg(a, b));
console.log("One plus Average of b and c is ", onePlusAvg(b, c));
// Accessing a function without () returns the function and not the function result:
console.log("One plus Average of b and c is ", onePlusAvg);
// Accessing a function with incorrect parameters can return an incorrect answer:
console.log("One plus Average of b and c is ", onePlusAvg()); //NaN - adding undefined + undefined
// onePlusAvg refers to the function object, and onePlusAvg() refers to the function result.

console.log("==========Parameters & Arguments==========="); 
// Parameters are placeholders in the function definition. Think of them as empty boxes where values will be placed when the function is called
function meet(name) {   // "name" is a parameter
  console.log("Hello, " + name + "!");
}
//Arguments are the actual values you pass into a function when you call it. They fill the placeholders (parameters).
meet("Amar"); //'Amar' is the argument
meet(); // this will give undefined value it's like let name; when you declare a varaiable, the default value is undefined!

//The parameter is the name given to the variable declared inside the definition of a function. There are two special kinds of syntax: default and rest parameters.
//* default parameters
//Default parameters let you set a fallback value for a parameter if no argument is passed. Without them, missing arguments become undefined.
 function add (val1 = 0, val2 = 1) { 
  console.log(val1 + val2);
 }

 add(23,11);
 add();
 //* rest parameters
 //Rest parameters let a function accept any number of arguments. They gather all the extra arguments into a single array. It’s written with three dots ...
function numbers(...val){
  console.log(val)
}
numbers(1,2,3,4,5)

function num(a,b,c,...val){ //a variadic function is a function of indefinite arity, i.e., one which accepts a variable number of arguments. 
  console.log("The value of 'val':",val);
  console.log(a,b,c, val);
}
num(1,2,3,4,5)


 function sum(...numbers) {
  let total = 0;
  for (let num of numbers) {
    total += num;
  }
  console.log("Total:", total);
}

sum(1, 2);              
sum(1, 2, 3, 4, 5);  

// Default parameter → gives a backup value when no argument is provided.
// Rest parameter → collects all extra arguments into one array.

//* return statement 
//The return statement ends the execution of a function and sends back a value to the place where the function was called.If no value is returned, the function returns undefined by default.
let result = add(5, 3);
console.log(result); // 8

function test() {
  console.log("Before return");
  return "I’m done!";
  console.log("After return"); //this will never execute
}
console.log(test());

//* earlt return pattern
function canVote(age) {
  if (age < 0) {
    return "Invalid age.";  // early exit
  }
  if (age < 18) {
    return "You are too young to vote.";  // early exit
  }
  return "You can vote!";
}

console.log(canVote(-5));  
console.log(canVote(15)); 
console.log(canVote(20));  

//* first-class functions
console.log("==========First Class Functions==========="); 
const sayHi = function(){ // funtions as variables
  console.log("Say Hello!")
}
sayHi(); // Hi! from the toy function
function sayHello(name){ // funtions as arguments
  console.log("Say Hello!" + " " + name)
}
sayHello('Radhika'); // passing the toy to a friend
//* Functions Returned from Other Functions --- HOF higher order functions
console.log("==========Higher order functions==========="); 
function multiply(m){
return function multiplier(num){
  return m ** num;
}
}
const double = multiply(5);
const triple = multiply(2);
console.log("Doubled value:",double(2));
console.log("Triple value:", triple(3))

console.log("==========Impure and Pure Functions==========="); 
//* Impure Functions --Output can change even if the inputs are the same.
function getRandomNumber() {
  return Math.random();
}

console.log(getRandomNumber()); 
console.log(getRandomNumber());
//*pure Functions --Always gives the same output for the same input.
function divide(a, b) {
  return a / b;
}

console.log(divide(2, 3)); 
console.log(divide(2, 3));
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
// function mainFunction(callback) {
//   console.log("Performing operation...");
//   // Use setTimeout to simulate an asynchronous operation
//   setTimeout(function() {
//     callback("Operation - " + (3*3));
//   }, 7000);
//   console.log("Operation performed after setTimeout function-->performed before the multipication operation")
//   }
  
//   // Define the callback function
//   function callbackFunction(result) {
//   console.log("Result: " + result);
//   }
  
//   // Call the main function with the callback function
//   mainFunction(callbackFunction);
//   // using this keyword in functions
//   function myfunc(){
//     return this;
//   }
//   console.log(myfunc())