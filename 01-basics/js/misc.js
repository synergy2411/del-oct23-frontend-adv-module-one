// OPERATOR PRECEDENCE

// console.log(true > 1);

// console.log(4 * (2 + 5));
// console.log(4 + (2 + 5) * 2);

// console.log("20" === 20);   // FALSE
// console.log("20" == 20);   // TRUE


// BLOCK SCOPE VARIABLES - LET AND CONST

// function demo(arr) {
//     if (arr.length > 2) {
//         // console.log(LOAD);         // undefined
//         // console.log(FLASH);         // undefined
//         var LOAD = "LOADING";
//     } else {
//         var FLASH = "FLASHING";
//     }
// }

// demo([1, 2, 3, 4]);



// const USERNAME = "Jenny Doe"

// console.log(USERNAME)

// function demo() {

// const user = {
//     name: "John"
// }

// // user.name = "Jenny";

// user = {            // ERROR : CAN'T REASSIGN TO CONSTANTS
//     name: "Jack"
// }

// console.log(user.name);         // "Jenny"

// const friends = ["Joe", "Chandler", "Rachel"];

// friends.push("Ross");

// console.log(friends);


// }

// demo()


// STRING LITERALS
// - Embed variables within string without (+) operator
// - Multi line strings without (\n) operator



// let username = "John Doe";
// let userAge = 32;

// let greet = `Hello from ${username}!!

// I'm ${userAge} years old!

// `

// console.log(greet)





// let varA = "2010";

// let varB = 20;


// let varC = Number(varA) + varB;

// console.log(varC);      //201020



// FOR...OF - used with iterator like Array

// let fruits = ["apple", "guava", "banana"];

// for (let item of fruits) {
//     console.log(item)
// }

// // FOR...IN - used with object
// let user = {
//     name: "John",
//     email: "test@test",
//     age: 32
// }

// for (let key in user) {
//     console.log(`${key} : ${user[key]}`)
// }


