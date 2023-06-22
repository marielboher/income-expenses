import React from "react";
import { useGlobalState } from "../context/GlobalState";
import "./incomeExpenses.css";

const IncomeExpenses = () => {
  const { transactions } = useGlobalState();

  const amounts = transactions.map((transaction) => transaction.amount);

  const income = amounts
    .filter((item) => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  const expense = amounts
    .filter((item) => item < 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  return (
    <>
      <div className="income-styles">
        <h4>Income: </h4>
        <p>${Math.abs(income)}</p>
      </div>
      <div className="expense-styles">
        <h4>Expense: </h4>
        <p>${Math.abs(expense)}</p>
      </div>
    </>
  );
};

export default IncomeExpenses;
