import React, {useEffect} from 'react';
import {useAction} from "../hook/useAction";
import {userTypedSelector} from "../hook/useTypesSelector";

const Todo = () => {
    const {todoFetch, setTodoPage} = useAction()
    const {todos, loading, error, page, limit} = userTypedSelector(state => state.todo)
    const pages = [1, 2, 3, 4]

    useEffect(() => {
        todoFetch(limit, page)
    }, [page])

    return (
        <div>
            {todos.map(todo => (
                <h1>{todo.id}- {todo.title}</h1>
            ))}
            <div style={{display: "flex"}}>

            {pages.map(p => (
                <div style={{border: p === page ? "1 px solid green" : "1 px solid grey" }}>
                    <h5 onClick={() => setTodoPage(p)}>{p}</h5>
                </div>
            ))}
            </div>

        </div>
    );
};

export default Todo;