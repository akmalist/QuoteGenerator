import React from "react";
import ReactDOM from "react-dom";
import Quote from "./Quote";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <Quote />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
