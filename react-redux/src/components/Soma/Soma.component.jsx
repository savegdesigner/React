import React from "react";

import Card from "../Card/Card.component";

import "./styles.css";

export default (props) => {
  const { min, max } = props;

  return (
    <Card title="Soma dos números" color="dark">
      <div>
        <span>
          <span>Resultado:</span>
          <strong>{min + max}</strong>
        </span>
      </div>
    </Card>
  );
};
