import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";

function App() {
  const [count, setCount] = useState(1);
  console.log(count);

  return (
    <>
      <div className='container'>
        <button className='btnDe' onClick={() => setCount((prev) => prev - 1)}>
          -
        </button>
        <div className='countContainer'>
          <input
            type='number'
            value={count}
            onChange={(e) => setCount(+e.target.value)}
            className='countInput'
          />
        </div>
        <button className='btnIn' onClick={() => setCount((prev) => prev + 1)}>
          +
        </button>
      </div>
    </>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
