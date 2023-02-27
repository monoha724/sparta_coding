import React, { useState } from "react";
import Card from "./components/Card";
import MakeTodo from "./components/MakeTodo";
import "./Style.css";

function App() {
  const [todo, setTodo] = useState([]);
  
  return (
    <div className="container">
      <div className="top-banner">
        <h1>TO DO LIST</h1>
      </div>
      <MakeTodo todo={todo} setTodo={setTodo} />
      <Card todo={todo} setTodo={setTodo} />
    </div>
  );
}

export default App;