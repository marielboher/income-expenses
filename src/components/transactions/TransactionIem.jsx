import { useGlobalState } from "../../context/GlobalState";
import { IoCloseSharp } from "react-icons/io5"

const TransactionIem = ({ transaction }) => {
  const { deleteTransaction } = useGlobalState();

  return (
    <li className="bg-zinc-600 text-white px-3 py-1 rounded-lg mb-2 w-full flex justify-between items-center">
      <p className="text-sm">{transaction.description}</p>
          <p>${transaction.amount}</p>
          <button
            onClick={() => {
              deleteTransaction(transaction.id);
            }}
          >
            <IoCloseSharp/>
          </button>
    </li>
  );
};

export default TransactionIem;
