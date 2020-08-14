import React from "react";

import Card from "../Card/Card.component";

import { connect } from "react-redux";

import { alterarNumeroMinimo } from "../../redux/actions/numeros";
import { alterarNumeroMaximo } from "../../redux/actions/numeros";

import "./styles.css";

const Intervalo = (props) => {
  const { min, max, alterarMinimo, alterarMaximo } = props;

  return (
    <Card title="Intervalo de números" color="red">
      <div className="intervalo">
        <span>
          <strong>Mínimo</strong>
          <input
            type="number"
            value={min}
            onChange={(e) => alterarMinimo(+e.target.value)}
          />
        </span>

        <span>
          <strong>Máximo</strong>
          <input
            type="number"
            value={max}
            onChange={(e) => alterarMaximo(+e.target.value)}
          />
        </span>
      </div>
    </Card>
  );
};

const mapStateToProps = (state) => {
  return {
    min: state.numeros.min,
    max: state.numeros.max,
  };
};

function mapDispatchToProps(dispatch) {
  return {
    alterarMinimo(novoNumero) {
      // Action Creator -> action
      const action = alterarNumeroMinimo(novoNumero);
      dispatch(action);
    },
    alterarMaximo(novoNumero) {
      const action = alterarNumeroMaximo(novoNumero);
      dispatch(action);
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Intervalo);
