import{combineReducers} from 'redux'
import userReducer from './userReducer'
import articleReducer from'./articleReducer'
import messagerRed from'./messagerRed'
const rootReducer=combineReducers({
    userState:userReducer,
    articleState:articleReducer,
    messageState:messagerRed,
});
export default rootReducer;