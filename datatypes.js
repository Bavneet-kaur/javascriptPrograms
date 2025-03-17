console.log("I will be doing hardwork and try to manage my life problems");
// getting upper and lower limits of number data type
console.log("Maximum Value: ", Number.MAX_VALUE);
console.log("Minimum Value: ", Number.MIN_VALUE);
console.log("Minimum Safe Value: ", Number.MIN_SAFE_INTEGER);
console.log("Maximum Safe Value: ", Number.MAX_SAFE_INTEGER + 4);
// BigInt
var x = 989999899998999n;
var y = BigInt(9899998999989991111111111111111);
console.log(x + y);
x = BigInt(Number.MAX_SAFE_INTEGER)
var eq = 9007199254740992 === 9007199254740993;
console.log("BigIntNum: ", x + 5n);
console.log(eq);
// usage of operators
let n = 10;
console.log("The value of n is: ", n);
console.log("Value of n is: ", --n);
console.log("The value of n is: ", n);
console.log("Value of n is: ", n++);
console.log("The value of n is: ", n);