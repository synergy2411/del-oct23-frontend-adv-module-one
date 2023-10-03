var fruits = ["apple", "banana", "guava"];

var user = {
    firstName: "John",
    lastName: "Doe",
    age: 32,
    "my friends": ["Foo", "Bam"],
};

console.log(user.firstName);
console.log(user["my friends"]);

function demoFn() {
    console.log("The Demo Function");
}

var today = new Date();

var varPrimitive = 101;

var varAnother = varPrimitive;

varAnother++;

console.log(varPrimitive); // 101

var userOne = {
    name: "John Doe",
};

var userTwo = userOne;

userTwo.name = "Jenny Doe";

console.log(userOne); // {name : "Jenny Doe"}

var friends = ["Monika", "Joe", "Chandler"];

var moreFriends = friends;

moreFriends.push("Rachel");

console.log(friends.length); // ?

var greet = "Hello";

var greetMe = greet;

greetMe = greetMe + " Me!";

console.log(greet); // ?

var objOne = {
    name: "John",
};
var objTwo = {
    name: "John",
};

var objThree = objOne;

console.log("-> ", objThree === objOne); // ?

// console.log(objOne === objTwo); // ?

var num1 = 101;

var num2 = 101;

console.log(num1 === num2); // true

var arrOne = ["A", "B", "C"];
var arrTwo = ["A", "B", "C"];

console.log(arrOne === arrTwo); // ?

var arrThree = arrTwo;

console.log(arrThree === arrTwo); // ?