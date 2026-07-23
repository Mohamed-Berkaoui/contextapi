import { createContext, useReducer, useState } from "react";

export const TransactionsContext = createContext();

function updateState(value) {
  localStorage.setItem("transactions", JSON.stringify(value));
  return value;
}

function transactionsReducer(state, action) {
  switch (action.type) {
    case "ADDTRANSCATION":
      return updateState([...state, action.payload]);

    case "REMOVETRANSACTION":
      return updateState(
        state.filter((item) => item.title != action.payload.title),
      );
      /**
       *@todo implimznt the edit transactoin action into a new comp
       */
    case "EDITTRANSACTION":
      console.log(action)
      return updateState(
        state.map((item) =>
          item.title == action.original.title ? action.payload : item,
        ),
      );
  }

  return state;
}
function TransactionsStore({ children }) {
  // const [transactions, setTransactions] = useState([]);
  // /**
  //  *
  //  * @todo convert state to reducer {useReducer}
  //  */

  // function addNewTransaction(newtransaction) {
  //   setTransactions([...transactions, newtransaction]);
  // }
  // function removeTransaction(transaction) {
  //   setTransactions(
  //     transactions.filter((item) => item.title != transaction.title),
  //   );
  // }
  // function editTransaction(transaction) {
  //   setTransactions(
  //     transactions.map((item) =>
  //       item.title == transaction ? transaction : item,
  //     ),
  //   );
  // }
  const [transactions, dispatchTransactions] = useReducer(
    transactionsReducer,
    JSON.parse(localStorage.getItem("transactions")) || [],
  );
  return (
    <TransactionsContext.Provider
      value={{ transactions, dispatchTransactions }}
    >
      {children}
    </TransactionsContext.Provider>
  );
}

export default TransactionsStore;
