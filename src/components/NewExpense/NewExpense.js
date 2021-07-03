import ExpenseForm from "./ExpenseForm";
import React from "react";
import './NewExpense.css';

const NewExpense = (props)=>{
    const saveExpenseDataHandler =  (enteredExpensData)=>{
        const expenseData = {
            ...enteredExpensData,
            id: Math.random().toString
        }
        //console.log(expenseData);
        props.onAddExpense(expenseData);
    }
    return(
        <div className = "new-expense ">
                <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}/>
        </div>
    );
}
export default NewExpense;