import React,{useState} from 'react';
import './ExpenseItem.css';
import ExpenseDate from "./ExpenseDate";
function ExpenseItem(props) {
  const [title,setTitle]=useState(props.title);

  const changTitle=()=>{
    console.log(title);
    setTitle("Updated!");
    console.log(title);
  }
    return (
      <div className="expense-item">
        <ExpenseDate key={props.id} {...props} />
        <div className="expense-item__description">
          <h2>{title}</h2>
          <div className="expense-item__price">${props.amount}</div>
          <button  onClick={changTitle}>Chang Title</button>
        </div>
      </div>
    );
  }

  export default ExpenseItem;