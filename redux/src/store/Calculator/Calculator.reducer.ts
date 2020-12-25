import { Action } from "../Types/Action";
import { CalculatorState } from "../Types/CalculatorState";
import { SUBTRACT, SUM } from "./calculator.types";

const INITIAL_STATE: CalculatorState = {
  total: 0,
};

const calculatorReducer = (
  state: CalculatorState = INITIAL_STATE,
  action: Action
): CalculatorState => {
  switch (action.type) {
    case SUM:
      return {
        total: action.payload[0] + action.payload[1],
      };
    case SUBTRACT:
      return {
        total: action.payload[0] - action.payload[1],
      };
    default:
      return state;
  }
};

export default calculatorReducer;
