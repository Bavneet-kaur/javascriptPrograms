'USE STRICT'
// Q1 - Create a variable of type string and try to add a number to it
let a = "My name is Bavneet kaur, I will complete my javascript by today!";
let b = 32 + 12;
let c = a + b;
console.log(c);
console.log("Hy! There I am Bavneet" + 32 + 12);
// Q2 - Use type of operator to find the datatype of the string In last question
console.log("Type of the 'c':", typeof(c));
// Q3 - Create a const object in javascript Can you change it to hold a 'number later'?
const d = {
    name: "Bawa",
    age: 23,
    lic: true
};
console.log(d);
// d = 32;   /*this will throw an error*/
// console.log(d)
// Q4 - Try to add a new key to the Const object in Problem 3 were you able to do it?
d['friend'] = 'amar';
console.log(d);
d['name'] = "loka";
console.log(d);
// Q5 - Write a Js program to create a word - meaning dictionary of 5 words.
const dict = {
    appreciate: 'value',
    lexically: 'position based dictionary',
    kernel: 'aplication between hardware layer and shell(CLI)',
    lemon: 'citrus yellow fruit',
    ear: 'part of the body'
};
console.log(dict);
// Q6 - Use logical operators to find whether the age of person lies between 10 and 20 ?
// install command: npm install prompt-sync
const prompt = require("prompt-sync")({sigint:true});
let age = prompt("What is your age?")
age = Number.parseInt(age)
if(age>10 && age<20){
    console.log("Your age lies between 10 and 20")
}
else{
    console.log("Your age doesnt lies between 10 and 20")
}
// Q7 - Demonstrate the use of switch case statements in JavaScript
let day = 'MONDAY';
switch (day) {
  case 'MONDAY':
    console.log('Sad Day...');
  case 'TUESDAY':
    console.log('Ok Ok Day..');
    break;
  case 'WEDNESDAY':
    console.log('Hump Day!');
    break;
  case 'THURSDAY':
    console.log('Now we are talkin!');
    break;
  case 'FRIDAY':
    console.log('TGIF');
  default: {
    console.log('Elvis has left the building...');
  }
}
// Q8 - Write a Java Script program to find whether number is Divisible by 2 and 3.
n = prompt("Enter your fav number: "); 
n = Number.parseInt(n);
if(n%2==0 && n%3==0){
    console.log("Yes the number "+ n + " is divisible by 2 and 3");
}
else{
    console.log("No! the number " + n + " is not divisible by 2 and 3");
}
// Q9 - Print " You can Drive" or "You Cannot Drive" based age being greater than 18 using ternary operator
let aa = (age >= 18)? "You can drive":"You cannot drive!";
// console.log(aa);
// // Q10- Write a program to print the marks of a student in an object using for Joop! 
// // obj = {harry 98, rohan: 70, aakash: 73} 
// let mark = {harry: 98, rohan: 70, aakash: 73};
// let lobj = Object.keys(mark).length;
// /*Object.keys(mark)-- print all the key values of the object;
// Object.keys(mark).length -- print yhe length of the object;*/ 
// for(let i=0;i<lobj;i++){
//   /*Object.keys(mark)[i] --print the keys of the object in the loop;
//   mark[Object.keys(mark)[i]] --print values w.r.t their keys(array function)*/
//   console.log('Marks of '+Object.keys(mark)[i]+ ' are '+ mark[Object.keys(mark)[i]])
// }
// // Q11 - Write the program in Q10 using for in loop
// console.log("---------------");
// for(let items  in mark){
//   console.log(items + " - " + mark[items]);
// }
// // Q12- Write a program to print try again until the user enters the correct number
let cn = 5;
let num;
while(num != cn){
  num = prompt("Enter number of your choice - ");
  num = parseInt(num); 
  if(cn == num){
    console.log("Correct Number..")
  }
  else{
    console.log("--Try again--")
  }
}
console.log("---------------");
// // Q13- Write a function to find mean of 5 numbers.
function nMean(n1,n2,n3,n4,n5){
  return (n1+n2+n3+n4+n5)/5;
}
// let m = nMean(1,32,43,12,65);
// console.log("The mean of five numbers = ", m);
// // Q14 - What will the following print in Java Script! Console.log ( "har\" ".length)
console.log("---------------");
console.log("har\'".length)
// // Q15 - Explore the includes, starts with I ends with functions of a string
console.log("---------------");
let txt = "Hello people of Universe";
console.log(txt);
console.log("Does the given string includes the charaters? ",txt.includes("people of"))
console.log("Does the given string includes the charaters? ",txt.includes("people"))
console.log("Does the given string includes the charaters? ",txt.includes("people",7))
const sentence = 'The quick brown fox jumps over the lazy dog. ';
const word = 'fox2';
console.log(sentence. includes (word))
console.log(`The word "${word}" ${sentence.includes(word) ? 'is' : 'is not'} in the sentence`);
// // Q16 - Write a program to convert a string to lowercase
console.log("---------------");
let str = 'Please give me Rs 1000';
console.log(str.toLowerCase())
// // Q17 - Extract the amount out of this string: 'Please give me Rs1000'
console.log("---------------");
console.log(str);
console.log("Extracting amt from the given string: ",str.slice(15))
// // Q18 - Try to change 4th character of a given string. 'Were you able to do it?'
str = "Were you able to do it?";
console.log("Strings are immutable they cannot be changed but the characters can be replacable")
//Q19-Create an array of numbers and take input from the user to add numbers to this array
let size = prompt("Enter the size of the array: ")
size = Number.parseInt(size);
let arr = [];
let len = arr.length;
let s = len === size;
do{
  for(let i =1; i<s; i++){
    let ins = prompt("Enter a number: ");
    ins =Number.parseInt(ins);
    arr.push(ins);
    console.log(i);
  };
}
while(len>size){
  // console.log(i);
}
//Q20-Keep ' adding numbers to the array until it reaches O is added to the array
let nums = [23,65,12,76];
let i;
do{
  i = prompt("Enter a number: ");
  i =Number.parseInt(i);
  nums.push(i);
}
while(i != 0);
console.log(nums);
//Q21-filter for numbers divrisible by 10 from a given array
nums = [23, 50,54,90,60];
const n = nums.filter(num);
 function num(value,index,array){
  return value %10 === 0;
 }
 console.log("The number divisible by 10 from array: ",n);
//Q22-Create an array of square of given numbers.
let sq =[12,13,15];
const l = sq.map(sqfunction);
function sqfunction(value,index,array){
  return value * value;
}
console.log("Given array: ",sq);
console.log("Squared array: ",l);
/*Q23-Use reduce to calculate factorial of a given number from an an array of first n 
naturalnumbers. In being the number whose factorial needs to be calculated)'*/
let fac = [1,2,3, 4]
let f = fac.reduce((x1, x2) => {
  return x1 * x2
})
console.log("The factorial of the given array is: ",f)
/* Q24-Write a program program using prompt function to take input of age as a value 
from the user and use alert to tell him if he can drive!*/
// let user = prompt("Enter your age: ");
// user = Number.parseInt(user);
// let cardrive = (user)=>{
//   return user>=18 ? true:false;
// }
// if(candrive(user)){
//   alert("Yes you can drive");
// }
// else{
//   alert("You can't drive");
// }
// Q25 - In Q24 use confirm to ask the user if he wants to see the prompt again

/*Q26 - In the previous question, use console.error to lag 
the error if the age entered is negative*/
/*Q27 - Write a program to change the URL to google.com (Redirection) 
if user enters a number greater than 4*/
/*Q28 Change the background of the page to yellow, red or any other color based on user
input through prompt*/