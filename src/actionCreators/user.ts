import {Dispatch} from "redux";
import {actionModels, ActionTypes} from "../types/userTypes";
import axios from "axios";

export const fetchUser = () => {
    return async (dispatch: Dispatch<actionModels>) => {
        try {
            dispatch({type: ActionTypes.FETCH_USER_ERROR,
                payload: "loading"})
            const response = await axios.get("https://jsonplaceholder.typicode.com/users")

            dispatch({type: ActionTypes.FETCH_USER_SUCCESS, payload: response.data})
        }catch (e) {
            dispatch({type: ActionTypes.FETCH_USER_ERROR, payload: "something went error"})
        }
    }
}
