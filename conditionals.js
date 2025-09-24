//* Conditional Statements
// use the 'if' statement bloxk when the statement is true
console.log("=======The usage of 'if' block==========");
let age = 18;
if (age >= 18) {
  console.log("Access Given");
}
//! Note that if is in lowercase letters. Uppercase letters (If or IF) will generate a JavaScript error.

console.log("=======The usage of 'if else' block==========");
// Use the else if statement to specify a new condition if the first is false.
let day = 2;
if (day === 1) {
  console.log('Sunday');
}
else if (day === 2) {
  console.log('Monday');
}
else if (day === 3) {
  console.log('Tuesday');
}

if (4 ** 2 == 16) {
  console.log('You were right!');
} else {
  console.log('You were wrong :');
}
console.log(2 === '2' || 2 == '2');

//Ternary Condition Operator
let val = 10 ** 2;
let color = val < 90 ? 'Red' : val > 90 ? 'Green' : 'Blue';
console.log(color);

// Nullish Coalescing
let isDefined = false;
let computeOutcome = isDefined ?? true;
console.log(computeOutcome);

console.log("=======The usage of 'switch' block==========");
// Based on a condition, switch selects one or more code blocks to be executed. switch executes the code blocks that matches an expression. switch is often used as a more readable alternative to many if...else if...else statements, especially when dealing with multiple possible values.
var ACTION = 'SEND_EMAIL';
switch (ACTION) {
  // The break keyword is crucial for preventing a "fall-through."Without break, the code will continue to execute the next case blocks (and the default block if present) even if their values do not match the expression.
  case 'SEND_EMAIL':
    console.log("The user recieved the email!")
  case 'SAVE_USER': //if the break keyword is not used then both cases will run 
    console.log('The user was notified!');
    break;
  case 'ACTIVATE_USER':
    console.log('Activate User');
    break;
}

// When JavaScript reaches a break keyword, it breaks out of the switch block.This will stop the execution inside the switch block.No more statements in the switch block will be executed.It is not necessary to break the last case. The switch ends (breaks) there anyway.

switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  default: //The default keyword specifies a block of code to run if there is no case match. it is optional and act as a fallback
    console.log("Another day");
}

switch (new Date().getDay()) {
  default:
    //The default case does not have to be the last case in a switch block, If default is not the last case in the switch block, remember to end the default case with a break.
    console.log("Looking forward to the Weekend");
    break;
  case 6:
    console.log("Today is Saturday");
    break;
  case 0:
    console.log("Today is Sunday");
    break;
}

//common code block
day = 5;
switch (day) {
  case 4:
  case 5:
    console.log( "Soon it is Weekend");
    break;
  case 0:
  case 6:
    console.log("It is Weekend");
    break;
  default:
    console.log("Looking forward to the Weekend");
}

function processUser(user) {
  if (user) {
    if (user.isActive) {
      console.log("Processing user:", user.name);
    } else {
      console.log("User is not active.");
    }
  } else {
    console.log("No user found.");
  }
}
// This works, but it’s deeply nested and harder to follow.


// The early return pattern is a coding style where you exit a function as soon as a condition is met, instead of nesting multiple if/else statements.It makes code:Easier to read, Less nested (avoids “pyramid of doom”), Faster to short-circuit execution when unnecessary
function processUser(user) {
  if (!user) return console.log("No user found.");
  if (!user.isActive) return console.log("User is not active.");

  console.log("Processing user:", user.name);
}
