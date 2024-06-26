import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const expensesList = [
  { id: "1", date: new Date(2023, 7, 15), title: "Insurance", price: 100 },
  { id: "2", date: new Date(2024, 3, 25), title: "Book", price: 10 },
  { id: "3", date: new Date(2025, 10, 11), title: "Pen", price: 1 },
  { id: "4", date: new Date(2024, 1, 14), title: "Laptop", price: 200 },
];

const App = () => {
  const [expenses, setExpenses] = useState(expensesList);

  const addExpenseDataHandler = (expensesData) => {
    setExpenses((prevState) => {
      const expenseData = [...prevState, expensesData];
      return expenseData;
    });
  };

  return (
    <div>
      <NewExpense onAddExpenseData={addExpenseDataHandler} />

      <Expenses expenses={expenses} />
    </div>
  );
};

export default App;
