import React, { useState } from "react";
import "./App.css";

function App() {
  const food = ["spaghetti", "ice cream", "sushi", "bologna", "cheese"];
  const list = food.map((item) => <h2>{item}</h2>);
  return <div className="App">{list}</div>;
}

export default App;
