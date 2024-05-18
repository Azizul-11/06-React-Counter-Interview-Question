import React from "react";
import "./App.css";
import { useState } from "react";
const App = () => {
  const [counter, setCounter] = useState(0);

  // const addValue = () => {
  //   setCounter(counter + 1);
  //   setCounter(counter + 1);
  //   setCounter(counter + 1);
  //   setCounter(counter + 1);
  //   setCounter(counter + 1);
  //   setCounter(counter + 1);
  // };

  // What will happen if we write multiple counter values and why ?

  // -> value will be 1. Because it is a batch and only last statement will be executed


  const addValue = () => {
    setCounter((prevCounter)=>prevCounter + 1);
    setCounter((prevCounter)=>prevCounter + 1);
    setCounter((prevCounter)=>prevCounter + 1);
    setCounter((prevCounter)=>prevCounter + 1);
    setCounter((prevCounter)=>prevCounter + 1);
  };

  //Now what will happen
  
  // now counter will increase by 5. Because it take previous counter then update execute next counter

  const removeValue = () => {
    setCounter(counter - 1);
  };
  return (
    <div className="main-container">
      <h1>React Hooks</h1>
      <h2>Counter Project</h2>
      <h3>Count: {counter}</h3>
      <button onClick={addValue}>Add Value</button>
      <br />
      <button onClick={removeValue}>Remove Value</button>
    </div>
  );
};

export default App;
