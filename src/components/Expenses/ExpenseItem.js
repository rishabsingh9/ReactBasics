import "./Expenseitem.css";
import React, { useRef } from 'react';
import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";
function ExpenseItem(props) {

// const deleted=()=>{
// //   const exp=document.querySelector('.expense-item');
// //   const parent=exp.parentNode;
// //   parent.removeChild(exp);
// // }
const expenseRef = useRef(null);

const deleted = () => {
  if (expenseRef.current) {
    expenseRef.current.remove();
    console.log("Expense deleted");
  }
}

  return (
    <div className="expense-item"  ref={expenseRef}>
      <ExpenseDate date={props.date}/>
      <ExpenseDetails title={props.title}  location={props.location}/>
      <div className="expense-item__price ">${props.amount}</div>
      <button onClick={deleted}>Delete Expense</button>
    </div>
  );
}

export default ExpenseItem;
