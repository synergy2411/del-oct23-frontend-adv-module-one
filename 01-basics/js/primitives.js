var varNumber = 101;

console.log(typeof varNumber); /// ?

varNumber = "Hello World";

console.log(typeof varNumber); // ?

varNumber = true;

console.log(typeof varNumber); // ?

varNumber = null;

console.log(typeof varNumber); // ?

varNumber = undefined;

console.log(typeof varNumber); // ?

console.log(undefined === null); // ?

varNumber = Symbol(123);

console.log(typeof varNumber); // ?

var varTwo = Symbol(123);

console.log(varNumber === varTwo); // ?

var varBigInt = 987654321098765432098765432n;

var varBigIntTwo = BigInt(876543298765432876543);

var intVarOne = 987654321098765432098765432987654n;
var intVarTwo = 987654321098765432098765432987658n;

console.log(intVarOne + intVarTwo);

console.log(Number(intVarOne) / 2); // ?