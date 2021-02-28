class UI {
  constructor() {
    this.budgetFeedback = document.querySelector(".budget-feedback");//Select budget
    this.expenseFeedback = document.querySelector(".expense-feedback");
    this.budgetForm = document.getElementById("budget-form");
    this.budgetInput = document.getElementById("budget-input");
    this.budgetAmount = document.getElementById("budget-amount");
    this.expenseAmount = document.getElementById("expense-amount");
    this.balance = document.getElementById("balance");
    this.balanceAmount = document.getElementById("balance-amount");
    this.expenseForm = document.getElementById("expense-form");
    this.expenseInput = document.getElementById("expense-input");
    this.amountInput = document.getElementById("amount-input");
    this.expenseList = document.getElementById("expense-list");
    this.itemList = [];
    this.itemID = 0;
  }
  //Budget method submit 
  submitBudgetForm(){
    //get the value from budget input
    const value=this.budgetInput.value;
    if (value==='' || value<0){
      this.budgetFeedback.classList.add("showItem");
      this.budgetFeedback.innerHTML=`<p>Value cannot be negative or empty</p>`;
       const self=this;//inside the function setTimeout our this is global is not the this in the ui function 
      setTimeout(function(){
        self.budgetFeedback.classList.remove("showItem")
      },4000);
      }
    else{
      this.budgetAmount.textContent = value;//Pass the value
      this.budgetInput.value='';//Empty value 
      this.showBalance();
    }
  }
  showBalance(){ //we are creating the method of show balance
    const expense=this.totalExpense();//method inside this method not ui 
    const total=parseInt(this.budgetAmount.textContent) - expense //the value is a string 
    this.balanceAmount.textContent=total;
    if (total<0){
      this.balance.classList.remove("showGreen","showBlack");
      this.balance.classList.add("showRed");

    }
    else if  (total>0){
      this.balance.classList.remove("showRed","showBlack");
      this.balance.classList.add("showGreen");
    }
    else if (total===0){
      this.balance.classList.remove("showGreen","showRed");
      this.balance.classList.add("showBlack");
    }

  }
  //submit expense form
  submitExpenseForm(){
    const expenseValue=this.expenseInput.value;
    const amountValue=this.amountInput.value;
    if(expenseValue==='' || amountValue==='' || amountValue<0 ){ //If the expense is negative or the name of the expense is empty or the value of the expense is empty
      this.expenseFeedback.classList.add("showItem");
      this.expenseFeedback.innerHTML=`<p> The value is not correct please verify it</p>`;
    
  const self=this;
  setTimeout(function(){
    self.expenseFeedback.classList.remove("showItem");
  },4000);
}
    else{
      let amount= parseInt(amountInput)
      this.expenseInput='';
      this.amountInput='';
      let expense = {
        id:this.itemID,
        title:expenseValue,
        amount:amount,
      }
      this.itemId++ //I add one id everytime the user add an expense
      this.itemList.push(expense)//then I add it to the empty array
      this.addExpense(expense)
      //we have to show balance
    }
  }
  //add expense method
  addExpense(expense){
      const div= documment.createElement('div');
      div.classList.add('expense'); //add the class, this class is in index.html
      div.innerHTML=`
      <div class="expense-item d-flex justify-content-between align-items-baseline">

         <h6 class="expense-title mb-0 text-uppercase list-item">- ${expense.title}</h6>
         <h5 class="expense-amount mb-0 list-item">${expense.amount}</h5>

         <div class="expense-icons list-item">

          <a href="#" class="edit-icon mx-2" data-id="${expense.id}">
           <i class="fas fa-edit"></i>
          </a>
          <a href="#" class="delete-icon" data-id="${expense.id}">
           <i class="fas fa-trash"></i>
          </a>
         </div>
        </div>
        `;
        this.expenseList.appendChild(div);
        
  }
  totalExpense(){
    let total = 400;
    return total;
  }
}
function eventListeners(){
  const budgetForm= document.getElementById('budget-form');
  const expenseForm= document.getElementById('expense-form');
  const expenseList= document.getElementById('expense-list');
  //Instance 
  const ui=new UI()
  //Budget form submit 
  budgetForm.addEventListener('submit',function(event){
    event.preventDefault();
    ui.submitBudgetForm();
  })
  //Expense form submit 
  expenseForm.addEventListener('submit',function(event){
    event.preventDefault();
    ui.submitExpenseForm();
  })
  //Expense click
  expenseList.addEventListener('click',function(event){

  })
}
document.addEventListener('DOMContentLoaded',function(){
  eventListeners()
}
)
//Callback function 