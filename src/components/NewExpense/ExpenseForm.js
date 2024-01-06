import React from "react";
import './ExpenseForm.css'

const ExpenseForm = () => {
  const title = document.getElementById("title");
  function call(title) {
    console.log(title);
  }
  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Expense Title</label>
          <input id="title"></input>
        </div>
        <div className="new-expense__control">
          <label>Expense Amount</label>
          <input type="Number" min="0.01" step="0.01"></input>
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" min="2020-02-1" max="2024-12-31"></input>
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};
export default ExpenseForm;
