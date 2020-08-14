import React from "react";

import Card from "../Card/Card.component";

import "./styles.css";

export default (props) => {
  return (
    <Card title="Soma dos números" color="dark">
      <div>
        <span>
          <span>Resultado:</span>
          <strong>10</strong>
        </span>
      </div>
    </Card>
  );
};
