import{combineReducers} from 'redux'
import userReducer from './userReducer'
import articleReducer from'./articleReducer'
import chatReducer from './chatSlice'
const rootReducer=combineReducers({
    userState:userReducer,
    articleState:articleReducer,
    chat:chatReducer,
   
});
export default rootReducer;