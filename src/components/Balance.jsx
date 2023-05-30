import { useGlobalState } from "../context/GlobalState";

const Balance = () => {
  const { transactions } = useGlobalState();

  const amounts = transactions.map((transaction) => transaction.amount);

  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

  return (
    <div className="flex flex-col justify-between p-4">
      <h3>Your Balance:</h3>
      <h1 className="text-2xl font-bold pt-3">${total}</h1>
    </div>
  );
};

export default Balance;
