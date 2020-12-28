import { createStore, combineReducers } from "redux";

import calculatorReducer from "./Calculator/Calculator.reducer";

const rootReducer = combineReducers({
  calculator: calculatorReducer,
});

const store = createStore(rootReducer);

export default store;

export type RootState = ReturnType<typeof rootReducer>;
