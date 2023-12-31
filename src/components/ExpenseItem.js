import "./Expenseitem.css";
import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";
function ExpenseItem(props) {
 
  return (
    <div className="expense-item">
      <ExpenseDate date={props.date}/>
      <ExpenseDetails title={props.title}  location={props.LocationOfExpenditure}/>
      <div className="expense-item__price ">${props.amount}</div>
    </div>
  );
}

export default ExpenseItem;
