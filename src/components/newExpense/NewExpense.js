import React  from "react";
import ExpenseForm from "./ExpenseForm";
import './NewExpense.css'

const NewExpense=(props)=>{
   const saveExpenceHandler = (enteredData)=>{
        const expenseData={
            ...enteredData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData);
    }
    return <div className="new-expense" >
        <ExpenseForm onSaveExpenceData={saveExpenceHandler}/>
    </div>
}

export default NewExpense;