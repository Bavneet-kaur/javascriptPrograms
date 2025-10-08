//*An Array is an object type designed for storing data collections.
/**Key characteristics of JavaScript arrays are:
1. Elements: An array is a list of values, known as elements.
2. Ordered: Array elements are ordered based on their index.
3. Zero indexed: The first element is at index 0, the second at index 1, and so on.
4. Dynamic size: Arrays can grow or shrink as elements are added or removed.
5. Heterogeneous: Arrays can store elements of different data types (numbers, strings, objects and other arrays). 
*/

//There are two syntaxes for creating an empty array:
/** 
1. let arr = new Array();
2. let arr = [];
*/
console.log("========Declarations of Array========")
let fruits = ["apple", "banana", "chikko", "grapes"];
console.log("type of the array: ",typeof fruits); /*--'object'--*/
// to detect arrays we use instanceof operator - solution01
console.log("solution - 01", fruits instanceof Array);
// to detect arrays we use Array.isArray operator - solution02
console.log("solution - 02", Array.isArray(fruits));
console.log("The length of array: ",fruits.length);
console.log("==========Traversing Arrays==============")
//Array elements are numbered, starting with zero. We can get an element by its number in square brackets:
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
fruits[2] = "pear"
//we can replace the elements of the array using their index
console.log(fruits[2]);
console.log("print the array: ",fruits);
fruits[4] = "lichi" //add the new element
console.log("print the array: ",fruits);

//if any any name is present after '.' then it is called method like '.at(), .pop()'
//* getting last element of the array
console.log("======== Array .at() Method Example ========");
// Traditional way — using length property, fruits.length gives total number of items So, the last element = fruits[fruits.length - 1]
console.log("Last fruit (using length):", fruits[fruits.length - 1]); 
// Modern way — using .at() method, .at(-1) means: take 1 step back from the end of the array
console.log("Last fruit (using .at()):", fruits.at(-1)); 
// You can also use positive indexes like .at(0), .at(1), etc.
console.log("First fruit (using .at(3)):", fruits.at(3)); 
// And if you go beyond the array range, it safely returns undefined
console.log("Out of range (using .at(5)):", fruits.at(5)); // undefined
//Summary: arr.at(i) works like arr[i] for positive i. For negative i, it counts from the end of the array.

console.log("========= Array Methods: push, pop, shift, unshift =========");
//* Queues and Stacks Concept
// Queue (FIFO - First In, First Out): Add at end, remove from beginning.
// Stack (LIFO - Last In, First Out): Add and remove from end.

//  Using pop() — removes the last element
console.log("Before pop() the length of array: ",fruits.length);
let lastFruit = fruits.pop();
console.log("Removed using pop():", lastFruit);
console.log("After pop():", fruits); 
console.log("After pop() the length of array: ",fruits.length);
//  Using push() — adds elements at the end
fruits.push("Sitaphal"); 
console.log("After push('Sitaphal'):", fruits); 
// You can also add multiple elements -- this will add the elements randomly
fruits.push("Anar", "Papaya");
console.log("After multiple push:", fruits); 
//  Using shift() — removes the first element
let firstFruit = fruits.shift(); 
console.log("Removed using shift():", firstFruit);
console.log("After shift():", fruits);
//  Using unshift() — adds elements at the beginning
fruits.unshift("Apple"); // adds "Apple" at the beginning
console.log("After unshift('Apple'):", fruits);
// You can also add multiple elements
fruits.unshift("Pineapple", "Lemon");
console.log("After multiple unshift:", fruits); 

// using for loop to print the values of an array
// let len = fruits.length;
// for (let i = 0; i < len; i++) {
//   console.log(i + 1 + " - " + fruits[i]);
// }

// // using for-of loop
// for (let items of fruits) {
//   console.log(items);
// }
// // accessing the values of the Array "fruits".
// console.log(`I like ${fruits[0]}`);
// console.log(`I love ${fruits[3]}`);
// console.log("Length of fruits array:", fruits.length);

