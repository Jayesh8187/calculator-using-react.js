import { useState } from "react";
import "../styles.scss";

const Calculator = () => {

  const [current, setCurrent] = useState("");
  const [prevoius, setPrevoius] = useState("");
  const [operations, setOperations] = useState("");

  const allclearHandler = () => {
    setCurrent("");
    setPrevoius("");
    setOperations("");
  };
  
  const deleteHandler = () => {
    setCurrent(String(current).slice(0, -1));
  };

  const appendValueHandler = (el) => {
    const value = el.target.getAttribute("data");
    if (value === "." && current.includes(".")) return;
    setCurrent(current + value);
  };

  const chooseOperationHandler = (el) => {
    if (current === "") return;
    if (prevoius !== "") {
      let value = compute();
      setPrevoius(value);
    } else {
      setPrevoius(current);
    }
    setCurrent("");
    setOperations(el.target.getAttribute("data"));
  };

  const equalHandler = () => {
    let value = compute();
    if (value === undefined || value == null) return;
    setCurrent(value);
    setPrevoius("");
    setOperations("");
  };

  const compute = () => {
    let result;
    let previousNumber = parseFloat(prevoius);
    let currentNumber = parseFloat(current);
    if (isNaN(previousNumber) || isNaN(currentNumber)) return;
    switch (operations) {
      case "÷":
        result = previousNumber / currentNumber;
        break;
      case "x":
        result = previousNumber * currentNumber;
        break;
      case "+":
        result = previousNumber + currentNumber;
        break;
      case "-":
        result = previousNumber - currentNumber;
        break;
      default:
        return;
    }
    return result;
  };

  return (
    <>
      <div className="container">
        <div className="screen">
          <div className="prevoius">
            {prevoius} {operations}
          </div>
          <div className="current">{current}</div>
        </div>
        <div className="button gridspan" onClick={allclearHandler}>
          AC
        </div>
        <div className="button" onClick={deleteHandler}>DEL</div>
        <div className="button operation" data={"÷"} onClick={chooseOperationHandler} >
          ÷
        </div>
        <div className="button" data={7} onClick={appendValueHandler}>
          7
        </div>
        <div className="button" data={8} onClick={appendValueHandler}>
          8
        </div>
        <div className="button" data={9} onClick={appendValueHandler}>
          {" "}
          9
        </div>
        <div className="button operation" data={"x"} onClick={chooseOperationHandler}>
          x
        </div>
        <div className="button" data={4} onClick={appendValueHandler}>
          4
        </div>
        <div className="button" data={5} onClick={appendValueHandler}>
          5
        </div>
        <div className="button" data={6} onClick={appendValueHandler}>
          6
        </div>
        <div className="button operation" data={"+"} onClick={chooseOperationHandler}>
          +
        </div>
        <div className="button" data={1} onClick={appendValueHandler}>
          1
        </div>
        <div className="button" data={2} onClick={appendValueHandler}>
          2
        </div>
        <div className="button" data={3} onClick={appendValueHandler}>
          3
        </div>
        <div className="button operation" data={"-"} onClick={chooseOperationHandler}>
          -
        </div>
        <div className="button decimal" data={"."} onClick={appendValueHandler}>
          .
        </div>
        <div className="button" data={0} onClick={appendValueHandler}>
          0
        </div>
        <div className="button gridspan equals"  onClick={equalHandler}>
          =
        </div>
      </div>
    </>
  );
};

export default Calculator;
