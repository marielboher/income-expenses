import Balance from "./components/Balance";
import ExpenseChart from "./components/ExpenseChart";
import IncomeExpenses from "./components/IncomeExpenses";
import TransactionForm from "./components/transactions/TransactionForm";
import TransactionList from "./components/transactions/TransactionList";
import { GlobalProvider } from "./context/GlobalState";

const App = () => {
  return (
    <GlobalProvider>
      <div className="bg-zinc-900 text-white min-h-screen flex justify-center items-center py-2 px-4">
        <div className="container mx-auto px-4 sm:px-6 lg:px-10">
          <div className="bg-zinc-800 p-6 rounded-lg flex flex-col md:flex-row gap-6">
            <div className="flex-1">
              <h1 className="text-4xl font-bold mb-6">Expense Tracker</h1>
              <IncomeExpenses />
              <Balance />
              <TransactionForm />
            </div>
            <div className="flex-1">
              <div className="mb-6">
                <ExpenseChart />
              </div>
              <TransactionList />
            </div>
          </div>
        </div>
      </div>
    </GlobalProvider>
  );
};

export default App;