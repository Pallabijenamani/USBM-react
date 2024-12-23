/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import { CounterContext } from "./CounterProvider";
import "./Counter.css";

const Counter = () => {
  const { state, dispatch } = useContext(CounterContext);

  return (
    <div className="counter-container">
      <div className="counter-display">Count: {state.count}</div>
      <div className="counter-buttons">
        <button
          className="button"
          onClick={() => dispatch({ type: "INCREMENT" })}
        >
          Increment
        </button>
        <button
          className="button"
          onClick={() => dispatch({ type: "DECREMENT" })}
        >
          Decrement
        </button>
        <button
          className="button"
          onClick={() => dispatch({ type: "RESET" })}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Counter;
