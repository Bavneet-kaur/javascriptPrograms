'USE STRICT'
//* practice set - 01
//todo Q1 - Create a variable of type string and try to add a number to it
let a = "My name is Bavneet kaur, I will complete my javascript by today!";
let b = 32 + 12;
let c = a + b;
console.log(c); //here already sum has been made '(a + (32 + 12))'
console.log("Hy! There I am Bavneet" + 32 + 12);

//todo Q2 - Use type of operator to find the datatype of the string In last question
console.log("Type of the 'c':", typeof (c));

//todo Q3 - Create a const object in javascript Can you change it to hold a 'number later'?
const d = {
    name: "Bawa",
    age: 23,
    lic: true
};
console.log(d);
//! d = 32;   /*this will throw an error*/

//todo Q4 - Try to add a new key to the Const object in Problem 3 were you able to do it?
d['friend'] = 'amar';
console.log(d);
d['name'] = "loka";
console.log(d);

//todo Q5 - Write a Js program to create a word - meaning dictionary of 5 words.
const dict = {
    appreciate: 'value',
    lexically: 'position based dictionary',
    kernel: 'aplication between hardware layer and shell(CLI)',
    lemon: 'citrus yellow fruit',
    ear: 'part of the body'
};

//todo Q6 - What will be the output of the following?
a = 12;
console.log("++a", ++a);
console.log("a++", a++);
console.log("--a", --a);
console.log("a--", a--);
console.log("a", a);
console.log("a--", a--);

//todo Q7 - Write a code to calculate the BMI
function bmi(weight, height) {
    return weight / (height * height);
}
console.log("The Calculate BMI of the body is: ", bmi(50, 5.6));
console.log("The Calculate BMI of the body is: ", bmi(50, 5.6).toFixed(2)); //toFixed(2) will give you 2 decimal vvalues 
console.log("The Calculate BMI of the body is: ", Math.round(bmi(50, 5.6)));

//todo Q8 - Write a code to crete the discount calculator using the HOF
function discountCalculator(sp, discountPer) {
    return function discountedPrice() {
        let discount = (sp * discountPer) / 100;
        let cp = sp - discount;
        return {
            finalPrice: cp,
            discountAmount: discount
        };
    }
}
const item1 = discountCalculator(2000, 25);
console.log("The amount to be paid: ", item1());
const result = item1();
console.log(`Final Price: ₹${result.finalPrice}, You saved: ₹${result.discountAmount}`);

//todo Q9 - Build the counter using the closure function
function Counter() {
    let count = 0;
    return function plus() {
        count += 1;
        return console.log("The value of counter: ", count)
    }
}
const counter = Counter();
counter(); //1
counter(); //2
counter(); //3
counter(); //4
const dCount = Counter(); //1

//todo Q10 - Create the  pure function to transform the value
function double(val) {
    return (val * 2)
}
console.log("Doubled Value: ",double(10));
console.log("Doubled Value: ",double(1));
console.log("Doubled Value: ",double(100));

//todo Q11 - Write a function toBoolean(value) that returns true or false without using Boolean() directly.
 function toBoolean(value){
    return !!value;
 }
 console.log("The value: ",toBoolean(0))
 console.log("The value: ",toBoolean(1))
 console.log("The value: ",toBoolean(true))

//todo Q12 - Given a1 = "5" and a2 = 2, show all results of +, -, *, /, ==, === and explain each.
let a1 = "5";
let a2 = 2;
console.log("The value of 'a1 + a2': ", a1 + a2); //concatenation 
console.log("The value of 'a1 - a2': ", a1 - a2); //coercion '5'
console.log("The value of 'a1 * a2': ", a1 * a2); //coercion
console.log("The value of 'a1 / a2': ", a1 / a2); //coercion
console.log("The value of 'a1 == a2': ", a1 ==  a2);
console.log("The value of 'a1 === a2': ", a1 === a2);

//todo Q13 - Write isEmptyString(str) that returns true when str is null, undefined, empty, or only spaces.
function isEmptyString(str) {
  if (str === null) return true;          // null or undefined
  if (typeof str !== "string") return false;
  return str.trim() === "";
}
console.log(isEmptyString());
console.log(isEmptyString(""));
console.log(isEmptyString("lalal"));
console.log(isEmptyString(0));

//todo Q14 - Implement safeDivide(a, b) that returns "Infinity" string when division by zero happens.
function safeDivide(a,b){
    if( b === 0 ) return "Infinity";
    return a / b;
}
console.log("The value of '10/2': ",safeDivide(10,2));
console.log("The value of '10/3': ",safeDivide(10,3));
console.log("The value of '10/0': ",safeDivide(10,0));

//todo Q15 - Write a snippet that demonstrates the difference between var, let, and const inside a block.
function safeLog(label, fn) {
    try {
        console.log(label, fn());
    } catch (e) {
        console.error(label, e.message);
    }
}

{
    let v1 = 1;
    const v2 = 2;
    var v3 = 3;
}

safeLog("v1:", () => v1);
safeLog("v2:", () => v2);
safeLog("v3:", () => v3);

