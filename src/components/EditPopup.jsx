import React, { useContext, useState } from "react";
import { TransactionsContext } from "../context/TransactionsStore";

function EditPopup({ setShowEditPopup, transaction }) {
  const [updatedTransaction, setUpdatedTransaction] = useState(transaction);

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

    /**
     * @todo :replace action with action creator
     */
    dispatchTransactions({
      type: "EDITTRANSACTION",
      payload: updatedTransaction,
      original:transaction
    });



    setTimeout(()=>setShowEditPopup(false),500)
  };

  const categories = isIncome ? incomeCategories : expenseCategories;

  return (
    <div className="transaction-form-container edit-popup">
      <h2>Edit Transaction</h2>

      <p className="close" onClick={() => setShowEditPopup(false)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="800px"
          height="800px"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M5.29289 5.29289C5.68342 4.90237 6.31658 4.90237 6.70711 5.29289L12 10.5858L17.2929 5.29289C17.6834 4.90237 18.3166 4.90237 18.7071 5.29289C19.0976 5.68342 19.0976 6.31658 18.7071 6.70711L13.4142 12L18.7071 17.2929C19.0976 17.6834 19.0976 18.3166 18.7071 18.7071C18.3166 19.0976 17.6834 19.0976 17.2929 18.7071L12 13.4142L6.70711 18.7071C6.31658 19.0976 5.68342 19.0976 5.29289 18.7071C4.90237 18.3166 4.90237 17.6834 5.29289 17.2929L10.5858 12L5.29289 6.70711C4.90237 6.31658 4.90237 5.68342 5.29289 5.29289Z"
            fill="#0F1729"
          />
        </svg>
      </p>
      <form onSubmit={handleSubmit} className="transaction-form">
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            name="title"
            placeholder="Enter transaction title"
            required
            value={updatedTransaction.title}
            onChange={(e) =>
              setUpdatedTransaction({
                ...updatedTransaction,
                title: e.target.value,
              })
            }
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
            value={updatedTransaction.amount}
            onChange={(e) =>
              setUpdatedTransaction({
                ...updatedTransaction,
                amount: e.target.value,
              })
            }
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
                setUpdatedTransaction({
                  ...updatedTransaction,
                  type: e.target.value,
                });
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
            <select
              id="category"
              name="category"
              onChange={(e) => {
                setUpdatedTransaction({
                  ...updatedTransaction,
                  category: e.target.value,
                });
              }}
            >
              {categories.map((cat) => (
                <option
                  key={cat}
                  value={cat}
                  defaultChecked={updatedTransaction.category == cat}
                >
                  {cat}
                </option>
              ))}
            </select>
          </div>
        </div>
        {showPopup && (
          <div className="popup">
            <h3>transaction added successfuly</h3>
          </div>
        )}
        <button type="submit" className="submit-btn">
          Add Transaction
        </button>
      </form>
    </div>
  );
}

export default EditPopup;
