import React, { useState } from "react";

function MakeTodo({todo, setTodo}) {
    const [title, setTitle] = useState("");
    const [comment, setComment] = useState("");

    const getTitle = (event) => {
        setTitle(event.target.value);
    }

    const getcomment = (event) => {
        setComment(event.target.value);
    }

    const addToDo = () => {
        const newToDo = {
        id: todo.length + 1,
        title: title,
        comment: comment,
        done: false,
        }

        setTodo([...todo, newToDo]);
        setTitle("");
        setComment("");
    }

    return(
        <div className="makeToDo">
            <div>
                제목 &nbsp;
                <input type="text" value={title} placeholder="내용을 입력하세요" required onChange={getTitle} />
                &nbsp;
                해야 할 일 &nbsp;
                <input type="text" value={comment} placeholder="내용을 입력하세요" required onChange={getcomment} />
            </div>
            <button className="write-btn" onClick={addToDo}>작성</button>
        </div>
    );
}

export default MakeTodo;