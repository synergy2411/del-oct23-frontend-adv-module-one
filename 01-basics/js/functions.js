
// FUNCTION DECLARATION - CAN BE CALLED BEFORE CREATION
// -------------------
// console.log(calcAge(1992))

// function calcAge(birthYear) {
//     return 2037 - birthYear;
// }


// FUNCTION EXPRESSION - EXECUTES AT RUN TIME
// -------------------
// var addition = function (n1, n2) {
//     return n1 + n2;
// }
// console.log(addition(2,5));



// FUNCTION HOISTING - HOISTING AT THE TOP
// -------------------
// function mystry() {

//     var chooseNumber = function () {       // xixo
//         return 7
//     }
//     return chooseNumber;
//     var chooseNumber = function () {       // xixo
//         return 12
//     }
// }


// const nestedFn = mystry();

// console.log(nestedFn())         //?









// function testX() {
//     let x = 101;
//     return function () {
//         return ++x;
//     }
// }


// const xyz = testX();
// console.log(xyz())          // 102
// console.log(xyz())          // 103
// console.log(xyz())          // 104
// console.log(xyz())          // 105


// function buildTicket(transport) {
//     let numOfPassenger = 0;
//     return function (name) {
//         return `
//         Hello Mr/s ${name},
//         You are going via ${transport}.
//         Your Ticket ID # ${++numOfPassenger}
//         `
//     }
// }


// const shipFn = buildTicket("Ship");

// console.log(shipFn("John"))
// console.log(shipFn("Jenny"))

// const kangarooFn = buildTicket("Kangaroo")

// console.log(kangarooFn("Jack"))




// ARROW FUNCTION  (argsList) => functionBody
// --------------------------------------------

// const add = (n1, n2) => n1 + n2

// console.log(add(4, 4))


// let numbers = [101, 103, 105, 109];

// const newArray = numbers.map(value => value - 9);

// console.log(newArray)



// HOF || CALLBACKS
// ----------------
// setTimeout(() => { console.log("2 seconds left") }, 2000);


// function greet(err, username) {
//     if (err) {
//         console.error(err);
//         return;
//     }
//     console.log("Guter Morgan isle :", username);
// }

// function demoFn(arr, cb) {
//     if (arr.length > 2) {
//         cb(null, "John Doe");
//     } else {
//         cb(new Error("Too low values"))
//     }
//     console.log("Demo Function executed")
// }


// demoFn([1, 2, 3], greet);




// function multiply(n1, n2) {
//     return n1 * n2;
// }

// console.log(multiply(2, 3))




// PARTIAL / CURRYING

// mul(5,3,2) || mul(5)(3)(2)

// function mul(n1) {
//     return function (n2) {
//         return function (n3) {
//             return n1 * n2 * n3;
//         }
//     }
// }

// const multiplyBy5 = mul(5)

// const myltiplyBy15 = multiplyBy5(3)

// console.log(myltiplyBy15(2))


// console.log(mul(10)(5)(3));

// console.log(mul(5)(2))





// let x = 301;

// function A() {
//     let x = 201;
//     function B() {
//         // let x = 101;
//         console.log(x)          // 101
//     }
//     B();
// }

// A();


// LEXICAL SCOPE || SCOPE CHAINING || VARIABLE LOOKUP

// let x = 101;

// function B(){
//     console.log(x);         // ?
// }

// function A(){
//     let x = 99;
//     B()
// }

// A()




// IIFE
(function () {
    var x = 201;
    console.log("IIFE - Immediately Invoked Function Expression")
})();

