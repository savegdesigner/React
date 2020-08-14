import React from "react";

import Card from "../Card/Card.component";

import "./styles.css";

export default (props) => {
  const { min, max } = props;

  const aleatorio = parseInt(Math.random() * (max - min) + min);

  return (
    <Card title="Sorteio de um número" color="pink">
      <div>
        <span>
          <span>Resultado:</span>
          <strong>{aleatorio}</strong>
        </span>
      </div>
    </Card>
  );
};
