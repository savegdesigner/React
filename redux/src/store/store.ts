import { createStore, combineReducers } from "redux";

import calculatorReducer from "./Calculator/Calculator.reducer";

const rootReducer = combineReducers({
  calculator: calculatorReducer,
});

const store = createStore(calculatorReducer);

export default store;
