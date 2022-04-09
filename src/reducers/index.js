import { combineReducers } from 'redux'
import statsReducer from "./stats-reducer";
import sessionReducer from "./session-reducer";


export default combineReducers({
    statsReducer,
    sessionReducer
})