import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router";
import TransactionsStore from "./context/TransactionsStore.jsx";

createRoot(document.getElementById("root")).render(
  <TransactionsStore>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </TransactionsStore>,
);
