
// console.log(calcAge(1992))

// function calcAge(birthYear) {
//     return 2037 - birthYear;
// }



// var addition = function (n1, n2) {
//     return n1 + n2;
// }
// console.log(addition(2,5));



// Function  Hoisting
// function mystry() {
//     // top of the function
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
// const add = (n1, n2) => n1 + n2

// console.log(add(4, 4))


// let numbers = [101, 103, 105, 109];

// const newArray = numbers.map(value => value - 9);

// console.log(newArray)