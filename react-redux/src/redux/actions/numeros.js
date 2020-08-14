import { ALTERAR_NUMERO_MINIMO, ALTERAR_NUMERO_MAXIMO } from "./actionsTypes";

// Action Creator
export function alterarNumeroMinimo(novoNumero) {
  return {
    type: ALTERAR_NUMERO_MINIMO,
    payload: novoNumero,
  };
}

export function alterarNumeroMaximo(novoNumero) {
  return {
    type: ALTERAR_NUMERO_MAXIMO,
    payload: novoNumero,
  };
}
