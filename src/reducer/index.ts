import {combineReducers} from "redux";
import {userReducer} from "./userReducer";
import {todoReducer} from "./todoReducer";

export const root = combineReducers({
    user: userReducer,
    todo: todoReducer,
})


// root

export type RootState = ReturnType<typeof root>