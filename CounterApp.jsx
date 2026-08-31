import React, { useState } from "react";
import "./counter-styles.css";

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="container">
      <div className="counter-box">

        <h1>Counter App</h1>

        <div className="count">
          {count}
        </div>

        <div className="buttons">

          <button onClick={() => setCount(count - 1)}>
            −
          </button>

          <button onClick={() => setCount(0)}>
            Reset
          </button>

          <button onClick={() => setCount(count + 1)}>
            +
          </button>

        </div>

      </div>
    </div>
  );
}