// // dynamic acessing of values
// console.log(`Let's have a ${fruits[fruits.length - 2]} milkshake!`);
// // adding elements to the array
// console.log("FRUITS: ", fruits);
// fruits.push("cherry", "melon");
// console.log("FRUITS: ", fruits);
// console.log("again detecting array: ", Array.isArray(fruits));
// console.log("new length of the new array:", fruits.length);
// fruits[6] = "guava";
// fruits[9] = "guava"; /*--this will 2 undefiened holes--*/
// console.log("FRUITS: ", fruits);
// console.log("new length :", fruits.length);
// /*array methods*/
// fruits.sort(); // sorting array
// console.log("Sorted FRUITS: ", fruits);
// fruits[10] = "lemon";
// console.log(fruits);
// /*sort() method sometimes returns incorrect result with numbers 
// for that we use compare */
// let fr = [1, 23, 54, 2, 15, 32, 100];
// console.log(
//   "sorted array of numbers: ",
//   fr.sort(function (a, b) {
//     return b - a;
//   })
// );
// // converting arrays to string
// var f = fruits.toString();
// console.log(f);
// let n = [12, 43, 11, 9, 89];
// console.log(n);
// console.log(n.pop());
// console.log(n);
// let sh = n.shift(); /*removes the first element and returns the values*/
// console.log(sh, n);
// let ush = n.unshift(56); /*radds the first element and returns the values*/
// console.log(ush, n);
// // using delete() array method
// let num = [45, 12, 76, 34, 11, 90];
// console.log(num);
// console.log("Length of num: ", num.length);
// let del = delete num[2];
// console.log(num);
// console.log(num[2]);
// console.log(del);
// // using concat method
// let a1 = ["lara", 23, 65, 12];
// let a2 = [23, 45, 89];
// let a3 = [9, 90, 99, 0, "Leo", "lemon"];
// let a = a1.concat(a2, a3);
// console.log(a);
// // for-in loop within array(not recommended because array works with indexes)
// let numb = [32, 84, 76, 98, 10];
// for (let i of numb) {
//   console.log(numb);
// }
// let arr = [45, 23, 21,12,9,90];
// // Array map method
// let aa = arr.map((value, index, array) => {
//   console.log(value, index, array);
//   return value + index;
// });
// console.log("NewArray(index number added): ",aa);
// // filter function/method
// let over18 = arr.filter(myFunction);
// function myFunction(value,index,array){
//     return value > 18;
// }
// console.log(over18);
// // nested arrays
// var user =[[1, 'fox'], [2,'leo'], [378]];
// /*--access different values from nested arrays--*/
// console.log(user[1][0] +" --> "+ user[0][1] +" --> "+ user[2] +" --> "+ user[3]);
// // array of objects
// var user =[
//     {
//         id: 1,
//         name: "john"
//     },
//     {
//         id: 2,
//         name: "Mike"
//     }
// ];
// console.log(user);
// console.log(user[1]);
// console.log(user[1].name);
// console.log(user[4]);
// /*TypeError: Cannot read properties of undefined (reading 'name')*/
// // console.log(user[5].name);

// // copying/cloning array
// var admin = user;
// admin[1] = {
//     id: 2,
//     fname: "mickey",
//     lname: "singh"
// // };
// console.log("user_1: ", user[1]);
// console.log("user_1: ", user[1].name);
// console.log(user);
// array methods
// const sensorData =[
// {
//     id: 2,
//     date: '22-DEC-2021',
//     maxTemp: 31,
//     minTemp: 19,
// },
// {
//     id: 3,
//     date: '24-DEC-2021',
//     maxTemp: 32,
//     minTemp: 19.5,
// },
// {
//     id: 4,
//     date: '26-DEC-2021',
//     maxTemp: 30,
//     minTemp: 18.5,
// }];
// console.log("Sensor data -- mini. and maxi. temp with respect to dates");
// for (const data of sensorData){
//     console.log(`${data.date} | Max: ${data.maxTemp}, Min: ${data.minTemp}`);
// }
// console.log("---------------------------Reversed Array------------------------");
// for (const data of sensorData.reverse()){
//     console.log(`${data.date} | Max: ${data.maxTemp}, Min: ${data.minTemp}`);
// }
// // converting strings to array and back
// const str ='House No. 98, Philip Street, Mangrove Drive, Timberville - 800123';
// console.log(str.split(','));
// console.log(str.split(''));
// // working with csv data
// const users = `id, first_name, last_name, email, gender
// 1, Brigg, Kauscher, bkauscher0@nsw.gov.au, Male
// 2, Saudra, Madner, smadner1@mac.com, Female
// 3, Willy, Birchwood, wbirchwood2@typepad.com, Female
// 4, Jaime, Abethell, jabethell3@amazonaws.com, Male
// 5, Kristofer, Gunton, kgunton4@globo.com, Male`;
// const csvToArray = (csv) => {
//     let output = [];
//     for (const row of csv.split('\n')) {
//     // output.push(row); /* this will only convert strings to array
//     output.push(row.split(', ')); /*this will create different array entities*/
//     }
//     return output;
// };
// console.log(csvToArray (users));
// console.table(csvToArray (users)); /*tabular form*/

// // converting arrays to object using forEach iteration method
// const convertToObj = (arr) => {
//     let output = [];
//     arr.forEach((elem, index) => {
//     // Skip index 0
//      if(index !== 0) {
//         let obj = {};
//         elem.forEach((elem, index) => {
//             obj[arr[0] [index]] = elem;
//         });
//     output.push(obj);
//     }
//     });
//     return output;
// };

// let csvToObj = convertToObj(csvToArray(users));
// console.table(csvToObj);
