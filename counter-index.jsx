import React from "react";
import { createRoot } from "react-dom/client";
import CounterApp from "./CounterApp";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CounterApp />
  </React.StrictMode>
);
