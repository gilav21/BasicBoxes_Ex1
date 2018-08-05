import React from "react";
import ReactDOM from "react-dom";
import Block from "./Block.jsx";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <Block />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
