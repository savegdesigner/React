import {
  ALTERAR_NUMERO_MINIMO,
  ALTERAR_NUMERO_MAXIMO,
} from "../actions/actionsTypes";

const INITIAL_STATE = {
  min: 1,
  max: 10,
};

export default function (state = INITIAL_STATE, action) {
  console.log("Reducer números:");
  console.log(state, "", action);

  switch (action.type) {
    case ALTERAR_NUMERO_MINIMO:
      return {
        ...state,
        min: action.payload,
      };
    case ALTERAR_NUMERO_MAXIMO:
      return {
        ...state,
        max: action.payload,
      };
    default:
      return state;
  }
}
