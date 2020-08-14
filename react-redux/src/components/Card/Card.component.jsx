import React from "react";
import Div from "./styles";

import "./styles.css";

export default (props) => {
  const { color } = props;

  return (
    <Div className={color}>
      <div className="header">
        <span className="title">{props.title}</span>
      </div>
      <div className="content">{props.children}</div>
    </Div>
  );
};
