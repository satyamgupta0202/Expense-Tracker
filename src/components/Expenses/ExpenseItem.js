import React, { useState } from "react";

import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  //Don't keep state functions unknowingly in some function
  // we use const here because here we don't use = to update the value
  //rather the updatation occcurs in react memory somwhere
  const [title, setTiltle] = useState(props.title);
  const buttonClicked = () => {
    //Note that on first click it displays the previous title only.
    //state change re-renders single Expense item that is been clicked by particlar btn.
    setTiltle("Updated");
    console.log(title);
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      {/* onClick is the Prop bsically added to all sortsof the elemnts in react  */}
      {/* <button onClick={buttonClicked}>Title Change!</button> */}
    </Card>
  );
};

export default ExpenseItem;
