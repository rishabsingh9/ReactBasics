import {React,useState} from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import './Expenses.css'
import NewExpense from "../NewExpense/NewExpense";
import ExpensesFilter from "./ExpenseFilter";

const Expenses=(props)=>{
    const [filteredYear, setFilteredYear] = useState('2020');

    const filterChangeHandler = selectedYear => {
      setFilteredYear(selectedYear);
    };
    const expenses=props.expenses;
    
    // const expenseArr=expenses.map((expense)=>(
    //     <ExpenseItem 
    //     key={expense.id}
    //     title={expense.title}
    //     amount={expense.amount}
    //     date={new Date(expense.date)}
    //     location={expense.LocationOfExpenditure}
    //   />
    // ))
    const filteredExpenses=expenses.filter((expense)=>{
      console.log(expense);
      return expense.date.getFullYear().toString()===filteredYear
    })
    console.log(filteredExpenses)

    let expensesContent = <p>No expenses found.</p>;

    if (filteredExpenses.length > 0) {
      expensesContent = filteredExpenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={new Date(expense.date)}
        />
      ));
    }

    return(
        <div>
        <Card className="expenses">
            <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />

             
             {/* {filteredExpenses.length==0?<p>No Expenses Found</p> :filteredExpenses.map((expense)=>{
              <ExpenseItem title={expense.title}
              amount={expense.amount} 
              date={new Date(expense.date)}
              />
            })} */}
            {expensesContent}
        </Card>
        </div>
    )
}
export default Expenses;
