import "./Expenseitem.css";
function ExpenseItem() {
    const expenseDate=new Date(2023,12,30);
    const expenseItem='Car Insurance';
    const expensePrice=298.4;
    const LocationOfExpenditure="Delhi"
  return (
    <div className="expense-item">
      <div>{expenseDate.toISOString()}</div>
      <div className="expense-item__description">
        <h2>{expenseItem}</h2>
        <h2>{LocationOfExpenditure}</h2>
      </div>
      <div className="expense-item__price ">${expensePrice}</div>
    </div>
  );
}

export default ExpenseItem;
