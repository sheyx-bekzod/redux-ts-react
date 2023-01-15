
export interface StateTypes {
    user: any[]
    loading: boolean
    error: null | string
}



// actions

export enum ActionTypes {
    FETCH_USER = "FETCH_USER",
    FETCH_USER_ERROR = "FETCH_USER_ERROR",
    FETCH_USER_SUCCESS = "FETCH_USER_SUCCESS"
}


interface FetchUserAction {
    type: ActionTypes.FETCH_USER
}

interface FetchUserErrorAction {
    type: ActionTypes.FETCH_USER_ERROR
    payload: string
}

interface FetchUserSuccessAction {
    type: ActionTypes.FETCH_USER_SUCCESS
    payload: any[]
}

export type actionModels = FetchUserAction | FetchUserErrorAction | FetchUserSuccessAction

