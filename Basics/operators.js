//* Javascript operators are used to perform different types of mathematical and logical computations.
/**There are different types of JavaScript operators:

Arithmetic Operators 
Assignment Operators
Comparison Operators
String Operators
Logical Operators
Bitwise Operators
Ternary Operators
Type Operators

 */

//The numbers (in an arithmetic operation) are called operands.
//The operation (to be performed between the two operands) is defined by an operator

//* Airthmetic Operators are used to perform arithmetic on numbers
//* +	Addition
//* -	Subtraction
// *	Multiplication
// **	Exponentiation (ES2016) raises the first operand to the power of the second operand.
//* /	Division
//* %	Modulus (Division Remainder)
//* ++	Increment
//* --	Decrement

// the two numbers can be literals(d); or variables(c); or expression(line-32)
let d = 120 + 80;  
let a = 50;
let b = 90;
let c = a + b;
let a1 = 10, a2 = 20;
let b1 = 11, b2 = 21;
console.log("Sum(c): ", c)
console.log("sum of two numbers: ", 80 + 90);
console.log("The result of the expression: ",(100 + 50) * 10);
console.log("Sum(d): ",d);
console.log("Subtract(a - b): ", a - b);
console.log("Multiply(a * b): ", a * b);
console.log("Division(a / b): ", a / b);
console.log("Modulus(a % b): ", a % b);
console.log("Exponential(a ** b): ", 3 ** 2);
//if the increment operator(similar for decrement operator) is used before operand/varibale with a value then it will increase the value by 1
console.log("Increment(++a1): ", ++a1); 
//if the increment operator(similar for decrement operator) is used after operand/varibale with a value then the value remains same
console.log("Increment(a2++): ", a2++); //increases the number in the cached memory 
console.log("Decrement(--b1): ", --b1); 
console.log("Decrement(b2--): ", b2--);
//* Operator precedence describes the order in which operations are performed in an arithmetic expression.
let x = 100 + 50 * 3; 
console.log(x); //multipication is done first >> addition
// Multiplication (*) and division (/) have higher precedence than addition (+) and subtraction (-).
// When using parentheses/brackets, the operations inside the parentheses are computed first
x = (100 + 50) / 3;
console.log(x); 
/**When many operations have the same precedence (like addition and subtraction or multiplication and division), 
they are computed from left to right */
x = 100 + 50 - 3;
console.log(x); 
x = 100 / 50 * 3;
console.log(x); 

//* Assignment Operators are used to assign values to variables
//* =	x = y	x = y
//* +=	x += y	x = x + y
//* -=	x -= y	x = x - y
//* *=	x *= y	x = x * y
//* /=	x /= y	x = x / y
//* %=	x %= y	x = x % y
// **=	x **= y	x = x ** y
