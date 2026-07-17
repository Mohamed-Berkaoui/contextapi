import React from 'react'

function DashboardSummary() {
  return (
   <div className="dashboard-summary">
        <div className="summary-card income-card">
          <h3>Total Income</h3>
          <p className="amount">${income.toFixed(2)}</p>
        </div>
        <div className="summary-card expense-card">
          <h3>Total Expenses</h3>
          <p className="amount">${expense.toFixed(2)}</p>
        </div>
        <div className="summary-card balance-card">
          <h3>Balance</h3>
          <p className="amount" style={{ color: balance >= 0 ? '#4CAF50' : '#f44336' }}>
            ${balance.toFixed(2)}
          </p>
        </div>
      </div>
  )
}

export default DashboardSummary