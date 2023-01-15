import {actions} from "../actionCreators"
import {useDispatch} from "react-redux";
import {bindActionCreators} from "redux";

export const useAction = () => {
    const dispatch = useDispatch()
    return bindActionCreators(actions, dispatch)
}
