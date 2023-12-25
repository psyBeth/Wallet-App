//? selectors
const addBtn = document.getElementById("ekle-btn");
const incomeInput = document.getElementById("gelir-input")
const addForm = document.getElementById("ekle-formu")


//? variables
let incomes = 0;

//? spreadsheet
const urIncomeTd = document.getElementById("geliriniz")
const urOutcomeTd = document.getElementById("gideriniz")
const remainTd = document.getElementById("kalan")

//? payment form

//? expense table

//? add income form
addForm.addEventListener("click", (e) => {
    e.preventDefault()
    incomes = incomes + Number(incomeInput.value)
    console.log(incomes);
    //storing data
    localStorage.setItem("incomes", incomes)
    urIncomeTd.innerText = incomes
    addForm.reset()
})

//? When the page is first opened, it prints the data in localStorage and assigns it to variables.

//? Making expense entries

//? send the expense to Dom