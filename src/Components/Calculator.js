import React, { useState } from "react";

function Calculator() {
  const [input, setInput] = useState("");

  const handleClick = (value) => {
    setInput((prev) => prev + value);
  };

  const calculate = () => {
    try {
      setInput(eval(input).toString()); // ⚠ eval is fine here for demo
    } catch {
      setInput("Error");
    }
  };

  const clear = () => setInput("");

  return (
    <div>
      <h2>Calculator</h2>
      <input type="text" value={input} readOnly />
      <div>
        <button onClick={() => handleClick("1")}>1</button>
        <button onClick={() => handleClick("2")}>2</button>
        <button onClick={() => handleClick("3")}>3</button>
        <button onClick={() => handleClick("+")}>+</button>
      </div>
      <div>
        <button onClick={() => handleClick("4")}>4</button>
        <button onClick={() => handleClick("5")}>5</button>
        <button onClick={() => handleClick("6")}>6</button>
        <button onClick={() => handleClick("-")}>-</button>
      </div>
      <div>
        <button onClick={() => handleClick("7")}>7</button>
        <button onClick={() => handleClick("8")}>8</button>
        <button onClick={() => handleClick("9")}>9</button>
        <button onClick={() => handleClick("*")}>*</button>
      </div>
      <div>
        <button onClick={() => handleClick("0")}>0</button>
        <button onClick={() => handleClick(".")}>.</button>
        <button onClick={calculate}>=</button>
        <button onClick={() => handleClick("/")}>/</button>
      </div>
      <button onClick={clear}>Clear</button>
    </div>
  );
}

export default Calculator;
