import React, { useState } from "react";
import './ExpenseForm.css'

const ExpenseForm = (props) => {
  const[enteredTitle,setEnteredTitle]=useState('');
  const[enteredAmount,setEnteredAmount]=useState('');
  const[enteredDate,setEnteredDate]=useState('');


  const titleChangeHandler=(event)=>{
    setEnteredTitle(event.target.value);
  }
  
  const amountChangeHandler=(event)=>{
    setEnteredAmount(event.target.value);
  }
  
  const dateChangeHandler=(event)=>{
    setEnteredDate(event.target.value);
  }
  const submitHandler=(event)=>{
    event.preventDefault();
    const expenseData={
      title:enteredTitle,
      amount:enteredAmount,
      date:new Date(enteredDate)
    }
    props.onSaveExpenseData(expenseData);
    setEnteredAmount('');
    setEnteredDate('');
    setEnteredTitle('');
  }
 

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Expense Title</label>
          <input id="title" onChange={titleChangeHandler} value={enteredTitle}></input>
        </div>
        <div className="new-expense__control">
          <label>Expense Amount</label>
          <input type="Number" min="0.01" step="0.01" onChange={amountChangeHandler} value={enteredAmount}></input>
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" min="2020-02-1" max="2024-12-31" onChange={dateChangeHandler} value={enteredDate}></input>
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="click" onClick={props.onCancel}>Cancel</button>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};
export default ExpenseForm;
