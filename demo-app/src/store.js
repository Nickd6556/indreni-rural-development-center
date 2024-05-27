import { combineReducers,legacy_createStore } from "redux";
import studentReducer from "./Redux/Reducers/studentReducer";
import cartReducer from "./Redux/Reducers/cartReducer";

const reducer=combineReducers({
    cart:cartReducer, 
    student:studentReducer
})

const store =legacy_createStore(reducer)


export default store