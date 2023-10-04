// Method

// function greet() {
//     return `Hola ${this.firstName} ${this.lastName}`;
// }

// let user = {
//     firstName: "Ross",
//     lastName: "Green",
// }

// const boundedOne = greet.bind(user)
// console.log(boundedOne())

// let userTwo = {
//     firstName: "Rachel",
//     lastName: "Gellar"
// }

// const boundedTwo = greet.bind(userTwo);

// console.log(boundedTwo())


// function greet(username, age) {
//     return `
//     Greetings Mr. ${username},
//     You are ${age} years old!
//     Email : ${this.email}
//     `;
// }


// let userOne = {
//     email: "userOne@test"
// }

// console.log(greet.call(userOne, "John", 32));

// console.log(greet.apply(userOne, ["Jenny", 28]))


// Function

// function demoThis() {
//     console.log(this);          // window object
// }

// demoThis();



// Event Listeners

// window.onload = function () {

//     const btnSave = document.getElementById("btnSave");

//     const txtMessage = document.getElementById("txtMessage");

//     txtMessage.addEventListener("input", function () {
//         console.log(this);      // ?
//     })

//     btnSave.addEventListener("click", function (event) {
//         event.preventDefault();

//         console.log(this);     // ?
//     })

// }




// Arrow Function


let user = {
    email: "test@test",
    age: 32,
    getDetails: () => () => this.email + " - " + this.age
}


const firstNestedFn = user.getDetails()

// const secondNestedFn = firstNestedFn()

// console.log(secondNestedFn());
console.log(firstNestedFn())









// Call Apply Bind