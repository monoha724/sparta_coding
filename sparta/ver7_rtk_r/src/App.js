import React from "react";
import Home from "./pages/Home";
import TodoDetail from "./pages/TodoDetail";
import { Routes, Route } from "react-router-dom";

export function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/tododetail/:id" element={<TodoDetail />} />
      </Routes>
    </div>
  );
}

export default App;