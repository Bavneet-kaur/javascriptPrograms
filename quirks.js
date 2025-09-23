//* Quirks - unexpected or suprising behaviour

console.log("=== JavaScript Quirks Demonstration ===");

/**
 * 1. NaN is not equal to itself
 */
console.log("Type of 'NaN': ",typeof(NaN));
console.log("NaN === NaN ?", NaN === NaN); // false
console.log("Use isNaN(NaN):", isNaN(NaN)); // true

/**
 * 2. typeof null is "object"
 */
console.log("typeof null:", typeof null); // "object"

/**
 * 3. Array comparison
 */
console.log("[] == [] ?", [] == []);   // false (different references)
// console.log("[] === [] ?", [] === []); // false

/**
 * 4. Type coercion in loose equality
 */
console.log("0 == '0' ?", 0 == '0');   // true
console.log("0 == [] ?", 0 == []);     // true
console.log("0 == ' ' ?", 0 == ' ');   // true
console.log("false == '0' ?", false == '0'); // true

/**
 * 5. Adding arrays or objects
 */
console.log("[] + []:", [] + []); // "" (empty string)
console.log("{} + []:", {} + []); // 0  (because {} is treated as block, [] → "")
console.log("[] + {}:", [] + {}); // "[object Object]"
console.log("{} + {}:", {} + {}); // NaN

/**
 * 6. Floating-point precision issue
 */
console.log("0.1 + 0.2:", 0.1 + 0.2); // 0.30000000000000004

/**
 * 7. parseInt with leading 0
 */
console.log("parseInt('00088'):", parseInt("00088")); // 8 (modern JS: decimal)
console.log("parseInt('010'):", parseInt("010")); // 10 (used to be octal in old JS)

/**
 * 8. Implicit coercion in + and -
 */
console.log("'5' + 1:", "5" + 1); // "51" (string concatenation)
console.log("'5' - 1:", "5" - 1); // 4   (string → number)

/**
 * 9. Comparison quirks
 */
console.log("null == undefined ?", null == undefined); // true
console.log("null === undefined ?", null === undefined); // false
console.log("[] == ![] ?", [] == ![]); // true

/**
 * 10. Truthy and falsy surprises
 */
console.log("Boolean('false'):", Boolean("false")); // true (non-empty string)
console.log("Boolean([]):", Boolean([])); // true (empty array is truthy)
console.log("Boolean({}):", Boolean({})); // true (empty object is truthy)
console.log("Boolean(''):", Boolean("")); // false
console.log("Boolean(0):", Boolean(0));   // false

/**
 * 11. Automatic semicolon insertion
 */
function tricky() {
  return 
  {
    value: 42
  }
}
console.log("tricky() returns:", tricky()); // undefined (semicolon inserted after return)

/**
 * 12. with keyword (bad practice)
 */
with (Math) {
  console.log("sin(PI/2):", sin(PI / 2)); // 1
}

/**
 * 13. Array holes
 */
let arr = [1, , 3];
console.log("arr length:", arr.length); // 3
console.log("arr[1]:", arr[1]); // undefined
console.log("arr has index 1?", arr.hasOwnProperty(1)); // false

/**
 * 14. typeof vs instanceof
 */
console.log("typeof []:", typeof []); // "object"
console.log("[] instanceof Array:", [] instanceof Array); // true
console.log("typeof function:", typeof function(){}); // "function"

/**
 * 15. Arguments object
 */
function demoArgs(a, b) {
  arguments[0] = 99;
  return a; // reflects changes
}
console.log("demoArgs(10, 20):", demoArgs(10, 20)); // 99

console.log("=== End of Quirks ===");
// 