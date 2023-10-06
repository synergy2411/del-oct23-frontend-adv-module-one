// console.log("Start Program")

// setTimeout(() => console.log("Running in background"), 0)

// Promise.resolve("Promise Data").then(console.log);

// console.log("End Program")


// Behaviour of JS Engine
// - Sync code will execute first
// - Async code will execute after the Sync code
// - MacroTask : rest async task
// - MicroTask : Promise / queueMicrotask()


window.onload = function () {

    const btnFetch = document.getElementById("btnFetch")

    const listContainer = document.getElementById("listContainer")

    btnFetch.addEventListener("click", function (e) {
        e.preventDefault();

        fetch("https://jsonplaceholder.typicode.com/users")
            .then(response => response.json())
            .then(console.log)




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

    })

}