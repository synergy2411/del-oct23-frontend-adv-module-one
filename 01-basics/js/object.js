// OBJECT CREATIONAL METHODS
// -------------------------
// 1. LITERAL METHOD


// const books = ["book1", "book2", "book3"];

// let box = {
//     dimensions: {
//         width: 4,
//         height: 6,
//     },
//     books: books,
//     addBook: function (newBook) {
//         this.books.push(newBook);
//     }
// }

// box.volume = box.dimensions.width * box.dimensions.height;

// box.addBook("book4");

// console.log(box.books.length)
// console.log(books.length)

// console.log(box)

// delete box.volum;

// delete box.xyz;

// console.log(box)





// 2. CONSTRUCTOR METHOD : prototyping / blueprint

function Person(firstName, lastName) {
    // this = {}
    this.firstName = firstName;
    this.lastName = lastName;

    console.log(this);      // {firstName: "", lastName :""}

    // return this;

    // this.getDetails = function () {
    //     return "Hello, " + this.firstName + " " + this.lastName;
    // }
}

// Person.prototype.getDetails = function(){
//     return "Hello, " + this.firstName + " " + this.lastName;
// }


const johnDoe = new Person("John", "Doe");

// console.log(johnDoe.getDetails())

// const maryPublic = new Person("Mary", "Public");

// console.log(maryPublic.getDetails())












// 3. INSTANCE METHOD : object inheritance

// let shoe = {
//     size: 8
// }

// const magicShoe = Object.create(shoe);

// let  magicShoe;
// magicShoe.__proto__ = shoe.__proto__ = Object.prototype;


// console.log(magicShoe.hasOwnProperty('size'));      // ?
// console.log(shoe.hasOwnProperty('size'));      // ?


// console.log(shoe.isPrototypeOf(magicShoe))
// console.log(magicShoe.isPrototypeOf(shoe))
// console.log(Object.prototype.isPrototypeOf(shoe))
// console.log(Object.prototype.isPrototypeOf(magicShoe))


// let now = new Date("Dec 21, 2023");



// console.log(magicShoe.size);     // { }

// // magicShoe.size = 10;

// console.log(magicShoe.size);    // 10
// console.log(magicShoe)
// console.log(shoe.size);    // ?



// let str = new String("Hello World!");

// console.log(str.length);            // ?


// String.prototype.toLowerCase = function(){

// }

// str.toLowerCase()
// str.toUpperCase()
// str.indexOf("a")


// Create a String prototype function to
// find the number of occurence of given letter
// in the below string

// String.prototype.numberOfOccurence = function (letter) {
//     let occurences = 0;
//     for (let i = 0; i < this.length; i++) {
//         if (this.charAt(i).toLowerCase() === letter.toLowerCase()) {
//             occurences++
//         }
//     }
//     return occurences;
// }


// let strOne = "Welcome to the world of JavaScript";
// let strTwo = "Welcome to JavaScript";

// console.log(strOne.numberOfOccurence("e"))       // 3
// console.log(strTwo.numberOfOccurence("a"))       // 2