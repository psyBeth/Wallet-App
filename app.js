//? selectors
const addBtn = document.getElementById("ekle-btn");
const incomeInput = document.getElementById("gelir-input")
const addForm = document.getElementById("ekle-formu")


//? variables
let incomes = 0;

//? spreadsheet

//? payment form

//? expense table

//? add income form
addForm.addEventListener("click", (e) => {
    e.preventDefault()
    incomes = incomes + Number(incomeInput.value)
    console.log(incomes);
    //storing data
    localStorage.setItem("incomes", incomes)
    addForm.reset()
})

//? When the page is first opened, it prints the data in localStorage and assigns it to variables.

//? Making expense entries

//? send the expense to Dom