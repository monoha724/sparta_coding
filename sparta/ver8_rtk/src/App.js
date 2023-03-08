import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { newTodo, doneState, deleteTodo, editState, fixTodo } from "./redux/moduels/todoModule";

function App() {
  const todoList = useSelector((state) => state.todo);
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [fixTitle, setFixTitle] = useState("");
  const [fixContent, setFixContent] = useState("");


  return (
    <div className="App">
      <div>
        <h1>To Do List</h1>
      </div>
      <hr />
      <form>
        <label htmlFor="">제목 : </label>
        <input type="text" onChange={(e)=>{
          setTitle(e.target.value);
        }}/>
        <label htmlFor="">내용 : </label>
        <input type="text" onChange={(e)=>{
          setContent(e.target.value);
        }}/>
        <button onClick={(e)=>{
          e.preventDefault();
          dispatch(newTodo({title, content}))
          setTitle("");
          setContent("");
        }}>작성</button>
      </form>
      <hr />
      <div>
        <div>
          <h2>해야 할 일</h2>
          {todoList.map((item)=>
            !item.isDone &&
              <div key={item.id}>
                {item.edit ? 
                  <div>
                    <input value={fixTitle} onChange={(e)=>{
                      setFixTitle(e.target.value);
                    }}/>
                    <input value={fixContent} onChange={(e)=>{
                      setFixContent(e.target.value);
                    }}/>
                    <button onClick={()=>{
                      dispatch(fixTodo({id:item.id, title:fixTitle, content:fixContent}))
                    }}>수정완료</button>
                      <button onClick={()=>{
                        dispatch(doneState(item.id))
                      }}>완료</button>
                      <button onClick={()=>{
                        dispatch(deleteTodo(item.id))
                      }}>삭제</button>
                  </div>
                  : 
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.content}</p>
                    <button onClick={()=>{
                      dispatch(editState(item.id))
                      setFixTitle(item.title)
                      setFixContent(item.content)
                    }}>수정</button>
                    <button onClick={()=>{
                      dispatch(doneState(item.id))
                    }}>완료</button>
                    <button onClick={()=>{
                      dispatch(deleteTodo(item.id))
                    }}>삭제</button>
                  </div>
                }
              </div>
          )}
        </div>
        <hr />
        <div>
          <div>
            <h2>끝난 일</h2>
          {todoList.map((item)=>
            item.isDone &&
              <div key={item.ie}>
                <h3>{item.title}</h3>
                <p>{item.content}</p>
                <button onClick={()=>{
                  dispatch(doneState(item.id))
                }}>취소</button>
                <button onClick={()=>{
                  dispatch(deleteTodo(item.id))
                }}>삭제</button>
              </div>
          )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;