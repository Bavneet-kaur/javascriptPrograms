'use strict';
// there are two ways of creating objects
// var sen = {
//     org: "Sential Design\u{2122}",
//     loc: "New York, USA",
//     empCount: 50,
//     islisted: false
// };
// // console.log(sen);
// delete sen.loc;
// sen.islisted = true;
// sen.city = "Tokyo";
// console.log(sen);
// var propName = 'empCount';
// console.log("Employee Count: ",sen[propName]);
let francos = {
    name: "Franco's Pizzeria",
    cuisine: ['Italian', 'Pizzeria'],
    rating: 4.5,
    address: '#35, 58th Street',
    city: city,
    description: 'An authentic pizzeria based on original recipes',
  };
  
  let baarbaar = {
    name: 'Baar Baar',
    cuisine: ['Indian', 'Fine Dining'],
    rating: 4.7,
    address: '13E 1st St',
    city: city,
    description: 'A fantastic Indian restaurant',
  };
  
console.log(francos.city.name = 'Manhattan');
// // creating objects using objectt constructor
// var note = new Object();
// note['Tokyo'] = 'Yen';
// note['yenNotes'] = 50;
// note['USA'] = 'US Dollar';
// console.log(
//     `The currency of ${sen.city} is ${note[sen.city]} and the number of Yen notes is ${note.yenNotes}`
//     );

//     // nested objects
//     var s = {
//         org: "Sential Design\u{2122}",
//         loc: {
//             city: "New York",
//             country: "USA"
//         },
//         empCount: 50,
//         islisted: false,
//     };
// console.log(s.loc.city +" , "+ s.loc.country);

// // pass by value 
// var fruit ="apple";
// var pie = fruit;
// pie = "chikoo";
// console.log(fruit + pie);

// var sd = {
//     org: "Sential Design\u{2122}",
//     loc: "USA",
//     empCount: 50,
//     islisted: false,
// };
// var lara = {
//     name: 'Lara Clarak',
//     age: 24,
//     comp: sd.org,
//     desi: "senior engg.",
//     address: sd.loc,
// };

// var lehry= {
//     name: 'Lehry Babu',
//     age: 22,
//     comp: sd.org,
//     desi: "junior engg.",
//     address: sd.loc,
// };

// lehry.address = "japan";

// console.log(lara);
// console.log(lehry);
//  this keyword

const person = {
    fname: 'Sarah Khan',
    age: 22,
    
};
const mem = {
    fname: 'Joe Nilsen',
    age: 25
};
const intro =  function(){
    return `Hi! I am ${this.fname}, I am ${this.age} years old.`;
}
// let introo = person.intro.bind(mem);
console.log(intro.call(mem));

let user = {
    id: 101,
    name: 'Michael Dormick',
    isAdmin: 'false',
  };
  b = 'boolean'
  console.log(typeof(b));
  console.log(typeof user.isAdmin === 'boolean');

  const USER = {
    name: 'John Mason',
    age: 35,
    profession: 'Character Animator',
  };
  
  USER.age = 38;
  
  console.log(USER.age);

  let city = {
    id: 1,
    name: 'New York',
  };