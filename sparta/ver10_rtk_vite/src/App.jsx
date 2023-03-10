import api from "./axios/api";
import React, { useEffect, useState } from 'react';

function App() {
  const [todos, setTodos] = useState(null);
  const [inputValue, setInputValue] = useState({
    title: "", content: "",
  })
  const [tId, setTId] = useState('');
  const [tContent, setTContent] = useState('');

  const fatchTodos = async () => {
    const { data } = await api.get("/todos");
    console.log(data);
    setTodos(data);
  }

  const postTodo = async () => {
    api.post("/todos", inputValue);
    // setTodos([...todos, inputValue]);
    fatchTodos();
  }

  const deleteTodo = async (id) => {
    api.delete(`/todos/${id}`);
    setTodos(todos.filter((item)=> item.id !== id))
  }

  const updateTodo = async () => {
    api.patch(`/todos/${tId}`, {
      title: tContent,
    });
    setTodos(todos.map((item)=> item.id == tId ? {...item, title: tContent} : item))
  }

  useEffect(()=>{
    fatchTodos();
  },[])

  return (
    <div>
      <div>
        <input type="text" placeholder='수정할 아이디' onChange={(e)=>{
          setTId(e.target.value);
        }}/>
        <input type="text" placeholder='수정할 내용' onChange={(e)=>{
          setTContent(e.target.value);
        }}/>
        <button onClick={updateTodo}>수정</button>
      </div>
      <h1>Hi</h1>
        <div>
          <form onSubmit={(e)=>{
            e.preventDefault();
            postTodo();
          }}>
            <input type="text" value={inputValue.title} onChange={(e)=>{
              setInputValue({
                title: e.target.value,
              })
            }}/>
            {/* <input type="text" value={inputValue.content} onChange={(e)=>{
              setInputValue({
                content: e.target.value
              });
            }}/> */}
            <button type='submit'>추가</button>
          </form>
        </div>
      {todos?.map((todo)=> 
        (
          <div key={todo.id}>
            {todo.id} : {todo.title}
            <button onClick={()=>{
              deleteTodo(todo.id)
            }}>삭제</button>
          </div>
        )
      
      )}
    </div>
  )
}

export default App
 