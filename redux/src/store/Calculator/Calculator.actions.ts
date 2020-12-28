import { Action } from "../Types/Action";
import { SUBTRACT, SUM } from "./calculator.types";

/**
 * Sum the given A: number value and the B: number value
 */
export const sum = (a: number, b: number): Action => {
  return {
    type: SUM,
    payload: [a, b],
  };
};

/**
 * Subtract the given A: number value and the B: number value
 */
export const subtract = (a: number, b: number): Action => {
  return {
    type: SUBTRACT,
    payload: [a, b],
  };
};
