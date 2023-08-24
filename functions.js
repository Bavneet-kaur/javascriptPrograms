var greeting = 'Hello!';

function greetMe(name) {
  var greeting = 'Hey there!';
  return greeting + ' ' + name;
}
console.log(greeting);

let recursion = function (counter = 0) {
  if (counter < 10) {
    console.log(`The value of counter is ${counter}`);
    return recursion(counter + 1);
  }
};
const foodItem = {
  name: 'Pizza',
  calories: 2035,
  source: 'Franco Costa Pizzeria',
};
recursion(5);
foodItem.calAdvice = function () {
  return this.calories > 500 ? 'Too High :(' : 'Good Enough!';
};

console.log(foodItem.calAdvice());