import React, { useContext, useState } from "react";

import TransactionForm from "./TransactionForm";

import { TransactionsContext } from "../context/TransactionsStore";

import TransactionCard from "./TransactionCard";
import DashboardSummary from "./DashboardSummary";

function Dashboard() {
  const { transactions } = useContext(TransactionsContext);

  const [editingId, setEditingId] = useState(null);

  const [editData, setEditData] = useState(null);

  const { expense, income } = transactions.reduce(
    (acc, trans) =>
      trans.type == "Expense"
        ? { ...acc, expense: acc.expense + +trans.amount }
        : { ...acc, income: acc.income + +trans.amount },
    {income:0,expense:0},
  );
console.log({ expense, income } )
  return (
    <div className="dashboard">
      <h2>Transactions</h2>

      {transactions.length === 0 ? (
        <div className="empty-state">
          <p>No transactions yet. Add one to get started!</p>
        </div>
      ) : (
        <>
          <div className="transactions-list">
            {transactions.map((transaction, i) => (
              <TransactionCard key={i} transaction={transaction} />
            ))}
          </div>
          <DashboardSummary income={income} expense={expense} />
        </>
      )}
    </div>
  );
}

export default Dashboard;
