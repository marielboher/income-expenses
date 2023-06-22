import { useState } from "react";
import Card from "../card/Card";
import "./incomeCard.css";

const IncomeCard = () => {
  const [income, setIncome] = useState(true);

  const handleIncomeClick = () => {
    setIncome(true);
  };

  const handleExpenseClick = () => {
    setIncome(false);
  };

  return (
    <div className="card-incomes">
      <div className="buttons-container">
        <div className="radio-inputs">
          <label className="radio">
            <input
              type="radio"
              checked={income}
              onChange={handleIncomeClick}
              name="radio"
            />
            <span className="name">Incomes</span>
          </label>
          <label className="radio">
            <input
              type="radio"
              checked={!income}
              onChange={handleExpenseClick}
              name="radio"
            />
            <span className="name">Expenses</span>
          </label>
        </div>
      </div>
      <Card income={income} />
    </div>
  );
};

export default IncomeCard;

