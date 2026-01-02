//* '+' triggers string conversion and [].toString() → "" and resultant will be "" + "" → ""
console.log("The value of '[] + []': ", [] + []);

//* [] → "" and {} → "[object Object]" and Result → string concatenation
console.log("The value of '[] + {}': ", [] + {});
console.log("The value of '{} + []': ", {} + []);
console.log("The value of '+[]': ", +  []); //0

console.log("The value of 'true + false': ", true + false);

console.log("The value of ''5' - - '2'': ","5" - - "2") //* Unary - converts string to number
console.log("The value of ''5' - '2'': ","5" - "2") //* Unary - converts string to number

console.log("The value of 'null + 1': ", null + 1);

console.log("The value of 'undefined + 1': ", undefined + 1);

//* ![] >> false, [] == false and fasle = 0; [] >> "" >> 0, so 0 == 0
console.log("The value of '[] == ![]:", [] == ![]);

//* == converts the type first and then compares the value, technically it compares 0 == 0
console.log("The value of '0 == '0'': ", 0 == '0');

//* [] == false and the false means 0, so 0 == 0 which true
console.log("The value of '0 == []': ", 0 == []);

console.log("The value of 'false == 'false'': ", false == 'false');
console.log("The value of '0 == false': ", 0 == false)

console.log("The value of 'NaN == NaN': ", NaN == NaN); //* beacuse NaN is never equal to anything 

//* "" is always equal to 0 
console.log (`The value of '"" == false': `, "" == false);
console.log (`The value of '"" == 0': `, "" == 0);

console.log("The value of '+true': ", +true);
console.log("The value of '+false': ", +false);

console.log("The value of '\\t\\n == 0': ", "\t\n" == 0);

//* Reference comparison -- different memory locations will always return false
console.log("The value of '{} == {}': ", {} == {});
console.log("The value of '[] == []': ", [] == []);