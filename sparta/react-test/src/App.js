import { useState } from 'react';
import './App.css';

function App() {
  const [todo, setTodo] = useState([]);
  const [text, setText] = useState("");
  const todoSubmit = () => {
    const newTodo = {
      id: todo.length + 1,
      text,
    }
    setTodo([...todo, newTodo]);
    setText("");
  }

  return (
    <div className="App">
      <header className="App-header align">
        <input type="text" value={text} onChange={(e) => setText(e.target.value)}/>
        <button onClick={todoSubmit}>추가하기</button>
      </header>
      <div className='align'>
        <h1>Todo List</h1>
      </div>
      <section className='cards-container'>
        {todo.map((item) =>
        <div className='cards'>
          <p>{item.text}</p>
        </div>
        )}
      </section>
    </div>
  );
}

export default App;
