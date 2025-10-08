//* Functions 
// functions are fundamental building blocks in all programming.Functions enable better code organization, modularity, and efficiency.Functions are reusable block of code designed to perform a particular task.Functions execute when they are "called" or "invoked".

console.log("==========Function Declarations==========="); //named functions 
function control() {
  console.log("I've full control!")
}
control();
control();
for (let i = 1; i <= 5; i++) {
  control();
}
//* Function Expression 
console.log("==========Function Expression==========="); //anonymous functions
const greet = function () { //greet is the name of the function
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
function add(val1 = 0, val2 = 1) {
  console.log(val1 + val2);
}

add(23, 11);
add();
//* rest parameters
//Rest parameters let a function accept any number of arguments. They gather all the extra arguments into a single array. It’s written with three dots ...
function numbers(...val) {
  console.log(val)
}
numbers(1, 2, 3, 4, 5)

function num(a, b, c, ...val) { //a variadic function is a function of indefinite arity, i.e., one which accepts a variable number of arguments. 
  console.log("The value of 'val':", val);
  console.log(a, b, c, val);
}
num(1, 2, 3, 4, 5)


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

//* Argument Objects in the function
console.log("==========Argument Objects===========");
//arguments is an array-like object accessible inside functions that contains the values of the arguments passed to that function.
function arg(a,b,c){
  console.log("c: ",arguments[2]); //third argument
  console.log("b: ",arguments[1]); //second argument
  console.log("a: ",arguments[0]); //first argument
  console.log("length of the arguments: ",arguments.length)
  arguments[2] = 33;
  console.log("Now the value of c: ",arguments[2]); //third argument
  console.log("length of the arguments: ",arguments.length)
}
arg(11,22);

function longestString() {
  let longest = "";
  for (const arg of arguments) {
    if (arg.length > longest.length) {
      longest = arg;
    }
  }
  return longest;
}
console.log(longestString("one", "three", "two")); // "three"

//arguments is an array-like object, which means that arguments has a length property and properties indexed from zero, but it doesn't have Array's built-in methods like forEach() or map(). However, it can be converted to a real Array, using one of slice(), Array.from(), or spread syntax.
console.log("==========Return Statement===========");
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

//* early return pattern
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
const sayHi = function () { // funtions as variables
  console.log("Say Hello!")
}
sayHi(); // Hi! from the toy function
function sayHello(name) { // funtions as arguments
  console.log("Say Hello!" + " " + name)
}
sayHello('Radhika'); // passing the toy to a friend
//* Functions Returned from Other Functions --- HOF higher order functions
console.log("==========Higher order functions===========");
function multiply(m) {
  return function multiplier(num) {
    return m ** num;
  }
}
const double = multiply(5);
const triple = multiply(2);
console.log("Doubled value:", double(2));
console.log("Triple value:", triple(3))

function abcd(val) {
  val();
}
abcd(function () {
  console.log("HOF")
})
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

console.log("==========Lexical Scoping===========");
//* Lexical(Rishtedar) Scoping
//the lexical environment for a function f simply refers to the environment enclosing that function's definition in the source code. Lexical scope means: A function can access variables that are defined in its outer (parent) scope, based on where it was written in the code — not where it was called. So if you define a function inside another, the inner one can use the outer’s variables — but not the other way around.
function A() {
  let a = 2;
  console.log("Value of a: ", a);
  function B() {
    let b = a * 3;
    console.log("Value of b: ", b);
    function C() {
      let c = a * b;
      console.log("Value of c: ", c);
    }
    C();
  }
  B();
}
A();

console.log("==========Closure Functions===========");
//A local variable is a "private" variable defined inside a function. A function can access all variables in the local scope.
function localVar() {
  let a = 2;
  return a * a;
}
console.log("Local Varibales Example: ", localVar());
//A global variable is a "public" variable defined outside a function. A function can access all variables in the global scope.
let x = 2;
function globalVar() {
  return x * x;
}
console.log("Global Varubale Exmaple: ", globalVar());

function gol() {
  go = 2; //Undeclared variables (created without a keyword var, let, const), are always global, even if they are created inside a function.
}
gol();
console.log("The value of a (global varibale): ", go * go);

//* Variable Lifetime
//Global variables live until the page is discarded, like when you navigate to another page or close the window.Local variables have short lives. They are created when the function is invoked, and deleted when the function is finished.


//?Suppose you want a counter variable that tracks something -- closures delimma
// Navie Solution - global varibales
let count = 0;
function NavieCounter() {
  count += 1;
};
NavieCounter();
console.log("Counter Value(1): ", count)
NavieCounter();
NavieCounter();
console.log("Counter Value(2): ", count)
//Because 'count' is global, any code in your program can change its value at any time, even without using the NavieCounter() function. This can lead to bugs or unexpected results if other functions or scripts overwrite or tamper with 'count', so the solution could using local varibales 
function LocalCounter() {
  let count = 0;
  count += 1;
  console.log("Counter Value(L): ", count)
}
LocalCounter();
LocalCounter();
LocalCounter();
// Now, 'count' is local to the 'LocalCounter()' function, which means it gets reset to 0 every time you call 'LocalCounter()'. Its value is lost after each call and isn’t shared across calls. So counter never goes above 1 -- to solve this we can return the local varibales
function returnLocalCount() {
  let count = 0;
  count += 1;
  return count;
}

let counter = 0;
counter = returnLocalCount();
console.log("Counter Value(3):", counter); // 1
counter = returnLocalCount();
console.log("Counter Value(4):", counter); // 1
counter = returnLocalCount();
console.log("Counter Value(5):", counter); // 1
// Again, because 'count' is reset to 0 every time, you always get 1 as the returned value after each function call. The function does not "remember" the previous calls.

function NestedCounter() {
  let count = 0;
  function plus() { count += 1; }
  plus();
  return count;
}
//Even if plus() is inside, unless you store counter outside the function (globally), the variable is still created and destroyed with each call. -- the solution is closures
//*A closure is a function bundled with its surrounding (“lexical”) environment.
function myCounter() {
  let count = 0;
  return function () {
    count++;
    console.log("Closure counter value:", count);
    return count;
  };
}

const coun = myCounter();
coun();
coun();
coun();

//Secret Tunnel -- closures 
function toyBox() {
  let key = "shiny key";
  function magicBag() {
    console.log(key);
  }
  return magicBag;
}
let myBag = toyBox();
myBag();

function outer() {
  let message = "Hi Cheero!"
  function inner() {
    console.log("message: ", message) // undefined
  }
  return inner;
}
let m = outer();
m();
console.log("==========IIFE – Immediately Invoked Function Expression===========");
//The function above is actually an anonymous self-invoking function (function without name).
(function () {
  console.log("Runssssssss Immediately!")
})();

console.log("==========Hoisting===========");
//Declarartions are hoisted  but the expressions are not hoisted
Hoist();
// Hosited(); //!ReferenceError: Cannot access 'Hosited' before initialization
function Hoist() {
  console.log("Hoisted Function!")
}

let Hosited = function () {
  console.log("Not Hoisted!")
}


function f() {
  return;
}
console.log(f());

//*Recursive Functions
console.log("==========Recursive Functions===========");
//The act of a function calling itself, recursion is used to solve problems that contain smaller sub-problems. A recursive function can receive two inputs: a base case (ends recursion) or a recursive case (resumes recursion).

// function recurse() {
// Base condition (when to stop)/
//   if (/* condition */) return;

// Recursive call (calling itself)
//   recurse();
// }
function countDown(n) {
  if (n === 0) {
    console.log("I'm Done with you!");
    return;
  };
  console.log(n); //current value 
  countDown(n - 1);
}
countDown(5);
//not avaiable for fat arrow functions;Not synced in strict mode or with rest, default, destructured params
//*Scope and Function Stack
console.log("==========Scope===========");
//A space or environment in which a particular variable or function can be accessed or used. Accessibility of this variable or function depends on where it is defined.
/**JavaScript has the following kinds of scopes:
1. Global scope: The default scope for all code running in script mode.
2. Module scope: The scope for code running in module mode.
3. Function scope: The scope created with a function.
4. Block scope: The scope created with a pair of curly braces (a block).
 */
console.log("==========Function Stack (Call stack)===========");
// The function stack is how the interpreter keeps track of its place in a script that calls multiple functions, like which function is currently executing and which functions within that function are being called.