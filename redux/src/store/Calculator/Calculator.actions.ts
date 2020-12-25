import { Action } from "../Types/Action";
import { SUBTRACT, SUM } from "./calculator.types";

export const sum = (a: number, b: number): Action => {
  return {
    type: SUM,
    payload: [a, b],
  };
};

export const subtract = (a: number, b: number): Action => {
  return {
    type: SUBTRACT,
    payload: [a, b],
  };
};
