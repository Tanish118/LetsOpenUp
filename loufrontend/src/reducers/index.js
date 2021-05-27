import{combineReducers} from 'redux'
import userReducer from './userReducer'
import articleReducer from'./articleReducer'
import chReducer from'./chReducer'
const rootReducer=combineReducers({
    userState:userReducer,
    articleState:articleReducer,
    channelState:chReducer,
   
});
export default rootReducer;