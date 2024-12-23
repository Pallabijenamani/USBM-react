/* eslint-disable no-unused-vars */
import React, { createContext, useReducer } from "react";
import PropTypes from "prop-types";

const CounterContext = createContext();

const initialState = { count: 0 };

const counterReducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    case "DECREMENT":
      return { count: state.count - 1 };
    case "RESET":
      return { count: 0 };
    default:
      return state;
  }
};

export const CounterProvider = ({ children }) => {
  const [state, dispatch] = useReducer(counterReducer, initialState);

  return (
    <CounterContext.Provider value={{ state, dispatch }}>
      {children}
    </CounterContext.Provider>
  );
};

// Add PropTypes validation for the children prop
CounterProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CounterProvider;
export { CounterContext };
