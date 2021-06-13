import{combineReducers} from 'redux'
import userReducer from './userReducer'
import articleReducer from'./articleReducer'
import chatReducer from './chatSlice'
import cameraReducer from './cameraSlice';
import commentReducer from'./commentSlice'
import likeReducer from'./likeSlicer'
const rootReducer=combineReducers({
    userState:userReducer,
    articleState:articleReducer,
    chat:chatReducer,
    comment:commentReducer,
    camera:cameraReducer,
    like:likeReducer,
});
export default rootReducer;