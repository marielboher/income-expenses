import { useGlobalState } from "../../context/GlobalState";
import TransactionIem from "./TransactionIem";

const TransactionList = () => {
  const { transactions } = useGlobalState();

  return (
    <>
      <div className="container-transactions">
        <div className="title-fixed">
          <h3>History</h3>
        </div>
        <ul className="transaction-list">
          {transactions.map((transaction) => (
            <TransactionIem transaction={transaction} key={transaction.id} />
          ))}
        </ul>
      </div>
    </>
  );
};

export default TransactionList;
