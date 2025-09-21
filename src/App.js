import React from "react";
import "./index.css";
import Calculator from "./Components/Calculator";
import Notes from "./Components/Note";
import Todo from "./Components/Todo";

function App() {
  return (
    <div className="app">
      <header className="navbar">
        <h1>Daily Utility Dashboard</h1>
      </header>

      <main className="dashboard">
        <div className="card">
          <Calculator />
        </div>
        <div className="card">
          <Notes />
        </div>
        <div className="card">
          <Todo />
        </div>
      </main>
    </div>
  );
}

// App.js (add this inside your return, after main)
<footer className="footer">
  <p>© {new Date().getFullYear()} Daily Utility Dashboard. All Rights Reserved.</p>
</footer>


export default App;
