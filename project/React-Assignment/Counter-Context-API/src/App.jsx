/* eslint-disable no-unused-vars */
// App.jsx
import React from "react";
import CounterProvider from "./components/CounterProvider";
import Counter from "./components/Counter";


function App() {
  return (
    <CounterProvider>
      <Counter />
    </CounterProvider>
  );
}

export default App;
