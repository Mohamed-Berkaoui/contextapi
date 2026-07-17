import { Route, Routes } from "react-router";
import "./App.css";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import TransactionForm from "./components/TransactionForm";

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <main className="app-main">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/add-transaction" element={<TransactionForm />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
