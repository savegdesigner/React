import React from "react";
import "./App.css";

import Intervalo from "./components/Intervalo/Intervalo.component";
import Media from "./components/Media/Media.component";
import Soma from "./components/Soma/Soma.component";
import Sorteio from "./components/Sorteio/Sorteio.component";

function App() {
  return (
    <div className="App">
      <h1>React - Redux</h1>

      <div className="row">
        <Intervalo />
      </div>

      <div className="row">
        <Media></Media>
        <Soma></Soma>
        <Sorteio></Sorteio>
      </div>
    </div>
  );
}

export default App;
