import React, { useState } from 'react';
import ExpensesFilter from './ExpensesFilter';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expenses.css';

//card = makes the big box inside with the small components are placed.
// we call the expenseitem component and so we import it
// remember that props were kept within items
const Expenses = (props) => {
  const [filteredYear , setFilteredYear ] = useState('2020')

  const filterChangedHandler = (selectedYear)=>{
    setFilteredYear(selectedYear);
  }
  const filteredExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear;
  });
  // props.items.filter((e) => e.date.getFullYear() === filteredYear)
  //         .map((expense) => (
  //           <ExpenseItem
  //             key={expense.id}
  //             title={expense.title}
  //             amount={expense.amount}
  //             date={expense.date}
  //           />
  //         ))
  return (
    <Card className="expenses">
      <ExpensesFilter selected ={filteredYear} onChangeFilter = {filterChangedHandler}/>
        {filteredExpenses.map((expense) => (
      <ExpenseItem 
      key={expense.id}
      title={expense.title} 
      amount={expense.amount} 
      date={expense.date}
      />
      )) }
    </Card>
  );
}

export default Expenses;


