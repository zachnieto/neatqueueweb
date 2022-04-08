import { combineReducers } from 'redux'
import discordReducer from "./discord-reducer";
import statsReducer from "./stats-reducer";


export default combineReducers({
    discordReducer,
    statsReducer
})