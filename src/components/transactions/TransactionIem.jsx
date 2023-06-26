import { useGlobalState } from "../../context/GlobalState";
import { IoCloseSharp } from "react-icons/io5";
import "./transactionItem.css";

const TransactionItem = ({ transaction }) => {
  const { deleteTransaction } = useGlobalState();

  return (
    <div className="">
      <ul className="transaction-list">
        <li className="container-list">
          <p>{transaction.description}</p>
          <p>${transaction.amount}</p>
          <button
            onClick={() => {
              deleteTransaction(transaction.id);
            }}
          >
            <IoCloseSharp />
          </button>
        </li>
      </ul>
    </div>
  );
};

export default TransactionItem;
