//? selectors
const addBtn = document.getElementById("ekle-btn");
const incomeInput = document.getElementById("gelir-input")
const addForm = document.getElementById("ekle-formu")


//? variables
let incomes = 0;

// ekle formu
addForm.addEventListener("click", (e) => {
    e.preventDefault()
    incomes = incomes + Number(incomeInput.value)
    console.log(incomes);
    addForm.reset()
})

//? spreadsheet

//? payment form

//? expense table

//? add income form

//? When the page is first opened, it prints the data in localStorage and assigns it to variables.

//? Making expense entries

//? send the expense to Dom