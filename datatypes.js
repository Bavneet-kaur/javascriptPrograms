//* JS has 8 Primitive Datatypes: null,number, boolean, bigint, string, symbol, undefined, object
let a = null;
let b = 980;
let c = true;  //are used for consitional testing
let d = BigInt(87665) + BigInt(2); //bigint is a new feature of ES2020, can be used to store integer values that are too big to be represented 
// let d = BigInt(87665) + 2;   //! this will throw an error 'Cannot mix BigInt and other types, use explicit conversions'
let e = "Hello I am string"
let f = Symbol("^^^");
//* a variable without a value, has the value undefined
let g = undefined;
let h; 
let k = ""; //An empty string has both a legal value and a type ---> typeof is string
console.log("Primitive Data Types:")
console.log(a,b,c,d,e,f,g,h)

//* JavaScript evaluates expressions from left to right. Different sequences can produce different results
let i = 16 + 4 + "Volvo";
let j = "Volvo" + 16 + 4;
console.log(i);
console.log(j);
/**In the first example, JavaScript treats 16 and 4 as numbers, until it reaches "Volvo".
In the second example, since the first operand is a string, all operands are treated as strings.*/

//* JavaScript has dynamic types. This means that the same variable can be used to hold different data types
let x;       // Now x is undefined
x = 5;       // Now x is a Number
x = "John";  // Now x is a String
x = "John's"  // You can use quotes inside a string, as long as they don't match the quotes surrounding the string
console.log(x)

//* Extra large or extra small numbers can be written with scientific (exponential) notation
let y = 123e5;    
let z = 123e-5;   
console.log(x,y)

// Most programming languages have many number types but Javascript numbers are always one type:double (64-bit floating point)
//* The object data type (non-primitive) can contain both built-in objects, and user defined objects:
//* Built-in object types can be:objects, arrays, dates, maps, sets, intarrays, floatarrays, promises, and more.
const person = {
    firstName : "John",
    lastName  : "Doe",
    age     : 50,
    eyeColor  : "blue",
    hairColr : undefined
  };
  
console.log(person);
console.log(person.firstName + " is " + person.age + " years old.");
console.log(person.middleName); // this will not show error it give undefined
console.log(person.hairColr); // this will also undefined

// console.log("I will be doing hardwork and try to manage my life problems");
// // getting upper and lower limits of number data type
// console.log("Maximum Value: ", Number.MAX_VALUE);
// console.log("Minimum Value: ", Number.MIN_VALUE);
// console.log("Minimum Safe Value: ", Number.MIN_SAFE_INTEGER);
// console.log("Maximum Safe Value: ", Number.MAX_SAFE_INTEGER + 4);
// // BigInt
// var x = 989999899998999n;
// var y = BigInt(9899998999989991111111111111111);
// console.log(x + y);
// x = BigInt(Number.MAX_SAFE_INTEGER)
// var eq = 9007199254740992 === 9007199254740993;
// console.log("BigIntNum: ", x + 5n);
// console.log(eq);
// // usage of operators
// let n = 10;
// console.log("The value of n is: ", n);
// console.log("Value of n is: ", --n);
// console.log("The value of n is: ", n);
// console.log("Value of n is: ", n++);
// console.log("The value of n is: ", n);