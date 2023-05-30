import Balance from "./components/Balance";
import ExpenseChart from "./components/ExpenseChart";
import Header from "./components/Header";
import IncomeExpenses from "./components/IncomeExpenses";
import TransactionForm from "./components/transactions/TransactionForm";
import TransactionList from "./components/transactions/TransactionList";
import { GlobalProvider } from "./context/GlobalState";
import "./app.css";

const App = () => {
  return (
    <GlobalProvider>
      <div className="bg-zinc-900 text-white h-screen flex justify-center items-center">
       <div className="container mx-auto w-3/6">
          <div className="cont-history">
            <div className="">
              <h1 className="text-4lx font-bold">Expense Tracker</h1>
              <IncomeExpenses />
              <Balance />
              <TransactionForm />
            </div>
            <div className="flex flex-col flex-1">
              <ExpenseChart/>
              <TransactionList />
            </div>
          </div>
       </div>
      </div>
    </GlobalProvider>
  );
};

export default App;
