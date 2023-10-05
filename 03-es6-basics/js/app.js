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



// let user = {
//     name: "john",
//     age: 32,
//     address: {
//         city: "Gurugram",
//         street: "201 Main Road"
//     },
//     friends: ["foo", "bar", "bam"]
// }

// let { name, age, address: { city: ct, street: st }, friends: [f1, f2, f3] } = user;



// let friends = [
//     {
//         name: "joey",
//         age: 32
//     },
//     {
//         name: "Ross",
//         age: 34
//     },
//     {
//         name: "Rachel",
//         age: 31
//     }
// ]

// let [x, y, z] = friends;

// const {name : n1, age: a1} = x;
// const {name : n2, age: a2} = y;
// const {name : n3, age: a3} = z;

// let [{ name: n1, age: a1 }] = friends

// console.log(n1)



// let user = {
//     address: {
//         city: "Pune"
//     }
// }

// let { address: { city } } = user


// city = "Hyd";

// console.log(user);      // ?


// SHALLOW COPY

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

// let [x, y, z] = friends;

// x.name = "New Name";

// console.log(friends[0])


// const deepCopy = JSON.parse(JSON.stringify(friends));

// deepCopy[0].name = "Deep Copy Changed";

// console.log(friends[0])
// console.log(deepCopy[0])


// let newFriends = [...friends];

// console.log(newFriends)     // ?

// newFriends[0].name = "New Friend Name";

// console.log(friends[0]);       // ?



// MAP / SET
// ---------

// Map store the data in the pair of key and value


let map = new Map();

map.set("hello", "World")
map.set(true, "Boolean")
map.set(99, "Number")
map.set({ age: 32 }, "user")

console.log(map.size)


for (let [key, value] of map.entries()) {
    console.log(`${key} : ${value}`)
}
for (let key of map.keys()) {
    console.log(`${key} `)
}
for (let value of map.values()) {
    console.log(`${value} `)
}


map.clear()

console.log(map.size)



// Set stores the unique data

// let userOne = {
//     name: "John"
// }
// let userTwo = {
//     name: "Jenny"
// }
// let userThree = {
//     name: "Jack"
// }

// let set = new Set();

// set.add(userOne)
// set.add(userTwo)
// set.add(userThree)
// set.add(userTwo);

// console.log(set.size);      // ?




function demoArr(arr = []) {
    console.log("LENGTH :", arr.length);
}

demoArr([123, 321]);