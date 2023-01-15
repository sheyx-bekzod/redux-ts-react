import {stateTodo, TodoAction, TodoActionsTypes} from "../types/todoTypes";

const initialState: stateTodo = {
    todos: [],
    loading: false,
    limit: 10,
    page: 1,
    error: null
}

export const todoReducer = (state = initialState, action: TodoAction): stateTodo => {
    switch (action.type) {
        case TodoActionsTypes.FETCH_TODO: {
            return {
                ...state, loading: true
            }
        }

        case TodoActionsTypes.FETCH_TODO_SUCCESS: {
            return {
                ...state, loading: false, todos: action.payload,
            }
        }

        case TodoActionsTypes.FETCH_TODO_ERROR: {
            return {
                ...state, loading: false, todos: [], error: action.payload
            }
        }

        case TodoActionsTypes.SET_TODO_PAGE: {
            return {
                ...state, page: action.payload
            }
        }

        default : {
            return state
        }
    }
}