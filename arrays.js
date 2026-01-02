"use strict";

let fruits = ["apple", "banana", "chikko", "grapes"];
console.log(typeof fruits); /*--'object'--*/
// to detect arrays we use instanceof operator - solution01
console.log("solution - 01", fruits instanceof Array);
// to detect arrays we use Array.isArray operator - solution02
console.log("solution - 02", Array.isArray(fruits));
// using for loop to print the values of an array
let len = fruits.length;
for (let i = 0; i < len; i++) {
  console.log(i + 1 + " - " + fruits[i]);
}
// using for-of loop
for (let items of fruits) {
  console.log(items);
}
// accessing the values of the Array "fruits".
console.log(`I like ${fruits[0]}`);
console.log(`I love ${fruits[3]}`);
console.log("Length of fruits array:", fruits.length);

// dynamic acessing of values
console.log(`Let's have a ${fruits[fruits.length - 2]} milkshake!`);
// adding elements to the array
console.log("FRUITS: ", fruits);
fruits.push("cherry", "melon");
console.log("FRUITS: ", fruits);
console.log("again detecting array: ", Array.isArray(fruits));
console.log("new length of the new array:", fruits.length);
fruits[6] = "guava";
fruits[9] = "guava"; /*--this will 2 undefiened holes--*/
console.log("FRUITS: ", fruits);
console.log("new length :", fruits.length);
/*array methods*/
fruits.sort(); // sorting array
console.log("Sorted FRUITS: ", fruits);
fruits[10] = "lemon";
console.log(fruits);
/*ort() method sometimes returns incorrect result with numbers 
for that we use compare */
let fr = [1, 23, 54, 2, 15, 32, 100];
console.log(
  "sorted array of numbers: ",
  fr.sort(function (a, b) {
    return b - a;
  })
);
// converting arrays to string
var f = fruits.toString();
console.log(f);
let n = [12, 43, 11, 9, 89];
console.log(n);
console.log(n.pop());
console.log(n);
let sh = n.shift(); /*removes the first element and returns the values*/
console.log(sh, n);
let ush = n.unshift(56); /*radds the first element and returns the values*/
console.log(ush, n);
// using delete() array method
let num = [45, 12, 76, 34, 11, 90];
console.log(num);
console.log("Length of num: ", num.length);
let del = delete num[2];
console.log(num);
console.log(num[2]);
console.log(del);

//* using concat method
console.log("\n========== Array Concat ==========");
let b1 = ["lara", 23, 65, 12];
let b2 = [23, 45, 89];
let b3 = [9, 90, 99, 0, "Leo", "lemon"];
let b = b1.concat(b2, b3);
console.log(b);

//* Array Iterations Methods - map, reduce & filter
console.log("\n========== Array Iteration Methods==========");
let aa = arr.map((value, index, array) => {
  console.log(value, index, array);
  return value + index;
});
console.log("NewArray(index number added): ",aa);
let over18 = arr.filter(myFunction);
function myFunction(value,index,array){
    return value > 18;
}
console.log(over18);
// nested arrays
var user =[[1, 'fox'], [2,'leo'], [378]];
/*--access different values from nested arrays--*/
console.log(user[1][0] +" --> "+ user[0][1] +" --> "+ user[2] +" --> "+ user[3]);
// array of objects
var user =[
    {
        id: 1,
        name: "john"
    },
    {
        id: 2,
        name: "Mike"
    }
];
console.log(user);
console.log(user[1]);
console.log(user[1].name);
console.log(user[4]);
//!TypeError: Cannot read properties of undefined (reading 'name')
// console.log(user[5].name);
let total = nums.reduce((acc, val) => acc + val, 0);