import { useGlobalState } from "../../context/GlobalState";
import { IoCloseSharp } from "react-icons/io5";
import "./transactionItem.css";

const TransactionIem = ({ transaction }) => {
  const { deleteTransaction } = useGlobalState();

  return (
    <li className="container-list">
      <div className="listado">
        <p>{transaction.description}</p>
        <p>${transaction.amount}</p>
        <button
          onClick={() => {
            deleteTransaction(transaction.id);
          }}
        >
          <IoCloseSharp />
        </button>
      </div>
    </li>
  );
};

export default TransactionIem;
