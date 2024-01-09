import "./Expenseitem.css";
import React, { useRef,useState} from 'react';
import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";
import Card from "../UI/Card";
function ExpenseItem(props) {

const expenseRef = useRef(null);
const[amount,setAmount]=useState(props.amount);

// const deleted = () => {
//   if (expenseRef.current) {
//     expenseRef.current.remove();
//     console.log(expenseRef);
//   }
// }
const update=()=>{
  setAmount(100);
}



  return (
    <Card className="expense-item"  ref={expenseRef}>
      <ExpenseDate date={props.date}/>
      <ExpenseDetails title={props.title}  location={props.location}/>
      <div className="expense-item__price ">${amount}</div>
      <button onClick={update}>Update</button>
    </Card>
  );
}

export default ExpenseItem;
