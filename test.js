// const vowels = ['a', 'e', 'i', 'o', 'u'];
// let count = 0;
// function countVowels(str) {
//     for (let char of str) {
//         if (vowels.includes(char.toLowerCase())) {
//             count++;
//         }
//     }
//     return count;
// }
// console.log("the vowels in the given string: ", countVowels("Javascript"));

// const prompt = require('prompt-sync')({ sigint: true });
// let string = prompt("Enter a string: ");
// let words = string.split(" ");
// console.log(words);
// function reverseStr(string) {
//     let result = [];
//     for (let word of words) {
//         let r = word.split("").reverse().join("");
//         result.push(r);
//     }
//     return result.join(" ");
// }
// console.log("Reverse: ", reverseStr(string));


// function countNonRepeatChar(string) {
//     for (let i = 0; i < string.length; i++) {
//         let char = string[i];
//         if (string.indexOf(char) === string.lastIndexOf(char)) {
//             return char;
//         }
//     }
//     return "No unique character";
// }
// console.log(countNonRepeatChar(string));

// function longestWord(sentence) {
//     let words = sentence.split(" ");
//     let longest = "";

//     for (let word of words) {
//         if (word.length > longest.length) {
//             longest = word;
//         }
//     }

//     return longest;
// }
// console.log(longestWord("I love programming in JavaScript"));


// function longestUniqueSubstring(str) {
//     let start = 0;
//     let maxLength = 0;
//     let startIndex = 0;
//     let seen = {};

//     for (let end = 0; end < str.length; end++) {
//         let char = str[end];

//         if (seen[char] >= start) {
//             start = seen[char] + 1;
//         }

//         seen[char] = end;

//         if (end - start + 1 > maxLength) {
//             maxLength = end - start + 1;
//             startIndex = start;
//         }
//     }
//     return str.substring(startIndex, startIndex + maxLength);
// }
// // Test cases
// console.log(longestUniqueSubstring("abcabcbb")); // abc
// console.log(longestUniqueSubstring("bbbbb"));    // b
// console.log(longestUniqueSubstring("pwwkew"));   // wke


// swapping numbers with third variable
let a = 1;
let b = 2;
console.log("Before swaping the value of a is: ", a);
console.log("Before sapping the value of b is: ", b);
let temp = a;
a = b;
b = temp;
console.log("After swaping the value of a is: ", a); //2
console.log("Afterswapping the value of b is: ", b); //1

// swapping numbers without third variable
a = a + b;
b = a - b;
a = a - b;
console.log("After swaping the value of a is: ", a); //2
console.log("After swapping the value of b is: ", b); //1

// Swapping Using Multiplication & Division
a = a * b;
b = a / b;
a = a / b;
console.log("After swaping the value of a is: ", a); //1
console.log("After swapping the value of b is: ", b); //2

// swapping ES6 Array Destructuring
[a,b] = [b,a]
console.log("After swaping the value of a is: ", a); //1
console.log("After swapping the value of b is: ", b); //2

// Swapping Using XOR Bitwise Operator 
a = a ^ b;
b = a ^ b;
a = a ^ b;
console.log("After swaping the value of a is: ", a); //1
console.log("After swapping the value of b is: ", b); //2


