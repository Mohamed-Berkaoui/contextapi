import { createContext, useState } from "react";

export const TransactionsContext = createContext();

function TransactionsStore({ children }) {
  const [transactions, setTransactions] = useState([]);
  /**
   * 
   * @todo convert state to reducer {useReducer}
   */

  function addNewTransaction(newtransaction) {
    setTransactions([...transactions, newtransaction]);
  }
  function removeTransaction(transaction) {
    setTransactions(
      transactions.filter((item) => item.title != transaction.title),
    );
  }
  function editTransaction(transaction) {
    setTransactions(
      transactions.map((item) =>
        item.title == transaction ? transaction : item,
      ),
    );
  }
  return (
    <TransactionsContext.Provider value={{ transactions, addNewTransaction,editTransaction,removeTransaction }}>
      {children}
    </TransactionsContext.Provider>
  );
}

export default TransactionsStore;
