function Card({todo, setTodo}) {
    const delTodo = (id) => {
        const newToDos = todo.filter((todo) => todo.id !== id);
        setTodo(newToDos);
    }

    const todoState = (id) => {
        setTodo(
            todo.map((item) => 
            item.id === id ? {...item, done: !item.done} : item,
            )
        );
    }

    return(
    <div className="card-container">
        <div>
            <h2>해야 할 일</h2>
            <div className="top-cont">
                {todo.map((item) => 
                    item.done === false ?
                        <div key={item.id} className="card yet">
                            <div>
                                <h3>{item.title}</h3>
                                <p>{item.comment}</p>
                            </div>
                            <div className="card-btn">
                                <button onClick={() => todoState(item.id)}>완료</button>
                                <button onClick={() => delTodo(item.id)}>삭제</button>
                            </div>
                        </div>
                    : null)
                }
            </div>
        </div>
        
        <div>
            <h2>완료된 일</h2>
            <div className="bot-cont">
                {todo.map((item) => 
                item.done === true ?
                    <div key={item.id} className="card done">
                        <div>
                            <h3>{item.title}</h3>
                            <p>{item.comment}</p>
                        </div>
                        <div className="card-btn">
                            <button onClick={() => todoState(item.id)}>복구</button>
                            <button onClick={() => delTodo(item.id)}>삭제</button>
                        </div>
                    </div>
                : null
                )}
            </div>
        </div>
    </div>
    )
}

export default Card;