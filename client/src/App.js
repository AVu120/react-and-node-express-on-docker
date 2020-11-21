import React, { useState, useEffect } from "react";
import "./App.css";

const App = () => {
  const [state, setState] = useState(null);

  useEffect(() => {
    fetch("/test")
      .then((res) => res.json())
      .then(
        (result) => {
          setState(result.message);
        },
        (error) => {
          console.warn("Frontend failed to connect to backend:", error);
        }
      );
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Welcome to the App!</h1>
        <p>{state}</p>
      </header>
    </div>
  );
};

export default App;
