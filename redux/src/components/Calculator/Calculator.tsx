import React, { FunctionComponent, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { CalculatorState } from "../../store/Types/CalculatorState";

import { SUM, SUBTRACT } from "../../store/Calculator/calculator.types";

import "./calculator.scss";
import { subtract, sum } from "../../store/Calculator/Calculator.actions";

const Calculator: FunctionComponent = () => {
  const [a, setA] = useState<string>("0");
  const [b, setB] = useState<string>("0");

  const calculatorState = useSelector<
    CalculatorState,
    CalculatorState["total"]
  >((state) => state.total);
  const dispatch = useDispatch();

  const calculate = (type: string) => {
    if (type === SUM) {
      dispatch(sum(parseFloat(a), parseFloat(b)));
    } else {
      dispatch(subtract(parseFloat(a), parseFloat(b)));
    }
  };

  return (
    <div className="App">
      <h1>React | Redux</h1>

      <div className="calculator">
        <input
          onChange={(event: any) => setA(event.target.value)}
          value={a}
          placeholder="Type number A"
          type="number"
        />
        <input
          onChange={(event: any) => setB(event.target.value)}
          value={b}
          placeholder="Type number B"
          type="number"
        />

        <button onClick={() => calculate(SUM)}>Sum</button>
        <button onClick={() => calculate(SUBTRACT)}>Subtract</button>
      </div>

      <span>Total: {calculatorState}</span>
    </div>
  );
};

// const mapStateToProps = (state: CalculatorState) => ({
//   total: state.total,
// });

// const connector = connect(mapStateToProps);

// type PropsFromRedux = ConnectedProps<typeof connector>;

// type Props = PropsFromRedux;

export default Calculator;
