'use strict';
var txt = "Hi! This is me feeling boring because and restless." +
"learning new vocalbulary words and their pronunciation";
console.log(txt);
// string templates -- string interpolation
let firstName = "John";
let lastName = "Doe";
let text = `Welcome ${firstName}, ${lastName}!`;
// Template literals allow expressions in strings:
let price = 10;
let VAT = 0.25;
let total = `Total: ${(price * (1 + VAT)).toFixed(2)}`;

document.getElementById("demo").innerHTML = total;
console.log("Hi! This is me feeling boring");
// Unicode  code point escapes
var org = "Sentinel Design \u{1F642}"; /*smilely unicode*/
console.log(org);

var cart ="apples";
console.log(cart + '1kg');

/*var variable global scope
var us = 'WindowUser';
console.log(globalThis.hasOwnProperty('us'));
console.log(globalThis);*/

let product = "The 'Thomas Mackeral' Prize for the most popular \"Fish\"";
console.log(product);
 let n = 'Hello! I am Bavneet Kaur';
 console.log(n)
 console.log("The length of the the string 'n': ",n.length)
 console.log("Slicing of string 'n':", n.slice(6,19)) /*19 character i.e K will not be include*/
 console.log("Slicing of string 'n':", n.slice(6,)) /*from 6 to 24*/
 console.log("Slicing of string 'n':", n.slice(6)) /*from 6 to 24*/
 console.log("Replacing String Characters: ", n.replace("Hello","Hi"))  

//  using for loop to print the characters of the string
n = "Bawa"
let len = n.length
for(let i of n){
  console.log(i);
}
for(let i =1; i <len; i++){
  console.log(n)
}