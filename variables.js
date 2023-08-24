let a = 54;
console.log(a);
a = "bawa";
console.log(a);
/* var is globally scoped -- this can lead to bugs*/
var b = "this";
var b = "means";
console.log(b);
{
    var b = "a change in the varibale b!";
    console.log(b);
}
/* let variables are block scoped*/
let c = "ccc";
{
    let c ="bbb";
}
// you can reassign the values
c = 34;
console.log(c);
/*const variables are used for constant variables not for constant values*/
const d = "dfg";
// d ="hgj"; --this will throw error
console.log(d);
/*const variables are also block scoped but they cannot be reasigned*/ 
{
    const d = "tyu";
    console.log(d);
}
console.log(d);
console.log("I will be doing hardwork and try to manage my life problems");
// getting upper and lower limits of number data type
console.log("Maximum Value: ",Number.MAX_VALUE);
console.log("Minimum Value: " ,Number.MIN_VALUE);
console.log("Minimum Safe Value: " ,Number.MIN_SAFE_INTEGER);
console.log("Maximum Safe Value: " ,Number.MAX_SAFE_INTEGER + 4);
// BigInt
var x = 989999899998999n;
var y = BigInt(9899998999989991111111111111111);
console.log(x + y);
x = BigInt(Number.MAX_SAFE_INTEGER)
console.log("BigIntNum: " ,x + 5n);
var eq = 9007199254740992 === 9007199254740993;
console.log(eq);