//todo Q16 - Implement a small script that logs whether a value is primitive or reference.
function isPrimitive(value){
    return value !== Object(value)
}
console.log(isPrimitive(10));       
console.log(isPrimitive("hello"));   
console.log(isPrimitive(null));     
console.log(isPrimitive({}));        
console.log(isPrimitive([]));  

//todo Q17 - Given value, log its type in a more precise way than typeof, including arrays and null
function getExactType(value) {
  if (value === null) return "null";
  if (Array.isArray(value)) return "array";
  return typeof value;
}
console.log("TypeOf value - 'null': ",getExactType(null));
console.log("TypeOf value - '[]': ",getExactType([]));
console.log("TypeOf value - '{}': ",getExactType({}));
console.log("TypeOf value - 'hello': ",getExactType('hello'));
console.log("TypeOf value - '10': ",getExactType(10));
console.log("TypeOf value - '9n': ",getExactType(9n));
console.log("TypeOf value - '() => {}': ",getExactType(() => {}));

//todo Q18 - Implement grading logic using if/else and then convert it to switch.
function getGrade(val){
    if(val >= 90) return "Grade A";
    else if(val >= 70) return "Grade B";
    else if(val >= 50) return "Grade C";
    else if(val >= 30) return "Grade D";
    else return "Grade F";
}
console.log("The grade: ",getGrade(87));
console.log("The grade: ",getGrade(7));
console.log("The grade: ",getGrade(90));

//convert the above situation into switch case 
function getGradeSwitch(val){
    switch(true){
        case val >= 90:
            return "Grade A";
        case val >= 70:
            return "Grade B";
        case val >= 50:
            return "Grade C";
        case val >= 30:
            return "Grade D";
        default:
            return "Grade F"
    }
}
console.log("The grade: ",getGradeSwitch(92));
console.log("The grade: ",getGradeSwitch(30));
console.log("The grade: ",getGradeSwitch(9));

//todo Q19 - Write a function maxOfThree(a,b,c) using nested ternary operators.
function maxOfThree(a,b,c){
    return a > b
    ? (a > c ? a : c)
    : (b > c ? b : c)
}
console.log("Maximum Value: ",maxOfThree(23,89,90));
console.log("Maximum Value: ",maxOfThree(123,99,9));

//todo Q20 - Given an object config, return a default value when config.port is null or undefined using ??
function getPort(config) {
    return config.port ?? 3000;
}
console.log("The port number is:", getPort({ port: 8080 }));
console.log("The port number is:", getPort({ port: 0 }));
console.log("The port number is:", getPort({}));

//todo Q21 - Rewrite a verbose if chain to use short‑circuiting with && / ||.
// if (user && user.isLoggedIn) {
//   showDashboard();
// } else {
//   showLogin();
// }
// user && user.isLoggedIn && showDashboard();
// (!user || !user.isLoggedIn) && showLogin();

