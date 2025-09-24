//*Loops can execute a block of code a number of times.

// The 'for' statement creates a loop that consists of three optional expressions, enclosed in parentheses and separated by semicolons, followed by a statement (usually a block statement) to be executed in the loop.
// for (initialization; condition; afterthought)
//   statement
/*initialization expression will run once before executing loop*/
console.log("======For Loop========")
for (let i = 1; i <= 5; i++) {
    console.log(i); //console.log() always adds a newline after printing in JavaScript.
};

let str = "";
for (let i = 1; i <= 5; i++) {
    str += i; //builds a string inside the loop and prints it once after the loop → gives one continuous line.
}
console.log(str); // to get the output in a straight line



// for (let i = 0; i < 6; i++) {
//     /* if the initialization expression is equal to 0
//      and condition is </<= than it will n-1 time*/
//     console.log(i);
// }
// // adding n natural numbers using for loops
// const prompt = require("prompt-sync")({ sigint: true });
// let sum = 0;
// let n = prompt("Enter the value of n = ");
// n = Number.parseInt(n);
// for (let i = 1; i <= n; i++) {
//     console.log(i, "+")
//     sum = sum + (i);
// }
// console.log("Sum of" + " " + n + " " + "natural numbers: ", sum);
// // JavaScript doesn't care. Expression 1 is optional.
// // You can initiate many values in expression 1 (separated by comma):
// const cars = ["BMW", "Volvo", "Saab", "Ford"];
// let i, len, text;
// for (i = 0, len = cars.length, text = ""; i < len; i++) {
//     text += cars[i];
// }
// console.log(text, "<br>");
// /*for-in loop -- iterates over the object properties*/
// let person = {
//     name: 'Rohit',
//     age: 23,
//     proff: 'Software Developer'
// }

// for (let elements in person) {
//     console.log(elements + ": " + person[elements]);
// }
// console.log("-----------");

// /*for-of loop -- iterates over the object properties -- are mostly used for array*/
// for (let items of 'rohit') {
//     console.log(items);
// }
// console.log("-----------");
// /*while loop -- will only work on a condition*/
// let k = 1;
// while (k < n) {
//     console.log(k);
//     k++;
// }
// console.log("---->", k)
// console.log("--------------");
// /*do while loop -- will work once and then check the condition*/
// k = 10;
// console.log("---->", k)
// do {
//     console.log(k);
//     k++;
// }
// while (k < n) {
//     console.log("Zara Zara touch me touch me!");
// }