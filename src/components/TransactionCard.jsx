import { useContext } from "react"
import { TransactionsContext } from "../context/TransactionsStore"

function transactionCard({ transaction }) {
const {dispatchTransactions}=useContext(TransactionsContext)
    return (

        <div className="transaction-item">

            {" "}

            <div className="view-mode">

                <div className="transaction-info">

                    <div className="transaction-header">

                        <h4>{transaction.title}</h4>

                        <span

                            className={`type-badge ${transaction.type.toLowerCase()}`}

                        >

                            {transaction.type}

                        </span>

                    </div>

                    <p className="category">{transaction.category}</p>

                    <p className="date">

                        {new Date(transaction.date).toLocaleDateString()}

                    </p>

                </div>

                <div className="transaction-amount">

                    <p

                        className={`amount ${transaction.type === "Income" ? "income" : "expense"}`}

                    >

                        {transaction.type === "Income" ? "+" : "-"}$

                        {transaction.amount}

                    </p>

                </div>

                <div className="transaction-actions">

                    <button className="edit-btn">Edit</button>

                    <button className="delete-btn" onClick={()=>dispatchTransactions({type:"REMOVETRANSACTION",payload:transaction})}>Delete</button>

                </div>

            </div>

        </div>

    )

}

export default transactionCard