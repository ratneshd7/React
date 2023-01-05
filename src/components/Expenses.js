import React from 'react';
import ExpenseItem from "./ExpenseItem";

function Expenses(props) {
  return (
    <div>
      {props.data.map((expense, _) => {
        return (
          <div className="expense">
            <ExpenseItem {...expense} />
          </div>
        );
      })}
    </div>
  );
}

export default Expenses;
