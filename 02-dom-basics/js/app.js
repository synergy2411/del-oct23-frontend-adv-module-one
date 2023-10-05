window.onload = function () {
    let btnSave = document.getElementById("btnSave");
    let btnReset = document.getElementById("btnReset");

    let txtTitle = document.getElementById("title");
    let txtAmount = document.getElementById("amount");
    let txtDate = document.getElementById("date");

    btnSave.addEventListener("click", function (event) {
        event.preventDefault();
        console.log(txtTitle.value, txtAmount.value, txtDate.value)
    })


    btnReset.addEventListener("click", function (e) {
        e.preventDefault()
        txtTitle.value = "";
        txtAmount.value = "";
        txtDate.value = "";
    })
}