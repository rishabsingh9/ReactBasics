

import logo from './logo.svg';
import './App.css';
import ExpenseItem from './components/Expenses/ExpenseItem';
import NewExpense from './components/NewExpense/NewExpense'
import { useState } from 'react';
import Expenses from './components/Expenses/Expenses';

function App() {
  const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
      LocationOfExpenditure:'Delhi'
    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12),LocationOfExpenditure:'Bengaluru'},
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
      LocationOfExpenditure:'Mumbai'
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
      LocationOfExpenditure:'Pune'
    },
  ];
  const[allexpenses,changeExpenses]=useState(expenses);
    const addExpenseHandler=(expense)=>{
      console.log("in app.js");
      console.log(expense);
      changeExpenses((previousExpense)=>{
       // expenses.push(expense);
        return[expense,...previousExpense]
      })
    }
  return (
    <div>
      <h2>Let's get Started</h2>
      <NewExpense onAddExpense={addExpenseHandler}></NewExpense>
     <Expenses expenses={allexpenses}></Expenses>
    </div>
  );
}

export default App;


