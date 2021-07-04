import React ,{useState} from "react";
import './ExpenseForm.css'

const ExpenseForm = (props)=>{

   //useSattes for the Form Initial Conditions
   const [EnteredTitle,setEnteredTitle] = useState(' ')
   const [EnteredAmount,setEnteredAmount] = useState(' ')
   const [EnteredDate,setEnteredDate] = useState(' ')

   //handles title of the form 
   const titleChangedHandler = (event)=>{
      console.log(event.target.value);
      setEnteredTitle(event.target.value);   ///set the value of the title in the function to re-render it
   }
   //handles aount and sets it in the function
   const amountChangedHandler = (event)=>{
      console.log(event.target.value);
      setEnteredAmount(event.target.value);
   }
   //set the date
   const dateChangedHandler = (event)=>{
      console.log(event.target.value);
      setEnteredDate(event.target.value);
   }

   //submit button handler extrat the data and then clear it
   const submitButtonHandler = (event) =>{
      event.preventDefault();
      const expenseData = {
         title:EnteredTitle,
         amount:EnteredAmount,
         date:new Date(EnteredDate),
      }

      //very Important : This is the unique way to move from child To parent ..this function call or ejects it's functionality
      // to NewExpense file which displays the contnent in the NewExpense file that is the data of Form.
      
      props.onSaveExpenseData(expenseData);
      ////////////////////////////////////////////////////////
      setEnteredTitle(' ');
      setEnteredAmount(' ');
      setEnteredDate(' ');
     // console.log(expenseData);
      
   } 
   
return (
<form onSubmit={submitButtonHandler}>
    <div className="new-expense__controls">
       <div className="new-expense__control">
           <label>Title</label>
           <input type="text" value={EnteredTitle} onChange={titleChangedHandler}></input>
        </div>
        <div className="new-expense__control">
           <label>Amount</label>
           <input type='number' min ="0.01" step="0.01" value={EnteredAmount}  onChange={amountChangedHandler}/>
        </div>
        <div className="new-expense__control">
           {/* label basically is the title of the value to be inputted */}
           <label>Date</label> 
           <input type='date' min ="2019-01-01" max="2023-01-01" value={EnteredDate}  onChange={dateChangedHandler}/>
        </div>
    </div>
    <div className="new-expense__actions">
     <button type="submit">AddExpense</button>
    </div>
   
</form>
)
}
export default ExpenseForm;