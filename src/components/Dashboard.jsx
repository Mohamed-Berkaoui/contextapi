import React, { useContext, useState } from "react";
import TransactionForm from "./TransactionForm";
import { TransactionsContext } from "../context/TransactionsStore";

function Dashboard() {

    const {transactions}=useContext(TransactionsContext)
  const [editingId, setEditingId] = useState(null);
  const [editData, setEditData] = useState(null);
  return (
    <div className="dashboard">

      <div className="dashboard-content">
        <div className="transactions-section">
          <h2>Transactions</h2>
          {transactions.length === 0 ? (
            <div className="empty-state">
              <p>No transactions yet. Add one to get started!</p>
            </div>
          ) : 
           ) : (
  //         <div className="transactions-list">
  //           {sortedTransactions.map(transaction => (
  //             <div
  //               key={transaction.id}
  //               className={`transaction-item ${editingId === transaction.id ? 'editing' : ''}`}
  //             >
  //               {editingId === transaction.id ? (
  //                 <div className="edit-mode">
  //                   <div className="edit-form-row">
  //                     <div className="edit-field">
  //                       <label>Title</label>
  //                       <input
  //                         type="text"
  //                         value={editData.title}
  //                         onChange={(e) => handleEditChange('title', e.target.value)}
  //                       />
  //                     </div>
  //                     <div className="edit-field">
  //                       <label>Amount</label>
  //                       <input
  //                         type="number"
  //                         value={editData.amount}
  //                         onChange={(e) => handleEditChange('amount', e.target.value)}
  //                         step="0.01"
  //                         min="0"
  //                       />
  //                     </div>
  //                     <div className="edit-field">
  //                       <label>Type</label>
  //                       <select
  //                         value={editData.type}
  //                         onChange={(e) => handleEditChange('type', e.target.value)}
  //                       >
  //                         <option value="Income">Income</option>
  //                         <option value="Expense">Expense</option>
  //                       </select>
  //                     </div>
  //                   </div>
  //                   <div className="edit-form-row">
  //                     <div className="edit-field">
  //                       <label>Category</label>
  //                       <select
  //                         value={editData.category}
  //                         onChange={(e) => handleEditChange('category', e.target.value)}
  //                       >
  //                         {(editData.type === 'Income'
  //                           ? ['Salary', 'Freelance', 'Other']
  //                           : ['Food', 'Transportation', 'Shopping', 'Bills', 'Entertainment', 'Health', 'Other']
  //                         ).map(cat => (
  //                           <option key={cat} value={cat}>{cat}</option>
  //                         ))}
  //                       </select>
  //                     </div>
  //                     <div className="edit-field">
  //                       <label>Date</label>
  //                       <input
  //                         type="date"
  //                         value={editData.date}
  //                         onChange={(e) => handleEditChange('date', e.target.value)}
  //                       />
  //                     </div>
  //                   </div>
  //                   <div className="edit-actions">
  //                     <button className="save-btn" onClick={handleSaveEdit}>Save</button>
  //                     <button className="cancel-btn" onClick={handleCancelEdit}>Cancel</button>
  //                   </div>
  //                 </div>
  //               ) : (
  //                 <div className="view-mode">
  //                   <div className="transaction-info">
  //                     <div className="transaction-header">
  //                       <h4>{transaction.title}</h4>
  //                       <span className={`type-badge ${transaction.type.toLowerCase()}`}>
  //                         {transaction.type}
  //                       </span>
  //                     </div>
  //                     <p className="category">{transaction.category}</p>
  //                     <p className="date">{new Date(transaction.date).toLocaleDateString()}</p>
  //                   </div>
  //                   <div className="transaction-amount">
  //                     <p className={`amount ${transaction.type === 'Income' ? 'income' : 'expense'}`}>
  //                       {transaction.type === 'Income' ? '+' : '-'}${transaction.amount.toFixed(2)}
  //                     </p>
  //                   </div>
  //                   <div className="transaction-actions">
  //                     <button
  //                       className="edit-btn"
  //                       onClick={() => handleStartEdit(transaction)}
  //                     >
  //                       Edit
  //                     </button>
  //                     <button
  //                       className="delete-btn"
  //                       onClick={() => handleDeleteTransaction(transaction.id)}
  //                     >
  //                       Delete
  //                     </button>
  //                   </div>
  //                 </div>
  //               )}
  //             </div>
  //           ))}
  //         </div>
  //       )}
  //     </div>
  //   </div>
  // </div>
  //   )
}

export default Dashboard;
