import React, { useEffect, useState } from "react";
import axios from "axios"; // axios import 합니다.

const App = () => {
  const [todo, setTodo] = useState({
    title: "",
  });

  const [todos, setTodos] = useState(null);

  const fetchTodos = async () => {
    const { data } = await axios.get("http://localhost:3001/todos");
    setTodos(data);
  };

  const onSubmitHandler = async(todo) => {
    await axios.post("http://localhost:3001/todos", todo); 	
    setTodos([...todos, todo])
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onSubmitHandler(todo);
        }}
      >
        <input
          type="text"
          onChange={(ev) => {
            const { value } = ev.target;
            setTodo({
              ...todo,
              title: value,
            });
          }}
        />
        <button>추가하기</button>
      </form>
      <div>
        {todos?.map((todo) => (
          <div key={todo.id}>{todo.title}</div>
        ))}
      </div>
    </>
  );
};

export default App;