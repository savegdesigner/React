import React, { useState } from "react";
import "./App.css";

import Intervalo from "./components/Intervalo/Intervalo.component";
import Media from "./components/Media/Media.component";
import Soma from "./components/Soma/Soma.component";
import Sorteio from "./components/Sorteio/Sorteio.component";

function App() {
  const [min, setMin] = useState(1);
  const [max, setMax] = useState(12);

  return (
    <div className="App">
      <h1>React - Redux</h1>

      <div className="row">
        <Intervalo
          min={min}
          max={max}
          onMinChanged={setMin}
          onMaxChanged={setMax}
        />
      </div>

      <div className="row">
        <Media min={min} max={max}></Media>
        <Soma min={min} max={max}></Soma>
        <Sorteio min={min} max={max}></Sorteio>
      </div>
    </div>
  );
}

export default App;
