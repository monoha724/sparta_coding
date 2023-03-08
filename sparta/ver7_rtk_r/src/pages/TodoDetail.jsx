import React from 'react'
import { useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom';

function TodoDetail() {
    const param = useParams();
    const todo = useSelector((state) => state.todo);

    const findTodo = todo.find((item) => {
        return item.id === parseInt(param.id);
    })

    return (
    <div>
        <h1>상세페이지</h1>
        <h2>ID : {findTodo.id}</h2>
        <h3>제목 : {findTodo.title}</h3>
        <p>내용 : {findTodo.note}</p>
        <Link to="/">이전으로</Link>
    </div>
    )
}

export default TodoDetail