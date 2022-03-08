import React, { useState } from "react";
import "./App.css";

function App() {
  const food = ["spaghetti", "ice cream", "sushi", "bologna", "cheese"];
  const [query, setQuery] = useState("");
  return (
    <div className="App">
      <input type="text" onChange={(e) => setQuery(e.target.value)} />
      {food
        .filter((item) => {
          if (query === "") {
            return item;
          } else if (item.includes(query)) {
            return item;
          }
        })
        .map((item) => (
          <div key={item}>
            <h2>{item}</h2>
          </div>
        ))}
    </div>
  );
}

export default App;
