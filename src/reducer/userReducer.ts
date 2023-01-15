// initial state
// state

import {actionModels, ActionTypes, StateTypes} from "../types/userTypes";

const defaultState: StateTypes = {
    user: [],
    loading: true,
    error: null
}

export const userReducer = (state = defaultState, action: actionModels):StateTypes => {
    switch (action.type) {
        case ActionTypes.FETCH_USER:{
            return {
                ...state,
                loading: false,
                error: null,
                user: []
            }
        }

        case ActionTypes.FETCH_USER_SUCCESS:{
            return {
                ...state,
                loading: false,
                error: null,
                user: [...state.user, ...action.payload]
            }
        }

        case ActionTypes.FETCH_USER_ERROR:{
            return {
                ...state,
                loading: false,
                user: [],
                error: action.payload
            }
        }

        default: {
            return state
        }
    }
}