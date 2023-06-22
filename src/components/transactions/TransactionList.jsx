import { useGlobalState } from "../../context/GlobalState";
import TransactionIem from "./TransactionIem";

const TransactionList = () => {
  const { transactions } = useGlobalState();

  return (
    <>
      <h3>History</h3>
      <ul>
        {transactions.map((transaction) => (
          <TransactionIem transaction={transaction} key={transaction.id} />
        ))}
      </ul>
    </>
  );
};

export default TransactionList;
