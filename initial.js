const expensePlace = document.getElementById('place');
const expenseDate = document.getElementById('date');
const expenseAmount = document.getElementById('amount');
const expenseList = document.getElementById('list');
const submitButton = document.getElementById('submit');
const displayTotals = document.getElementById('total-cost');

let expenses = [

{

    place : '' ,
    date :'' ,
    amount : ''
}

];

function addExpenditure(){
    const expense = expensePlace.Value.trim();
    const date = expenseDate.value.trim();
    const amount = parseFloat(expenseAmount.value.trim()); 

    if (expense,date,amount) {
        expenses.push({
            place : expense,
            date : date,
            amount : amount
        });
        displayExpenses();
        clearForm();
        updateTotal();
    }


}
function displayExpenses(){
  expenseList.innerHTML = '';
  expenses.forEach((expenses,index) => {
    const li = document.createElement('li');
    li.textContent = `${index + 1}. ${expenses.place} - ${expenses.amount} - ${expenses.date}`;
    expenseList.appendChild(li);
  });


}


submitButton.addEventListener('click', addExpenditure);