import React, { useState } from "react";
import { Container, Screen, Previous, Current, Button } from "../styled/styled";

export default function Main() {
  const [current, SetCurrent] = useState("");
  const [previous, SetPrevious] = useState("");
  const [operation, SetOperation] = useState("");

  const appendValue = (el) => {
    const value = el.target.innerText;
    if (current.includes(".") || value === ".") {
      return;
    } else {
      SetCurrent(current + value);
    }
  };

  const applyOperation = (el) => {
    if (current === "") return;
    // if (previous === "") return;
    if (previous !== "") {
      let value = compute();
      SetPrevious(value);
    } else {
      SetPrevious(current);
    }
    SetCurrent("");
    SetOperation(el.target.innerText);
  };

  const equal = () => {
    let value = compute();
    if (value === undefined || value === null) return;
    SetCurrent(value);
    SetPrevious("");
    SetOperation("");
  };
  const compute = () => {

    let result;
    let previousNumber = parseFloat(previous);
    let currentNumber = parseFloat(current);

    if (isNaN(previousNumber) || isNaN(currentNumber)) return;

    switch (operation) {
      case "+":
        result = previousNumber + currentNumber;
        break;
      case "-":
        result = previousNumber - currentNumber;
        break;
      case "*":
        result = previousNumber * currentNumber;
        break;
      case "/":
        result = previousNumber / currentNumber;
        break;
      case "%":
        result = previousNumber % currentNumber;
        break;
      default:
        break;
    }
    return result;
  };
  const clear = () => {
    SetCurrent("");
    SetPrevious("");
    SetOperation("");
  };

  return (
    <Container>
      <Screen gridSpan={4}>
        <Previous>
          {previous} {operation}
        </Previous>
        <Current>{current}</Current>
      </Screen>
      <Button spOps gridSpan={2} onClick={clear}>
        AC
      </Button>
      <Button spOps onClick={applyOperation}>
        %
      </Button>
      <Button operation onClick={applyOperation}>
        /
      </Button>
      <Button onClick={appendValue}>7</Button>
      <Button onClick={appendValue}>8</Button>
      <Button onClick={appendValue}>9</Button>
      <Button operation onClick={applyOperation}>
        *
      </Button>
      <Button onClick={appendValue}>4</Button>
      <Button onClick={appendValue}>5</Button>
      <Button onClick={appendValue}>6</Button>
      <Button operation onClick={applyOperation}>
        -
      </Button>

      <Button onClick={appendValue}>1</Button>
      <Button onClick={appendValue}>2</Button>
      <Button onClick={appendValue}>3</Button>
      <Button operation onClick={applyOperation}>
        +
      </Button>
      <Button gridSpan={2} onClick={appendValue}>
        0
      </Button>
      <Button onClick={appendValue}>.</Button>

      <Button operation onClick={equal}>
        =
      </Button>
    </Container>
  );
}
