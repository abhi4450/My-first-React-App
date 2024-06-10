import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  const buttonClickHandler = (event) => {
    console.log("Button clicked");
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />

      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.price}</div>
        <button onClick={buttonClickHandler}>Change Title</button>
      </div>
    </Card>
  );
};

export default ExpenseItem;
