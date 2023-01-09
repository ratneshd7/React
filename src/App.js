import React ,{useState}from 'react';
import './App.css';
import Expenses from './components/Expenses';
import NewExpense from './components/newExpense/NewExpense';
const dummyExpenses = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2022, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 100,
    date: new Date(2022, 8, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2022, 5, 12),
  },
];
function App() {
  const [expenses,setExpenses]=useState(dummyExpenses);

  const addExpenseHandler= (addData)=>{
    console.log(addData);
    console.log("In App.js File");
    setExpenses([addData,...expenses]);
  }
  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler}/>
      
      <Expenses data={expenses}></Expenses>
    </div>
  );
}

export default App;
