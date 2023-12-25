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
const payForm = document.getElementById("harcama-formu")
const payInput = document.getElementById("harcama-alani")
const dateInput = document.getElementById("tarih")
const amountInput = document.getElementById("miktar")

//? expense table
const expenseBody = document.getElementById("harcama-body")
const clearBtn = document.getElementById("temizle-btn")

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
//bring back the data from localStorage whenever the page is loaded
window.addEventListener("load", () => {
    incomes = Number(localStorage.getItem("incomes")) || 0
    urIncomeTd.innerText = incomes
})

//? When the page is first opened, it prints the data in localStorage and assigns it to variables.

//? Making expense entries

//? send the expense to Dom