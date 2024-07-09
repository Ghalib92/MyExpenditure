const expensePlace = document.getElementById('place');
const expenseDate = document.getElementById('date');
const expenseAmount = document.getElementById('amount');
const expenseList = document.getElementById('list');
const submitButton = document.getElementById('submit');
const displayTotals = document.getElementById('total-cost');
const expenseForm = document.getElementById('expense-form');

let expenses = [];

function addExpenditure(event) {
    event.preventDefault();

    const place = expensePlace.value.trim();
    const date = expenseDate.value.trim();
    const amount = parseFloat(expenseAmount.value.trim());

    if (place && date && !isNaN(amount) && amount > 0) {
        expenses.push({
            place: place,
            date: date,
            amount: amount
        });
        displayExpenses();
        clearForm();
        updateTotal();
    } else {
        alert('Please fill out all fields with valid data.');
    }
}

function displayExpenses() {
    expenseList.innerHTML = '';
    expenses.forEach((expense, index) => {
        const li = document.createElement('li');
        li.textContent = `${index + 1}. ${ expense.place} - ${ 'ksh.' + expense.amount.toFixed(2)} - ${expense.date}`;
        expenseList.appendChild(li);
    });
}

function clearForm() {
    expensePlace.value = '';
    expenseDate.value = '';
    expenseAmount.value = '';
}

function updateTotal() {
    const total = expenses.reduce((sum, expense) => sum + expense.amount, 0);
    displayTotals.textContent = `Total Cost: ${total.toFixed(2)}`;
}

expenseForm.addEventListener('submit', addExpenditure);