//todo Q22 - Given user object that might be null, safely get user.address.city without throwing (with optional chaining).
function getCity(user) {
  return user?.address?.city;
}
console.log("The city:",getCity(null)); 
console.log("The city: ",getCity({ address: { city: "Delhi" } })); 
// console.log(dict);
// // Q6 - Use logical operators to find whether the age of person lies between 10 and 20 ?
// // install command: npm install prompt-sync
// const prompt = require("prompt-sync")({sigint:true});
// let age = prompt("What is your age?")
// age = Number.parseInt(age)
// if(age>10 && age<20){
//     console.log("Your age lies between 10 and 20")
// }
// else{
//     console.log("Your age doesnt lies between 10 and 20")
// }
// // Q7 - Demonstrate the use of switch case statements in JavaScript
// let day = 'MONDAY';
// switch (day) {
//   case 'MONDAY':
//     console.log('Sad Day...');
//   case 'TUESDAY':
//     console.log('Ok Ok Day..');
//     break;
//   case 'WEDNESDAY':
//     console.log('Hump Day!');
//     break;
//   case 'THURSDAY':
//     console.log('Now we are talkin!');
//     break;
//   case 'FRIDAY':
//     console.log('TGIF');
//   default: {
//     console.log('Elvis has left the building...');
//   }
// }
// // Q8 - Write a Java Script program to find whether number is Divisible by 2 and 3.
// n = prompt("Enter your fav number: ");
// n = Number.parseInt(n);
// if(n%2==0 && n%3==0){
//     console.log("Yes the number "+ n + " is divisible by 2 and 3");
// }
// else{
//     console.log("No! the number " + n + " is not divisible by 2 and 3");
// }
// // Q9 - Print " You can Drive" or "You Cannot Drive" based age being greater than 18 using ternary operator
// let aa = (age >= 18)? "You can drive":"You cannot drive!";
// // console.log(aa);
// // // Q10- Write a program to print the marks of a student in an object using for Joop!
// // // obj = {harry 98, rohan: 70, aakash: 73}
// // let mark = {harry: 98, rohan: 70, aakash: 73};
// // let lobj = Object.keys(mark).length;
// // /*Object.keys(mark)-- print all the key values of the object;
// // Object.keys(mark).length -- print yhe length of the object;*/
// // for(let i=0;i<lobj;i++){
// //   /*Object.keys(mark)[i] --print the keys of the object in the loop;
// //   mark[Object.keys(mark)[i]] --print values w.r.t their keys(array function)*/
// //   console.log('Marks of '+Object.keys(mark)[i]+ ' are '+ mark[Object.keys(mark)[i]])
// // }
// // // Q11 - Write the program in Q10 using for in loop
// // console.log("---------------");
// // for(let items  in mark){
// //   console.log(items + " - " + mark[items]);
// // }
// // // Q12- Write a program to print try again until the user enters the correct number
// let cn = 5;
// let num;
// while(num != cn){
//   num = prompt("Enter number of your choice - ");
//   num = parseInt(num);
//   if(cn == num){
//     console.log("Correct Number..")
//   }
//   else{
//     console.log("--Try again--")
//   }
// }
// console.log("---------------");
// // // Q13- Write a function to find mean of 5 numbers.
// function nMean(n1,n2,n3,n4,n5){
//   return (n1+n2+n3+n4+n5)/5;
// }
// // let m = nMean(1,32,43,12,65);
// // console.log("The mean of five numbers = ", m);
// // // Q14 - What will the following print in Java Script! Console.log ( "har\" ".length)
// console.log("---------------");
// console.log("har\'".length)
// // // Q15 - Explore the includes, starts with I ends with functions of a string
// console.log("---------------");
// let txt = "Hello people of Universe";
// console.log(txt);
// console.log("Does the given string includes the charaters? ",txt.includes("people of"))
// console.log("Does the given string includes the charaters? ",txt.includes("people"))
// console.log("Does the given string includes the charaters? ",txt.includes("people",7))
// const sentence = 'The quick brown fox jumps over the lazy dog. ';
// const word = 'fox2';
// console.log(sentence. includes (word))
// console.log(`The word "${word}" ${sentence.includes(word) ? 'is' : 'is not'} in the sentence`);
// // // Q16 - Write a program to convert a string to lowercase
// console.log("---------------");
// let str = 'Please give me Rs 1000';
// console.log(str.toLowerCase())
// // // Q17 - Extract the amount out of this string: 'Please give me Rs1000'
// console.log("---------------");
// console.log(str);
// console.log("Extracting amt from the given string: ",str.slice(15))
// // // Q18 - Try to change 4th character of a given string. 'Were you able to do it?'
// str = "Were you able to do it?";
// console.log("Strings are immutable they cannot be changed but the characters can be replacable")
// //Q19-Create an array of numbers and take input from the user to add numbers to this array
// let size = prompt("Enter the size of the array: ")
// size = Number.parseInt(size);
// let arr = [];
// let len = arr.length;
// let s = len === size;
// do{
//   for(let i =1; i<s; i++){
//     let ins = prompt("Enter a number: ");
//     ins =Number.parseInt(ins);
//     arr.push(ins);
//     console.log(i);
//   };
// }
// while(len>size){
//   // console.log(i);
// }
// //Q20-Keep ' adding numbers to the array until it reaches O is added to the array
// let nums = [23,65,12,76];
// let i;
// do{
//   i = prompt("Enter a number: ");
//   i =Number.parseInt(i);
//   nums.push(i);
// }
// while(i != 0);
// console.log(nums);
// //Q21-filter for numbers divrisible by 10 from a given array
// nums = [23, 50,54,90,60];
// const n = nums.filter(num);
//  function num(value,index,array){
//   return value %10 === 0;
//  }
//  console.log("The number divisible by 10 from array: ",n);
// //Q22-Create an array of square of given numbers.
// let sq =[12,13,15];
// const l = sq.map(sqfunction);
// function sqfunction(value,index,array){
//   return value * value;
// }
// console.log("Given array: ",sq);
// console.log("Squared array: ",l);
// /*Q23-Use reduce to calculate factorial of a given number from an an array of first n
// naturalnumbers. In being the number whose factorial needs to be calculated)'*/
// let fac = [1,2,3, 4]
// let f = fac.reduce((x1, x2) => {
//   return x1 * x2
// })
// console.log("The factorial of the given array is: ",f)
// /* Q24-Write a program program using prompt function to take input of age as a value
// from the user and use alert to tell him if he can drive!*/
// // let user = prompt("Enter your age: ");
// // user = Number.parseInt(user);
// // let cardrive = (user)=>{
// //   return user>=18 ? true:false;
// // }
// // if(candrive(user)){
// //   alert("Yes you can drive");
// // }
// // else{
// //   alert("You can't drive");
// // }
// // Q25 - In Q24 use confirm to ask the user if he wants to see the prompt again

// /*Q26 - In the previous question, use console.error to lag
// the error if the age entered is negative*/
// /*Q27 - Write a program to change the URL to google.com (Redirection)
// if user enters a number greater than 4*/
// /*Q28 Change the background of the page to yellow, red or any other color based on user
// input through prompt*/