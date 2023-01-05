import React from 'react';
import './App.css';
import Expenses from './components/Expenses';
import NewExpense from './components/newExpense/NewExpense';
function App() {
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 100,
      date: new Date(2021, 8, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];
  return (
    <div className="App">
      <NewExpense/>
      
      <Expenses data={expenses}></Expenses>
    </div>
  );
}

export default App;
