import React from 'react';
import ExpenseChart from './ExpenseChart';
import ExpenseItem from "./ExpenseItem";


function Expenses(props) {
  return (
    <div>
      <ExpenseChart expenses ={props.data}/>
      {props.data.map((expense,_) => {
        return (
          <div className="expense">
            <ExpenseItem key={expense.id} {...expense}  />
          </div>
        );
      })}
    </div>
  );
}

export default Expenses;
