import React, { useState } from "react";
import "./App.css";

function App() {
  const [userInput, setUserInput] = useState("");
  return (
    <div className="App">
      <input type="text" onChange={(e) => setUserInput(e.target.value)} />
      <h3>{userInput}</h3>
    </div>
  );
}

export default App;
