//*Loops can execute a block of code a number of times.

// The 'for' statement creates a loop that consists of three optional expressions, enclosed in parentheses and separated by semicolons, followed by a statement (usually a block statement) to be executed in the loop.
// for (initialization; condition; afterthought)
//   statement

/*initialization expression will run once before executing loop*/
/*condition for executing the code block. -- This conditional test is optional. If omitted, the condition always evaluates to true.*/
/*afterthought is executed every time the code block has been executed  --  This occurs before the next evaluation of condition*/

console.log("======For Loop========")
for (let i = 1; i <= 5; i++) {
    console.log(i); //console.log() always adds a newline after printing in JavaScript.
};

let str = "";
for (let i = 1; i <= 5; i++) {
    str += i; //builds a string inside the loop and prints it once after the loop → gives one continuous line.
}
console.log(str); // to get the output in a straight line

for (let i = 0; i < 6; i++) {
    /* if the initialization expression is equal to 0
     and condition is </<= than it will n-1 time*/
    console.log(i);
}
// adding n natural numbers using for loops
const prompt = require("prompt-sync")({ sigint: true });
let sum = 0;
let n = +prompt("Enter the value of n = ");
// n = Number.parseInt(n);
for (let i = 1; i <= n; i++) {
    console.log(i)
    sum = sum + (i);
}
console.log("Sum of" + " " + n + " " + "natural numbers: ", sum);

//* While loop
/**start
 * while (condition) { 
 * // code block to be executed 
 * change
 * };
*/
// The while statement creates a loop that executes a specified statement as long as the test condition evaluates to true. The condition is evaluated before executing the statement.
console.log("======while Loop========")
let w = 0;
while (w < 3) {
    w++;
}
console.log(w);

//* do-while loop
console.log("======do...while Loop========")
// The do while loop is a variant of the while loop.The do while loop will execute the code block once, before checking if the condition is true, then it will repeat the loop as long as the condition is true.
/**
 * do {
// code block to be executed
}
while (condition);
 */

let i = 3;
do {
    console.log(i);
    i++;
} while (i < 3);

//*usage of 'break' and 'continue' keyword
//The break statement terminates the current loop or switch statement and transfers program control to the statement following the terminated statement. 
console.log("======usage of 'break' keyword========")
//Purpose: Immediately exits the loop (stops it completely).
// Use case: When you want to stop looping once a certain condition is met.
for (let i = 1; i <= 10; i++) {
    if (i === 5) {
        break; // exit the loop when i = 5
    }
    console.log(i);
}

let w1 = 0;
while (w1 < 6) {
  if (w1 === 4) {
    break;
  }
  w1 += 1;
}
console.log("Value of'w1'",w1);
//It can also be used to jump past a labeled statement when used within that labeled statement.
//A labeled statement is any statement that is prefixed with an identifier. You can jump to this label using a break or continue statement nested within the labeled statement.
// Without the label, break would only stop the inner loop only. With break outerLoop;, we jump out of the outer loop completely.
outerLoop: for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 3; j++) {
        if (i === 2 && j === 2) {
            break outerLoop; // exits the *outer* loop, not just inner
        }
        console.log(i, j);
    }
}
console.log("======usage of 'continue' keyword========")
//The continue statement terminates execution of the statements in the current iteration of the current or labeled loop, and continues execution of the loop with the next iteration.

// Purpose: Skips the current iteration and jumps to the next one.
// Use case: When you want to ignore some values but still continue looping.
for (let i = 1; i <= 10; i++) {
  if (i === 3) {
    continue;
  }
console.log(i);
}
console.log("===========================")
outerLoop: for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 3; j++) {
        if (j === 2) {
            continue outerLoop; // skips the current i loop entirely
        }
        console.log(i, j);
    }
}

// Expected output: 3
// JavaScript doesn't care. Expression 1 is optional.
// You can initiate many values in expression 1 (separated by comma):
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