import React from "react";

import Card from "../Card/Card.component";

import "./styles.css";

export default (props) => {
  return (
    <Card title="Intervalo de números" color="red">
      <div className="intervalo">
        <span>
          <strong>Mínimo</strong>
          <input type="number" value={0} readOnly />
        </span>

        <span>
          <strong>Máximo</strong>
          <input type="number" value={10} readOnly />
        </span>
      </div>
    </Card>
  );
};
