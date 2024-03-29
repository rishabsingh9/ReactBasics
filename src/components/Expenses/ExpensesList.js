import React from "react";
import ExpenseItem from "./ExpenseItem";
import './ExpensesList.css'
const ExpensesList=(props)=>{
    const filteredExpenses=props.filteredExpenses;


    if (filteredExpenses.length == 0) {
     return <h2 className="expenses-list__fallback">Found No Expenses</h2>
    }
    return(
        <ul className="expenses-list">
             {filteredExpenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={new Date(expense.date)}
        />
      ))
             }
        </ul>
    )

}
export default ExpensesList;