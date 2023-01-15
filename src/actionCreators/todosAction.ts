import {Dispatch} from "redux";
import {TodoAction, TodoActionsTypes} from "../types/todoTypes";
import axios from "axios";

export const todoFetch = (limit = 10, page = 1) => {
    return async (dispatch: Dispatch<TodoAction>) => {
        try {
            dispatch({type: TodoActionsTypes.FETCH_TODO})
            const response = await axios("https://jsonplaceholder.typicode.com/todos", {
                params: {_limit: limit, _page: page}
            })
            dispatch({type: TodoActionsTypes.FETCH_TODO_SUCCESS, payload: response.data})
        } catch (e) {
            dispatch({type: TodoActionsTypes.FETCH_TODO_ERROR, payload: 'something went error'})
        }
    }
}

export const setTodoPage = (page: number): TodoAction => {
    return {type: TodoActionsTypes.SET_TODO_PAGE, payload: page}
}