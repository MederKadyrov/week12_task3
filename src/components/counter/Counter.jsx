import React from "react";

const Counter = ({ counter, increment, decrement }) => {
  return (
    <div>
      <h3>{counter}</h3>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  );
};

export default Counter;
