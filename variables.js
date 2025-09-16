/*variables(containers) are used to store data, 
javascript variables can be declared in 4 ways:
>>>automatically: x=6; y=9; z=x+y;
>>>using var
>>>using let
>>>using const
*/


test = "automatically variable assigned"
console.log(test)
console.log("-----------")

//* declaration and intialization
var t; //declaring the variable
var t = "declaration & intialization" // declaration & intialization(giving first value)
console.log("D&T:",t)


// & Always declare variables
/**
 * ? var keyword was used from 1995 to 2015, is a part of ES5
 * ? var - globally scoped while const&let - blocked scoped
 * ? var can be updated & re-declared within it's scope
 * ? only use var for the support of old browser or project
/**
 * ? when we declare the variable with var it automatically gets the property of the window object in the browser
 * ?
 */


/** In a browser, window is the global object.
It represents the browser window and provides access to things like alert(), document, and many other properties and methods.
Any global things you define (like variables, functions) become properties of window.

Imagine window is like the global room in your house where you keep common items.
When you declare a var variable globally, it’s like putting your toy in that room — everyone in the house can see and access it.
But if you declare it with let or const, it’s like keeping your toy in your private shelf — nobody else can access it from the global room!
*/


/**
 * & Before ES6 (2015), JS did not have Block Scope.JS had Global Scope and Function Scope.
 * & ES6 introduced the two new JS keywords: let and const.These two keywords provided Block Scope in JS:
 * ^ Variables declared with let have Block Scope
 * ^ Variables declared with let must be Declared before use
 * ^ Variables declared with let cannot be Redeclared in the same scope
 * ~ Variables defined with const cannot be Redeclared
 * ~ Variables defined with const cannot be Reassigned
 * ~ Variables defined with const have Block Scope
 * ~ Variables defined with const must be decalred and initialized before use 
 *
 */

let t1;
t1 = 8;
console.log("The value of t1 is,",t1);

let a = 54;
console.log(a);
a = "bawa";
console.log(a);

/**
 * ? if you try to voilate the general rules for constructing names for variables (unique identifiers), 
 * ! it thow an syntax error/(token error)
 
 * * variable names are case sensitive >>  both var b = 8; and var B = 9; are different
 */

// !var is globally scoped -- which impose problems/bugs
var b = "this";   
var b = "means";
console.log(b);
{
    var b = "a change in the varibale b!";
    console.log(b);
}

/* let variables are block scoped*/
let c = "ccc";
{
    let c = "bbb";
}
// you can reassign the values
c = 34;
console.log(c);


// use const when you want to declare: array, object, function, RegExp
// ?It does not define a constant value. It defines a constant reference to a value.

const d = "const value";
console.log(d);
{
    const d = "constant";
    console.log(d);
}
console.log(d);


// const PI; //!SyntaxError: Missing initializer in const declaration
// PI=3.14;
// console.log("The value of PI is:",PI);



//& TDZ (Temporal Dead Zone) && Hoisting 
/**It means all variable and function declarations are moved to the top of their scope during compile time. This allows them to be referenced before their line of actual declaration in code.
 */

/**The TDZ is the time between when a block is entered and when a variable is declared (or initialized).
During this period, if you try to access the variable, you will get a ReferenceError. */

console.log("Hoisting with var: ", varHoist)
var varHoist = "hoisting"
// console.log("Hoisting with let: ",letHoist) //!ReferenceError: Cannot access 'letHoist' before initialization
// let letHoist = "hoisting"
// console.log("Hoisting with const: ",constHoist) //!ReferenceError: Cannot access 'constHoist' before initialization
// const constHoist = "hoisting"

hoistedFunc();
function hoistedFunc() {
  console.log("I am hoisted!");
}
// varHoistedFunc();   //! TypeError: varHoistedFunc is not a function
// var varHoistedFunc = function() {
//   console.log("Function Expression");
// };

// letHoistedFunc();    //!ReferenceError: Cannot access 'letHoistedFunc' before initialization
// let letHoistedFunc = function() {
//   console.log("Function Expression");
// };

// constHoistedFunc();     //!ReferenceError: Cannot access 'constHoistedFunc' before initialization
// const constHoistedFunc = function() {
//   console.log("Function Expression");
// };

// *The best option would be to declare and initialise our variable before use.

/**
 *& | Keyword | Scope | Redeclare | Reassign | Hoisted | Binds this | Temporal Dead Zone |
 *& |---------|-------|-----------|----------|---------|------------| ------------------ |
 *? | var     | No    | Yes       | Yes      | Yes     | Yes        | No                 |
 *^ | let     | Yes   | No        | Yes      | N/Y     | No         | Yes                |
 *~ | const   | Yes   | No        | No       | N/Y     | No         | Yes                |
 */

// *Note: "=" is called assignment operator which is used to assign the value/data while 
// *Note: "==" is called equal to operator which is used to compare the values 