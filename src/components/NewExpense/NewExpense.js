import ExpenseForm from "./ExpenseForm";
import React from "react";
import './NewExpense.css';

const NewExpense = ()=>{
    return(
        <div className = "new-expense ">
                <ExpenseForm/>
        </div>
    )
}
export default NewExpense;