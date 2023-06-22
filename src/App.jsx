import Balance from "./components/Balance";
import ExpenseChart from "./components/ExpenseChart";
import IncomeExpenses from "./components/IncomeExpenses";
import TransactionList from "./components/transactions/TransactionList";
import { GlobalProvider } from "./context/GlobalState";
import "./app.css";
import Home from "./components/home/Home";
import Nabvar from "./components/navbar/Nabvar";
import IncomeCard from "./components/incomeCard/IncomeCard";

const App = () => {
  return (
    <GlobalProvider>
      <div className="container-app">
        <Nabvar/>
          <Home/>
          <div className="container-cards">
          <IncomeCard />
          <div className="income-container">
            <IncomeExpenses />
            <div className="history">
              <Balance />
              <TransactionList />
            </div>
          </div>
          </div>
        <div className="container-all">
          <div className="chart-container">
            <div className="chart">
              <ExpenseChart />
            </div>
          </div>
        </div>
      </div>
    </GlobalProvider>
  );
};

export default App;
