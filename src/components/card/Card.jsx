import React, { useState } from "react";
import { useGlobalState } from "../../context/GlobalState";
import "./card.css";

const Card = ({ income }) => {

  const { addTransaction } = useGlobalState();
  const [description, setDescription] = useState();
  const [amount, setAmount] = useState(0);
  const onSubmit = (e) => {
    if (amount != 0 || description != "") {
      if (!income) {
        addTransaction({
          id: window.crypto.randomUUID(),
          description,
          amount: -amount,
        });
      } else {
        addTransaction({
          id: window.crypto.randomUUID(),
          description,
          amount: +amount,
        });
      }
    }
    setAmount(0);
    setDescription("");
  };

  return (
    <div>
      <div className="container-inc">
        <h1>{income ? "INCOME" : "EXPENSE"}</h1>
        <p>Enter here your {income ? "income" : "expense"}</p>
      </div>
      <div className="container-inputs">
        <input
          type="text"
          placeholder="Enter a description"
          onChange={(e) => setDescription(e.target.value)}
          className="inputs"
          value={description}
        />
        <input
          type="number"
          step="0.01"
          placeholder="0.00"
          onChange={(e) => setAmount(e.target.value)}
          className="inputs"
          value={amount}
        />
        <button className="button-add" onClick={() => onSubmit()}>
          Add
        </button>
      </div>
    </div>
  );
};

export default Card;
