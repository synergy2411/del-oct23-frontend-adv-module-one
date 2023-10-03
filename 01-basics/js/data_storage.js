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
    this.firstName = firstName;
    this.lastName = lastName;

    this.getDetails = function () {
        return "Hello, " + this.firstName + " " + this.lastName;
    }
}


const johnDoe = new Person("John", "Doe");

console.log(johnDoe.getDetails())

const maryPublic = new Person("Mary", "Public");

console.log(maryPublic.getDetails())

// 3. INSTANCE METHOD : object inheritance 

let shoe = {
    size: 8
}

const magicShoe = Object.create(shoe);

console.log(magicShoe.size);     // { }

// magicShoe.size = 10;

console.log(magicShoe.size);    // 10
console.log(magicShoe)
console.log(shoe.size);    // ?