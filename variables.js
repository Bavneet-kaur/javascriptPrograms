/*variables(containers) are used to store data, 
javascript variables can be declared in 4 ways:
>>>automatically: x=6; y=9; z=x+y;
>>>using var
>>>using let
>>>using const
*/

/**
 * & Always declare variables
 * ? var keyword was used from 1995 to 2015
 * ? var - globally scoped while const&let - blocked scoped
 * ? var can be updated & re-declared within it's scope
 * ? only use var for the support of old browser or project
 * & Before ES6 (2015), JS did not have Block Scope.JS had Global Scope and Function Scope.
 * & ES6 introduced the two new JS keywords: let and const.These two keywords provided Block Scope in JS:
 * ^ Variables declared with let have Block Scope
 * ^ Variables declared with let must be Declared before use
 * ^ Variables declared with let cannot be Redeclared in the same scope
 * ~ Variables defined with const cannot be Redeclared
 * ~ Variables defined with const cannot be Reassigned
 * ~ Variables defined with const have Block Scope
 */

let a = 54;
console.log(a);
a = "bawa";
console.log(a);

/**
 * ? if you try to voilate the general rules for constructing names for variables (unique identifiers), 
 * ! it thow an syntax error/(token error)
 * * variable names are case sensitive >>  both var b = 8; and var B = 9; are different
 */

/**
 * !var is globally scoped -- which impose problems/bugs
 */
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
    let c = "bbb";
}
// you can reassign the values
c = 34;
console.log(c);

// const variables must be assigned a value when they are declared
// use const when you want to declare: array, object, function, RegExp
/**
 * ?It does not define a constant value. It defines a constant reference to a value.
*/

const d = "dfg";
// d ="hgj"; --this will throw error
console.log(d);
/*const variables are also block scoped but they cannot be reasigned*/
{
    const d = "tyu";
    console.log(d);
}
console.log(d);

/**
 *& | Keyword | Scope | Redeclare | Reassign | Hoisted | Binds this |
 *& |---------|-------|-----------|----------|---------|------------|
 *? | var     | No    | Yes       | Yes      | Yes     | Yes        |
 *^ | let     | Yes   | No        | Yes      | No      | No         |
 *~ | const   | Yes   | No        | No       | No      | No         |
 */

// *Note: "=" is called assignment operator which is used to assign the value/data while 
// *Note: "==" is called equal to operator which is used to compare the values 