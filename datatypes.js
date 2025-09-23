// every value in JS has a type 
// there are two types of data types: Primitives Data Types, Refrence Data Types
//* when you get the real values on copying the oroginal values ~ primitive data types
let test = 9;
console.log("The value of test: ",test);
t = test;
console.log("The value of t: ",t);
t = t + 1;
console.log("Now the value of t: ",t)
console.log("The value of test: ",test);

console.log("_____________________________________")
//* when you get the reference of the parent values on the copying the values ~ reference types/objects {jo tera hai voh mera hai}
let array = [1,2,3];
console.log("Array: ", array);
arr = array;
console.log("Arr:",arr);
array.pop();
console.log("After 'array' pop Array: ", array);
console.log("After 'array'  pop Arr:",arr);
arr.pop();
console.log("After 'arr' pop Array: ", array);
console.log("After 'arr'  pop Arr:",arr);
console.log("_____________________________________")

//* JS has 7 PRIMITIVE DATA TYPES: null,number, boolean, bigint, string, symbol, undefined 
// to identify each of tyoe of data type then you should grasp the above mentioned 7 data types 
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
// there re 3 ways to create the string single qoute(' '), double qoute(" "), backticks/template literals(` `);  only if the starting quote is the same as the end quote.
let i = 16 + 4 + "Volvo";
let j = "Volvo" + 16 + 4;
console.log(i);
console.log(j);
/**In the first example, JavaScript treats 16 and 4 as numbers, until it reaches "Volvo".
In the second example, since the first operand is a string, all operands are treated as strings.*/

//* JavaScript has dynamic types. This means that the same variable can be used to hold different data types -- dynamic typing 
let x;       // Now x is undefined
x = 5;       // Now x is a Number
x = "John";  // Now x is a String
console.log(x)
x = "John's"  // You can use quotes inside a string, as long as they don't match the quotes surrounding the string
console.log(x)

//* Extra large or extra small numbers can be written with scientific (exponential) notation
let y = 123e5;    
let z = 123e-5;   
console.log("The extra large value represented by y: ",y)
console.log("The extra small value represented by z: ",z)


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
// getting upper and lower limits of number data type
console.log("Maximum Value: ", Number.MAX_VALUE);
console.log("Minimum Value: ", Number.MIN_VALUE);
console.log("Minimum Safe Value: ", Number.MIN_SAFE_INTEGER);
console.log("Maximum Safe Value: ", Number.MAX_SAFE_INTEGER + 4);
// BigInt
var x1  = 989999899998999n;
var y1 = BigInt(9899998999989991111111111111111);
console.log(x1  + y1);
x1  = BigInt(Number.MAX_SAFE_INTEGER)
var eq = 9007199254740992 === 9007199254740993;
console.log("BigIntNum: ", x1  + 5n);
console.log(eq);


/**
 **Type Casting/conversion 
 **1. Implicit Type Casting/ Type Coercion - automat9ically converts the data type 
 **2. Explicit Type Casting- manually converts thge data type using type casting methods: pasrseInt(), toString()
*/
// implicit type Casting 
let tc = '8';
console.log("Type of 'tc': ",typeof(tc));
tc = 1 + tc;
console.log("The value of 'tc' is: ",tc)
console.log("Type of 'tc': ",typeof(tc));
tc = tc  - 1;
console.log("The value of 'tc' is: ",tc)
console.log("Type of 'tc': ",typeof(tc));
// explicit type casting 
let num = 100;
console.log("Type of 'num': ",typeof(num));   
num = num.toString();   //conversions needs to be stored otherwise the conversion is incomplete
console.log("Type of 'num': ",typeof(num));