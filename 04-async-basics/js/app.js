// console.log("Start Program")

// setTimeout(() => console.log("Running in background"), 0)

// Promise.resolve("Promise Data").then(console.log);

// console.log("End Program")


// Behaviour of JS Engine
// - Sync code will execute first
// - Async code will execute after the Sync code
// - MacroTask : rest async task
// - MicroTask : Promise / queueMicrotask()


// window.onload = function () {

//     const btnFetch = document.getElementById("btnFetch")

//     const listContainer = document.getElementById("listContainer")

//     btnFetch.addEventListener("click", function (e) {
//         e.preventDefault();

//         fetch("https://jsonplaceholder.typicode.com/users")
//             .then(response => response.json())
//             .then(console.log)




// OLD APPROACH

// const xhr = new XMLHttpRequest();

// xhr.onreadystatechange = function () {
//     if (xhr.readyState === 4 && xhr.status === 200) {
//         const users = JSON.parse(xhr.responseText);
//         users.forEach(user => {
//             const liElement = document.createElement("li");
//             liElement.innerHTML = `${user.name}`;

//             listContainer.appendChild(liElement);
//         })
//     }
// }

// xhr.open("GET", "https://jsonplaceholder.typicode.com/users");

// xhr.send();

//     })

// }





// PROMISE
// --------

// const buildPromise = (ms) => {

//     const promise = new Promise((resolve, reject) => {

//         if (ms > 3000) {
//             setTimeout(() => reject(new Error("Something went wrong")), 1500)
//             return;

//         }
//         setTimeout(() => resolve("Hello World"), ms)
//     });

//     return promise;

// }



// CONSUMING PROMISE
// -----------------
// - then().catch()
// - Async...await keywords

// const consumePromise = async () => {

//     try {
//         const result = await buildPromise(4000)
//         console.log(result)
//     } catch (err) {
//         console.error(err);
//     } finally {
//         console.log("FINISH")
//     }
// }


// const consumePromise = () => {

//     // console.log("Start")
//     buildPromise(2000)
//         .then((data) => {
//             console.log("FIRST : ", data)
//             return data + " to everyone!"
//         })
//         .then(data => {
//             console.log("SECOND : ", data)
//         })
//         .catch(err => console.error(err))
//         .finally(() => console.log("FINALLY"));
//     // console.log("End")
// }

// consumePromise();





// PROMISE STATIC METHODS
// ----------------------

// 1. all
// 2. allSettled
// 3. any
// 4. race
// 5. resolve
// 6. reject

// Promise.resolve("RESOLVED").then(console.log);
// Promise.reject("REJECTED").catch(console.error);

// const buildPromise = (data, ms) => {
//     return new Promise((resolve, reject) => {

//         setTimeout(() => {
//             if (ms > 3000) {
//                 reject(new Error("Too high value"));
//                 return;
//             }
//             resolve(data)
//         }, ms)
//     })
// }

// const promiseOne = buildPromise("First Package", 1000);
// const promiseTwo = buildPromise("Second Package", 3500);
// const promiseThree = buildPromise("Third Package", 500);
// const promiseFour = Promise.reject(new Error("REJECTED"))
// const promiseFive = Promise.reject(new Error("REJECTED"))
// const promiseFsix = Promise.reject(new Error("REJECTED"))

// const promiseArray = [promiseOne, promiseTwo, promiseThree];

// const RejectedPromises = [promiseFour, promiseFive, promiseFsix]

// Promise.any(promiseArray).then(result => {
//     console.log(result);
// })
// Promise.race(promiseArray).then(result => {
//     console.log(result);
// })
// Promise.allSettled(promiseArray).then(result => {
//     console.log(result);
// })
// Promise.all(promiseArray).then(result => {
//     console.log(result);
// })





// FETCH

// const url = "";

// fetch(url)
//     .then(response => response.json())
//     .then(result => console.log(result))
//     .catch(console.error)


const fetchData = async () => {

    let url = "";

    try {
        const response = await fetch(url)
        const result = await response.json()
        console.log(result);
    } catch (err) {
        console.error(err)
    }
}