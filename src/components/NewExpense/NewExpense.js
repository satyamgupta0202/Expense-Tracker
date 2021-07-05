import ExpenseForm from "./ExpenseForm";
import React, { useState } from "react";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);
  const setNewExpenseHandler = () => {
    setIsEditing(true);
  };
  const saveExpenseDataHandler = (enteredExpensData) => {
    const expenseData = {
      ...enteredExpensData,
      id: Math.random().toString,
    };
    //console.log(expenseData);
    props.onAddExpense(expenseData);
    setIsEditing(false);
  };
  const onCancelHandler = () => {
    setIsEditing(false);
  };
  return (
    <div className="new-expense ">
      {!isEditing && (
        <button onClick={setNewExpenseHandler}>Set New Expense</button>
      )}
      {isEditing && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={onCancelHandler}
        />
      )}
    </div>
  );
};
export default NewExpense;
