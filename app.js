//? selectors
const addBtn = document.getElementById("ekle-btn");
const incomeInput = document.getElementById("gelir-input")
const addForm = document.getElementById("ekle-formu")


//? variables
let incomes = 0;
let expenseList = [];

//? spreadsheet
const urIncomeTd = document.getElementById("geliriniz")
const urOutcomeTd = document.getElementById("gideriniz")
const remainTd = document.getElementById("kalan")
const remainTh = document.getElementById("kalanTh")

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

//? bring back the data from localStorage whenever the page is loaded
window.addEventListener("load", () => {
    incomes = Number(localStorage.getItem("incomes")) || 0
    urIncomeTd.innerText = incomes
    dateInput.valueAsDate = new Date()
    expenseList = JSON.parse(localStorage.getItem("expenses")) || []

    expenseList.forEach((expense) => printExpenseDom(expense))
    calculateAndUpdate()
        
    });

//? Making expense entries
payForm.addEventListener("submit", (e) =>  {
    e.preventDefault() //prevents reload

    const newPayment = {
        id: new Date().getTime(),
        // date: dateInput value,
        tarih: new Date(dateInput.value).toLocaleDateString(),
        alan: payInput.value,
        miktar: amountInput.value
    }

    //console.log(newPayment);

    payForm.reset()
    dateInput.valueAsDate = new Date()

    expenseList.push(newPayment)
    localStorage.setItem("expenses", JSON.stringify(expenseList))

    printExpenseDom(newPayment)
    calculateUpdate()
})

//? send the expense to Dom
const printExpenseDom = ({id, miktar, tarih, alan}) => {

    const tr = document.createElement("tr"); 

    const appendTd = (content) => {
        const td = document.createElement("td");
        td.textContent = content;
        return td;
    }

    const createLastTd = () => {
        const td = document.createElement("td");
        const iElement = document.createElement("i");
        iElement.id = id;
        iElement.className = "fa-solid fa-trash-can text-danger"
        iElement.type = "button";
        td.appendChild(iElement);
        return td;
    }

    tr.append(
        appendTd(tarih),
        appendTd(alan),
        appendTd(miktar),
        appendLastTd()
    )

    expenseBody.append(tr) 
}

const calculateAndUpdate = () => {
    urIncomeTd.innerText = new Intl.NumberFormat().format(incomes)

    const outcomes = expenseList.reduce(
        (total, expense) => total + Number(expense.miktar),0
    )
    urOutcomeTd.innerText = new Intl.NumberFormat().format(outcomes)
    remainTd.innerText = new Intl.NumberFormat().format(incomes-outcomes)

    const debtor = incomes - outcomes < 0;

    remainTd.classList.toggle('text-danger', debtor)
    remainTh.classList.toggle('text-danger', debtor)
}

expenseBody.addEventListener("click", (e) => {
    if(e.target.classList.contains("fa-trash-can")) {
        e.target.parentElement.remove()
    }

    const id = e.target.id
    expenseList = expenseList.filter((expense => expense.id != id))

    localStorage.setItem("expenses", JSON.stringify(expenseList))

    calculateAndUpdate()
})

clearBtn.addEventListener("click", () => {
    if(confirm('Do you confirm deleting the informations?')) {
        expenseList = []
        incomes = 0
        // localStorage.clear()   //deletes the local storage data
        localStorage.removeItem('incomes')
        localStorage.removeItem('expenses')
        expenseBody.innerHTML = "" // deletes the expenses from DOM
        calculateAndUpdate()
    }
})