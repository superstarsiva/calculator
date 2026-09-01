
import { useState } from "react";
import "./App.css";

function App() {
  const [display, setDisplay] = useState("0");
  const [firstNumber, setFirstNumber] = useState(null);
  const [operator, setOperator] = useState(null);

  const numberClick = (number) => {
    setDisplay(display === "0" ? number : display + number);
  };

  const operatorClick = (op) => {
    setFirstNumber(Number(display));
    setOperator(op);
    setDisplay("0");
  };

  const calculate = () => {
    const secondNumber = Number(display);
    let result;

    if (operator === "+") {
      result = firstNumber + secondNumber;
    } else if (operator === "-") {
      result = firstNumber - secondNumber;
    } else if (operator === "*") {
      result = firstNumber * secondNumber;
    } else if (operator === "/") {
      result = firstNumber / secondNumber;
    }

    setDisplay(String(result));
    setFirstNumber(null);
    setOperator(null);
  };

  const clear = () => {
    setDisplay("0");
    setFirstNumber(null);
    setOperator(null);
  };

  return (
    <div className="calculator">
      <div className="display">{display}</div>

      <div className="buttons">
        <button onClick={clear}>C</button>

        <button onClick={() => operatorClick("/")}>÷</button>
        <button onClick={() => operatorClick("*")}>×</button>
        <button onClick={() => operatorClick("-")}>−</button>

        <button onClick={() => numberClick("7")}>7</button>
        <button onClick={() => numberClick("8")}>8</button>
        <button onClick={() => numberClick("9")}>9</button>
        <button onClick={() => operatorClick("+")}>+</button>

        <button onClick={() => numberClick("4")}>4</button>
        <button onClick={() => numberClick("5")}>5</button>
        <button onClick={() => numberClick("6")}>6</button>
        <button className="equals" onClick={calculate}>
          =
        </button>

        <button onClick={() => numberClick("1")}>1</button>
        <button onClick={() => numberClick("2")}>2</button>
        <button onClick={() => numberClick("3")}>3</button>

        <button onClick={() => numberClick("0")} className="zero">
          0
        </button>
      </div>
    </div>
  );
}

export default App;

