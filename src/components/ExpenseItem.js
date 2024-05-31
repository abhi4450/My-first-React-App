import "./ExpenseItem.css";

const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
function ExpenseItem(props) {
  const Month = monthNames[props.date.getMonth()];
  const Year = props.date.getFullYear();
  const Date = props.date.getDate();

  return (
    <div className="expense-item">
      <div>
        <div>{Month}</div>
        <div>{Year}</div>
        <div>{Date}</div>
      </div>
      <div className="expense-item__location">{props.location}</div>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.price}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
