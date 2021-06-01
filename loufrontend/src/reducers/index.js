import{combineReducers} from 'redux'
import userReducer from './userReducer'
import articleReducer from'./articleReducer'
import chatReducer from './chatSlice'
import cameraReducer from './cameraSlice';
const rootReducer=combineReducers({
    userState:userReducer,
    articleState:articleReducer,
    chat:chatReducer,
    camera:cameraReducer,
});
export default rootReducer;