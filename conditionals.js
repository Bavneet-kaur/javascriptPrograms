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

let val = 10 ** 2;
let color = val < 90 ? 'Red' : val > 90 ? 'Green' : 'Blue';
console.log(color);

let isDefined = false;
let computeOutcome = isDefined ?? true;
console.log(computeOutcome);

var ACTION = 'SEND_EMAIL';

switch (ACTION) {
  case 'SEND_EMAIL':
  case 'SAVE_USER':
    console.log('The user was notified!');
    break;
  case 'ACTIVATE_USER':
    console.log('Activate User');
    break;
}
