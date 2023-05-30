import { VictoryPie, VictoryLabel } from "victory";
import { useGlobalState } from "../context/GlobalState";

function ExpenseChart() {
  const { transactions } = useGlobalState();

  const totalIncome = transactions
    .filter((transaction) => transaction.amount > 0)
    .reduce((acc, transaction) => (acc += transaction.amount), 0);

  const totalExpense = transactions
    .filter((transaction) => transaction.amount < 0)
    .reduce((acc, transaction) => (acc += transaction.amount), 0) * -1;

  const totalExpensePercentage = totalIncome !== 0 ? Math.round((totalExpense / totalIncome) * 100) : 0;
  const totalIncomePercentage = 100 - totalExpensePercentage;


  return (
    <div>
      <VictoryPie
        colorScale={["#f87171", "#34d399"]}
        data={[
          { x: "Expenses", y: totalExpensePercentage },
          { x: "Incomes", y: totalIncomePercentage },
        ]}
        labels={({ datum }) => `${datum.y}%`}
        labelComponent={<VictoryLabel angle={45} style={{ fill: "white" }} />}
      />
    </div>
  );
}

export default ExpenseChart;

