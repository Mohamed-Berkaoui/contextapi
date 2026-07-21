import React, { useContext, useState } from "react";
import { TransactionsContext } from "../context/TransactionsStore";

function TransactionForm({ onAddTransaction }) {
  const [isIncome, setIsIncome] = useState(true);
  const [showPopup, setShowPopup] = useState(false);
  const incomeCategories = ["Salary", "Freelance", "Other"];
  const expenseCategories = [
    "Food",
    "Transportation",
    "Shopping",
    "Bills",
    "Entertainment",
    "Health",
    "Other",
  ];
  const { dispatchTransactions } = useContext(TransactionsContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const transaction = {
      title: form.title.value,
      amount: form.amount.value,
      type: form.type.value,
      category: form.category.value,
      date: new Date().toISOString().split("T")[0],
    };
    dispatchTransactions({type:"ADDTRANSCATION",payload:transaction});
    form.title.value=""
    form.amount.value=""
      setShowPopup(true)
      setTimeout(()=>setShowPopup(false),3000)
  };

  const categories = isIncome ? incomeCategories : expenseCategories;

  return (
    <div className="transaction-form-container">
      <h2>Add New Transaction</h2>
      <form onSubmit={handleSubmit} className="transaction-form">
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            name="title"
            placeholder="Enter transaction title"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="amount">Amount</label>
          <input
            type="number"
            id="amount"
            name="amount"
            placeholder="0.00"
            step="0.01"
            min="0"
            required
          />
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="type">Type</label>
            <select
              id="type"
              name="type"
              onChange={(e) => {
                e.target.value == "Income"
                  ? setIsIncome(true)
                  : setIsIncome(false);
              }}
            >
              <option value="Income" defaultChecked>
                Income
              </option>
              <option value="Expense">Expense</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="category">Category</label>
            <select id="category" name="category">
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>
        </div>
   {   showPopup&& <div className="popup">
          <h3>transaction added successfuly</h3>
        </div>}
        <button type="submit" className="submit-btn">
          Add Transaction
        </button>
      </form>
    </div>
  );
}

export default TransactionForm;
