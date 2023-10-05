window.onload = function () {
    let btnSave = document.getElementById("btnSave");
    let btnReset = document.getElementById("btnReset");

    let txtTitle = document.getElementById("title");
    let txtAmount = document.getElementById("amount");
    let txtDate = document.getElementById("date");
    let expenseContainer = document.getElementById("expense-container");

    let expenseList = [];

    const deleteButtonRegistration = () => {
        const btnDanger = document.querySelectorAll(".btn-danger");
        btnDanger.forEach(btn => {
            btn.addEventListener("click", function (e) {
                e.preventDefault();
                const listItem = this.closest(".list-group-item");
                listItem.remove()
            })
        })
    }

    const render = () => {
        expenseContainer.innerHTML = '';
        expenseList.forEach(expense => {
            const liElement = document.createElement("li");
            const btnDelete = document.createElement("button");
            btnDelete.innerText = "✖";
            btnDelete.classList.add("btn", "btn-danger", "btn-sm")

            liElement.classList.add("list-group-item", "d-flex", "justify-content-space-between", "mb-3");
            liElement.innerHTML = `
                <p class='lead'> You have spend <strong>INR${expense.amount}</strong> on ${expense.title} dated ${expense.date}
            `
            liElement.setAttribute("data-id", expense.id);
            liElement.appendChild(btnDelete);
            expenseContainer.appendChild(liElement);
            deleteButtonRegistration()
        });
    }

    btnSave.addEventListener("click", function (event) {
        event.preventDefault();
        if (txtTitle.value.trim() === "" || txtAmount.value.trim() === "" || txtDate.value.trim() === "") {
            return;
        }
        expenseList.push({
            id: Math.round(Math.random() * 1000).toString(),
            title: txtTitle.value.toUpperCase(),
            amount: Number(txtAmount.value),
            date: new Date(txtDate.value)
        })
        txtTitle.value = ""
        txtAmount.value = ""
        txtDate.value = ""
        render();
    })


    btnReset.addEventListener("click", function (e) {
        e.preventDefault()
        txtTitle.value = "";
        txtAmount.value = "";
        txtDate.value = "";
    })
}

// You spend ${AMOUNT} on DATED ${DATE} for ${TITLE} - <DELETE_BUTTON>

