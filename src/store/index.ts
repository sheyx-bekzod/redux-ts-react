import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import {userReducer} from "../reducer/userReducer";
import {root} from "../reducer";

export const store = createStore(root, applyMiddleware(thunk))