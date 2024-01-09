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
    const[allexpenses,changeExpenses]=useState(expenses);
    const addExpenseHandler=(expense)=>{
      console.log("in app.js");
      console.log(expense);
      changeExpenses((previousExpense)=>{
       // expenses.push(expense);
        return[...previousExpense,expense]
      })
    }
    const expenseArr=allexpenses.map((expense)=>(
        <ExpenseItem 
        title={expense.title}
        amount={expense.amount}
        date={new Date(expense.date)}
        location={expense.LocationOfExpenditure}
      />
    ))

    return(
        <div>
        <Card className="expenses">
            <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />

             <NewExpense onAddExpense={addExpenseHandler}></NewExpense>
            {expenseArr}
        </Card>
        </div>
    )
}
export default Expenses;