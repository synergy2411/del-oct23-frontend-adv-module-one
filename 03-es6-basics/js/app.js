// class Person {

//     constructor(name) {
//         this.name = name;
//     }

//     getName() {
//         return this.name;
//     }
// }


// class Student extends Person {

//     constructor(studId, studName) {
//         super(studName);
//         this.studId = studId;
//         // this.studName = studName;
//     }

//     getStudentDetails() {
//         return `${this.studId} - ${super.getName()}`;
//     }

// }

// let tutul = new Student("S001", "Tutul Gupta");

// console.log(tutul.getStudentDetails())


// let mahima = new Student("S002", "Mahima");

// console.log(mahima.getStudentDetails())




// REST / SPREAD
// -------------


// function demoRest(param1, ...args) {
//     console.log(args[0])            // ?
// }


// demoRest("test@test")
// demoRest("test@test", 32)
// demoRest ("test@test",32, true)




// let fruits = ["apple", "banana"];

// let moreFruits1 = ["guava", "oranges", fruits];
// let moreFruits2 = ["guava", "oranges", ...fruits];


// console.log(moreFruits1, moreFruits2);        // ?



// let userOne = {
//     email: "test@test",
//     age: 32
// }


// let userTwo = {
//     ...userOne,
//     age: 35,
//     name: "John Doe"
// }

// console.log(userTwo);       // ?


// let userThree = {
//     name: "Jenny",
//     age: 40
// }

// const newUser = Object.assign({ id: "u001" }, userOne, userThree);

// console.log(newUser)





// DESRUCUTING
// -----------

// let friends = ["Ross", "Rachel", "Joey", "Chandler"];

// let [f1, f2, f3, f4, f5] = friends;

// console.log(f3);        // ?
// console.log(f5);        // ?

// f4 = "Phibie";

// console.log(friends);



// let avengers = {
//     memberOne: "Iron Man",
//     memberTwo: "Cap America",
//     memberThree: "Thor",
// }
// let moreAvengers = {
//     memberOne: "Hulk",
//     memberTwo: "Cap America",
//     memberThree: "spider-men",
// }

// let { memberTwo: m1, memberThree: m2, memberOne: m3 } = avengers;

// let { memberOne: m4, memberTwo: m5, memberThree: m6 } = moreAvengers;

// console.log(m6);       // ?



let user = {
    name: "john",
    age: 32,
    address: {
        city: "Gurugram",
        street: "201 Main Road"
    },
    friends: ["foo", "bar", "bam"]
}

let { name, age, address: { city: ct, street: st }, friends: [f1, f2, f3] } = user;



let friends = [
    {
        name: "joey",
        age: 32
    },
    {
        name: "Ross",
        age: 34
    },
    {
        name: "Rachel",
        age: 31
    }
]