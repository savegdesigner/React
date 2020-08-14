import React from "react";

import Card from "../Card/Card.component";

import "./styles.css";

export default (props) => {
  const { min, max } = props;

  return (
    <Card title="Média de números" color="blue">
      <div>
        <span>
          <span>Resultado:</span>
          <strong>{(min + max) / 2}</strong>
        </span>
      </div>
    </Card>
  );
};
