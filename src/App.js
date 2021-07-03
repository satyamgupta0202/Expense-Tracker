import React from 'react';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';
const App = () => {
  //Static Investment Array of Object
  const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

  const AddExpenseHandler = (expense)=> {
    console.log("We are at Parent Directory");
    console.log(expense);
  }

  // return React.createElement(
  //   'div',
  //   {},
  //   React.createElement('h2', {}, "Let's get started!"),
  //   React.createElement(Expenses, { items: expenses })
  // );
//we call the component Expense which ctrl the general Layout of the expenses
//we pass the props in it of the expenses array of object
// props: items = {expenses}
  return (
    <div>
      <NewExpense onAddExpense = {AddExpenseHandler}/>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;