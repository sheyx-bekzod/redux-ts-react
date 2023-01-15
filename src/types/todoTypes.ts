export interface stateTodo {
    todos: any[]
    loading: boolean
    page: number
    limit: number
    error: null | string
}

export enum TodoActionsTypes {
    FETCH_TODO = "FETCH_TODO",
    FETCH_TODO_SUCCESS = "FETCH_TODO_SUCCESS",
    FETCH_TODO_ERROR = "FETCH_TODO_ERROR",
    SET_TODO_PAGE = "SET_TODO_PAGE"
}

interface FetchTodoAction {
    type: TodoActionsTypes.FETCH_TODO
}

interface FetchTodoSuccessAction {
    type: TodoActionsTypes.FETCH_TODO_SUCCESS
    payload: any[]
}

interface FetchTodoErrorAction {
    type: TodoActionsTypes.FETCH_TODO_ERROR
    payload: string
}


interface SetTodAction {
    type: TodoActionsTypes.SET_TODO_PAGE
    payload: number
}

export type TodoAction = FetchTodoAction | FetchTodoSuccessAction | FetchTodoErrorAction | SetTodAction
