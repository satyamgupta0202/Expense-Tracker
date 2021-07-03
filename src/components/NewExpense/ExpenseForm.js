import React ,{useState} from "react";
import './ExpenseForm.css'

const ExpenseForm = ()=>{
   const [EnteredTitle,setEnteredTitle] = useState("")
   const [EnteredAmount,setEnteredAmount] = useState("")
   const [EnteredDate,setEnteredDate] = useState("")
   const titleChangedHandler = (event)=>{
      console.log(event.target.value);
      setEnteredTitle(event.target.value);
   }
   const amountChangedHandler = (event)=>{
      console.log(event.target.value);
      setEnteredAmount(event.target.value);
   }
   const dateChangedHandler = (event)=>{
      console.log(event.target.value);
      setEnteredDate(event.target.value);
   }
   const submitButtonHandler = (event) =>{
      event.preventDefault();
      const formData = {
         title:EnteredTitle,
         amount:EnteredAmount,
         date:EnteredDate,
      }
      setEnteredTitle('');
      setEnteredAmount('');
      setEnteredDate('');
      console.log(formData);
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