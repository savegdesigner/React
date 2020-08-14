import React from "react";

import Card from "../Card/Card.component";

import "./styles.css";

export default (props) => {
  const { min, max, onMinChanged, onMaxChanged } = props;

  return (
    <Card title="Intervalo de números" color="red">
      <div className="intervalo">
        <span>
          <strong>Mínimo</strong>
          <input
            type="number"
            value={min}
            onChange={(e) => onMinChanged(+e.target.value)}
          />
        </span>

        <span>
          <strong>Máximo</strong>
          <input
            type="number"
            value={max}
            onChange={(e) => onMaxChanged(+e.target.value)}
          />
        </span>
      </div>
    </Card>
  );
};
